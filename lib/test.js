/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-01 09:53:02
 * @LastEditTime: 2019-07-01 14:14:42
 * @LastEditors: Please set LastEditors
 */
var _ = require('lodash')

var it = makeIterator(['a', 'b'])

console.log(it.next()) // { value: "a", done: false }
console.log(it.next()) // { value: "b", done: false }
console.log(it.next()) // { value: undefined, done: true }

// makeIterator函数，它是一个遍历器生成函数，作用就是返回一个遍历器对象。对数组['a', 'b']执行这个函数，就会返回该数组的遍历器对象（即指针对象）it。

function makeIterator (array) {
  var nextIndex = 0
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { value: undefined, done: true }
    }
  }
}

var compiled = _.template('hello <%= user %>!')({ user: 'fred' })
console.log(compiled)
compiled = _.template('hello <%= user %>!')
Object.keys(compiled).forEach(key => {
  console.log('key:' + key)
})
console.log(compiled({ user: 'fred' }))

compiled = _.template("<% print('Hello ' + epithet); %>")
console.log(compiled({ epithet: 'stooge' }))

// 默认的, template 通过 with 语句来取得 data 所有的值. 当然, 您也可以在 variable 设置里指定一个变量名. 这样能显著提升模板的渲染速度.
var template = _.template("Using 'with': <%= data.answer %>", {
  variable: 'data'
})({
  answer: 'no'
})
console.log(template)

// 以下代码把模板<%=xx%> ->{{xx}}
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}
template = _.template('Hello {{ name }}!')
console.log(template({ name: 'Mustache' }))

// 局部设置
compiled = _.template("<% print('Hello ' + epithet); %>", {
  // (RegExp): 用于检测代码来进行评估。
  evaluate: /<%([\s\S]+?)%>/g,
  // (RegExp): 用于检测data属性值是否注入。
  interpolate: /<%=([\s\S]+?)%>/g,
  // (RegExp): 用于检测data属性值是否HTML转义。
  escape: /<%-([\s\S]+?)%>/g
})
console.log(compiled({ epithet: 'stooge' }))
