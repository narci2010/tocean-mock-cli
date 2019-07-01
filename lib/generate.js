// https://github.com/vuejs/vue-cli/blob/master/lib/generate.js

var path = require('path')
var fs = require('fs')
var _ = require('lodash')
var axios = require('axios')
var Metalsmith = require('metalsmith')

var logger = require('./logger')

var config
var projectPath
var templatePath

function compareProjectIds (source, obj) {
  var di = _.xor(source, obj)
  if (!_.isEmpty(di)) {
    logger.log('"%s" 生成失败，请检查 ID 是否正确.', di.join(','))
    // 同步过滤配置项
    config.projects = config.projects.filter(o => !_.includes(di, o.id))
  }
}

function filterAPI (apis) {
  Object.keys(apis).forEach(projectId => {
    var api = apis[projectId]
    var confProject = _.find(config.projects, ['id', projectId])

    if (!confProject) return

    var whiteList = confProject.white
    var blackList = confProject.black

    api.mocks = api.mocks.filter(mock => {
      if (!_.isEmpty(whiteList)) {
        return _.includes(revertUrl(whiteList, mock.url), mock.url)
      } else if (!_.isEmpty(blackList)) {
        return !_.includes(revertUrl(blackList, mock.url), mock.url)
      }
      return true
    })
  })
}

function revertUrl (filters, url) {
  return filters.map(filter => {
    return url.indexOf(filter) !== -1 ? url : filter
  })
}

function init (apis, cb) {
  var projectIds = Object.keys(apis)
  var helperPath = path.resolve(templatePath, '../helper/index.js')
  var helper = fs.existsSync(helperPath) ? require(helperPath) : {}

  projectIds.forEach(projectId => {
    var api = apis[projectId]
    var confProject = _.find(config.projects, ['id', projectId])

    if (!confProject) return

    var dest = path.join(config.output, confProject.name)
    var data = {
      data: api,
      config: config,
      project: confProject,
      _: _,
      $$: Object.assign({}, helper, {
        relative: function (targetFile) {
          var relative = path.relative(dest, config.output)
          return path.posix.join(relative, targetFile)
        }
      })
    }
    // console.log('init.helper:' + helper)
    build(data, 'cover', dest, cb)
    if (fs.existsSync(path.join(templatePath, 'init'))) {
      // build 最后一个参数：true就是如果文件存在，不重复生成
      build(data, 'init', dest, cb, true)
    }
  })

  if (fs.existsSync(path.join(templatePath, 'common'))) {
    build(
      {
        config: config,
        _: _,
        $$: helper
      },
      'common',
      config.output,
      cb,
      true
    )
  }
}

function helper (data, source) {
  var helperPath = path.resolve(templatePath, '../helper/metalsmith.js')
  var helper = fs.existsSync(helperPath) ? require(helperPath) : function () {}
  // console.log('helper.helper:' + helper)
  // helper此处是一个空函数
  return function (files, metalsmith, done) {
    // console.log(
    //   'helper.helper(data, files, source):' + helper(data, files, source)
    // )
    // undefined
    files = helper(data, files, source) || files
    done()
  }
}

function build (data, source, dest, cb, ignore) {
  // #use(plugin)
  // Add the given plugin function to the middleware stack. Metalsmith uses ware to support middleware,
  // so plugins should follow the same pattern of taking arguments of (files, metalsmith, callback),
  //  modifying the files or metalsmith.metadata() argument by reference, and then calling callback to trigger the next step.

  // #clean(boolean)
  // Set whether to remove the destination directory before writing to it, or get the current setting. Defaults to true.

  // #source(path)
  // Set the relative path to the source directory, or get the full one if no path is provided. The source directory defaults to ./src.

  // #destination(path)
  // Set the relative path to the destination directory, or get the full one if no path is provided. The destination directory defaults to ./build.
  // console.log('templatePath:' + templatePath)
  // console.log('data:' + data)
  // console.log('source:' + source)
  // console.log('dest:' + dest)
  // console.log('ignore:' + ignore)
  var metalsmith = Metalsmith(templatePath)
    .use(helper(data, source))
    .use(renderTemplateFiles(data))
    .clean(false)
    .source(source)
    .destination(dest)

  // #ignore(path)
  // Ignore files/paths from being loaded into Metalsmith.
  if (ignore) {
    metalsmith.ignore(filePath => {
      // console.log('metalsmith.ignore:' + filePath)
      // 去掉模板路径，值保留文件名称
      // C:\Users\Administrator\.easy-mock-templates\b45312c3f297dfaa5e2c0bd5760e12c29e9cb7812a74f6afa5d4d44448556236\template\cover\instance.js
      // -> \instance.js
      filePath = filePath.replace(path.join(templatePath, source), '')
      // console.log('metalsmith.ignore1:' + filePath)
      // 增加目标输出文件路径
      // \instance.js
      // ->:D:\workspace\easy-mock-cli\bin\src\api\devos\instance.js
      filePath = path.join(dest, filePath)
      // console.log('metalsmith.ignore2:' + filePath)

      // 如果目标文件存在，则忽略掉它
      return fs.existsSync(filePath)
    })
  }
  // #build(fn)
  // Build with the given settings and a callback having signature fn(err, files).
  return metalsmith.build((error, files) => {
    if (error) logger.fatal(error)
    // console.log('files:' + files)
    // files 文件对象集合
    var f = Object.keys(files)
      .filter(o => fs.existsSync(path.join(dest, o)))
      .map(o => path.join(dest, o))
    // console.log('f:' + f)
    // f 生成的文件对象路径集合（string类型）
    cb(error, f)
  })
}

function renderTemplateFiles (data) {
  // 该函数是把默认的属性值是否注入 <%=xx%> 改为 {{xx}}
  return function (files) {
    Object.keys(files).forEach(fileName => {
      var file = files[fileName]
      file.contents = _.template(file.contents, {
        interpolate: /\{\{(.+?)\}\}/g
      })(data)
    })
  }
}

module.exports = function (_projectPath, _templatePath, _config, cb) {
  config = _config
  projectPath = _projectPath

  templatePath = path.join(_templatePath, 'template')
  config.output = path.resolve(projectPath, config.output || 'easy-mock-api')

  if (_.isEmpty(config.projects)) return
  if (!_.isArray(config.projects)) logger.fatal('请正确配置项目列表.')

  var projectIds = config.projects
    .filter(o => _.has(o, 'id') && _.has(o, 'name'))
    .map(project => project.id)

  if (projectIds.length !== config.projects.length) {
    logger.fatal('缺少字段，请正确配置项目列表.')
  }

  config.host = config.host || 'https://www.easy-mock.com'

  var api =
    config.host.slice(-1) === '/'
      ? `${config.host}api/mock/by_projects`
      : `${config.host}/api/mock/by_projects`

  axios
    .get(api, {
      params: {
        project_ids: projectIds.join(',')
      }
    })
    .then(res => {
      var data = res.data.data
      if (data) {
        filterAPI(data)
        compareProjectIds(projectIds, Object.keys(data))
        init(data, cb)
      } else {
        compareProjectIds(projectIds, [])
      }
    })
    .catch(error => {
      if (error.response) {
        logger.fatal(error.response.data)
      } else {
        logger.fatal(error)
      }
    })
}
