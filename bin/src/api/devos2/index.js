import instance from './instance';
import { convertRESTAPI } from '../util';

/** 带随机数据的 mock */
function mock_get(opts) {
  return instance({
    method: 'get',
    url:  '/mock',
    opts: opts
  });
}

/** 普通的 mock */
function user_get(opts) {
  return instance({
    method: 'get',
    url:  '/user',
    opts: opts
  });
}

/** 支持 restful 的 mock，替换 id 试试 */
function restful_id_list_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/restful/:id/list', opts),
    opts: opts
  });
}

export {
  mock_get,
  user_get,
  restful_id_list_get
};
