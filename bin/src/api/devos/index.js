import instance from './instance';
import { convertRESTAPI } from '../util';

/** getO */
function api_testObject_lisenceId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/testObject/{lisenceId}', opts),
    opts: opts
  });
}

/** saveO */
function api_testObject_lisenceId_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/api/testObject/{lisenceId}', opts),
    opts: opts
  });
}

/** savesO */
function api_testObjects_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/testObjects',
    opts: opts
  });
}

/** upload */
function api_upload_put(opts) {
  return instance({
    method: 'put',
    url:  '/api/upload',
    opts: opts
  });
}

/** headO */
function api_testObject_head(opts) {
  return instance({
    method: 'head',
    url:  '/api/testObject',
    opts: opts
  });
}

/** optionsO */
function api_testObject_options(opts) {
  return instance({
    method: 'options',
    url:  '/api/testObject',
    opts: opts
  });
}

/** patchO */
function api_testObject_patch(opts) {
  return instance({
    method: 'patch',
    url:  '/api/testObject',
    opts: opts
  });
}

/** getO */
function api_testObject_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/testObject',
    opts: opts
  });
}

/** 二维码支付(模式二)下单并生成二维码 */
function weixinpay_qcPay2_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/qcPay2',
    opts: opts
  });
}

/** 手机支付完成回调 */
function weixinpay_wxpayBack_get(opts) {
  return instance({
    method: 'get',
    url:  '/weixinpay/wxpayBack',
    opts: opts
  });
}

/** 手机支付完成回调 */
function weixinpay_wxpayBack_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/wxpayBack',
    opts: opts
  });
}

/** 二维码支付(模式一)根据商品ID预先生成二维码 */
function weixinpay_qcPay1_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/qcPay1',
    opts: opts
  });
}

/** list */
function sys_user_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/user/list',
    opts: opts
  });
}

/** password */
function sys_user_password_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/user/password',
    opts: opts
  });
}

/** save */
function sys_user_save_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/user/save',
    opts: opts
  });
}

/** update */
function sys_user_update_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/user/update',
    opts: opts
  });
}

/** getUserTypes */
function sys_user_usertype_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/user/usertype',
    opts: opts
  });
}

/** validate */
function sys_validate_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/validate',
    opts: opts
  });
}

/** wechatLogin */
function sys_wechatLogin_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/wechatLogin',
    opts: opts
  });
}

/** wechatLogin */
function sys_wechatLogin_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/wechatLogin',
    opts: opts
  });
}

/** 查询表对应的列名 */
function table_tableColumnList_get(opts) {
  return instance({
    method: 'get',
    url:  '/table/tableColumnList',
    opts: opts
  });
}

/** 查询表名 */
function table_tableNameList_get(opts) {
  return instance({
    method: 'get',
    url:  '/table/tableNameList',
    opts: opts
  });
}

/** 支付后台回调1 */
function weixinpay_callBack_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/callBack',
    opts: opts
  });
}

/** 纯H5支付(不建议在APP端使用) */
function weixinpay_h5pay_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/h5pay',
    opts: opts
  });
}

/** 预下单 */
function weixinpay_mobileCallBack_get(opts) {
  return instance({
    method: 'get',
    url:  '/weixinpay/mobileCallBack',
    opts: opts
  });
}

/** 预下单 */
function weixinpay_mobileCallBack_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/mobileCallBack',
    opts: opts
  });
}

/** H5支付(需要公众号或小程序内支付) */
function weixinpay_mpPay_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/mpPay',
    opts: opts
  });
}

/** 支付后台回调2 */
function weixinpay_payFinishCallBack_post(opts) {
  return instance({
    method: 'post',
    url:  '/weixinpay/payFinishCallBack',
    opts: opts
  });
}

/** list */
function sys_syslisence_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/syslisence',
    opts: opts
  });
}

/** save */
function sys_syslisence_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/syslisence',
    opts: opts
  });
}

/** update */
function sys_syslisence_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/syslisence',
    opts: opts
  });
}

/** delete */
function sys_syslisence_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/syslisence',
    opts: opts
  });
}

/** apply */
function sys_syslisence_apply_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/syslisence/apply',
    opts: opts
  });
}

/** grant */
function sys_syslisence_grant_lisenceId_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/sys/syslisence/grant/{lisenceId}', opts),
    opts: opts
  });
}

/** register */
function sys_syslisence_register_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/syslisence/register',
    opts: opts
  });
}

/** registerAgain */
function sys_syslisence_registerAgain_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/syslisence/registerAgain',
    opts: opts
  });
}

/** updateSystemName */
function sys_syslisence_systemname_systemName_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/sys/syslisence/systemname/{systemName}', opts),
    opts: opts
  });
}

/** updateServerUrl */
function sys_syslisence_systemurl_serverUrl_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/sys/syslisence/systemurl/{serverUrl}', opts),
    opts: opts
  });
}

/** info */
function sys_syslisence_lisenceId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/syslisence/{lisenceId}', opts),
    opts: opts
  });
}

/** delete */
function sys_user_delete_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/user/delete',
    opts: opts
  });
}

/** getInfo */
function sys_user_getInfo_userId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/user/getInfo/{userId}', opts),
    opts: opts
  });
}

/** info */
function sys_user_info_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/user/info',
    opts: opts
  });
}

/** info */
function sys_user_info_userId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/user/info/{userId}', opts),
    opts: opts
  });
}

/** save */
function sys_sysdict_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/sysdict',
    opts: opts
  });
}

/** update */
function sys_sysdict_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/sysdict',
    opts: opts
  });
}

/** delete */
function sys_sysdict_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/sysdict',
    opts: opts
  });
}

/** saveBatch */
function sys_sysdict_batch_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/sysdict/batch',
    opts: opts
  });
}

/** updateBatch */
function sys_sysdict_batch_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/sysdict/batch',
    opts: opts
  });
}

/** listByCondition */
function sys_sysdict_condition_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/sysdict/condition',
    opts: opts
  });
}

/** info */
function sys_sysdict_dictId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/sysdict/{dictId}', opts),
    opts: opts
  });
}

/** list */
function sys_sysdictitem_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/sysdictitem',
    opts: opts
  });
}

/** save */
function sys_sysdictitem_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/sysdictitem',
    opts: opts
  });
}

/** update */
function sys_sysdictitem_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/sysdictitem',
    opts: opts
  });
}

/** delete */
function sys_sysdictitem_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/sysdictitem',
    opts: opts
  });
}

/** saveBatch */
function sys_sysdictitem_batch_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/sysdictitem/batch',
    opts: opts
  });
}

/** updateBatch */
function sys_sysdictitem_batch_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/sysdictitem/batch',
    opts: opts
  });
}

/** listByCondition */
function sys_sysdictitem_condition_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/sysdictitem/condition',
    opts: opts
  });
}

/** info */
function sys_sysdictitem_dictItemId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/sysdictitem/{dictItemId}', opts),
    opts: opts
  });
}

/** run */
function sys_schedule_run_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/schedule/run',
    opts: opts
  });
}

/** save */
function sys_schedule_save_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/schedule/save',
    opts: opts
  });
}

/** update */
function sys_schedule_update_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/schedule/update',
    opts: opts
  });
}

/** info */
function sys_scheduleLog_info_logId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/scheduleLog/info/{logId}', opts),
    opts: opts
  });
}

/** list */
function sys_scheduleLog_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/scheduleLog/list',
    opts: opts
  });
}

/** sinaLogin */
function sys_sinaLogin_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/sinaLogin',
    opts: opts
  });
}

/** sinaLogin */
function sys_sinaLogin_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/sinaLogin',
    opts: opts
  });
}

/** list */
function sys_sysdict_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/sysdict',
    opts: opts
  });
}

/** list */
function sys_role_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/role/list',
    opts: opts
  });
}

/** save */
function sys_role_save_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/role/save',
    opts: opts
  });
}

/** select */
function sys_role_select_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/role/select',
    opts: opts
  });
}

/** update */
function sys_role_update_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/role/update',
    opts: opts
  });
}

/** delete */
function sys_schedule_delete_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/schedule/delete',
    opts: opts
  });
}

/** info */
function sys_schedule_info_jobId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/schedule/info/{jobId}', opts),
    opts: opts
  });
}

/** list */
function sys_schedule_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/schedule/list',
    opts: opts
  });
}

/** pause */
function sys_schedule_pause_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/schedule/pause',
    opts: opts
  });
}

/** resume */
function sys_schedule_resume_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/schedule/resume',
    opts: opts
  });
}

/** select */
function sys_menu_select_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/menu/select',
    opts: opts
  });
}

/** update */
function sys_menu_update_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/menu/update',
    opts: opts
  });
}

/** config */
function sys_oss_config_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/oss/config',
    opts: opts
  });
}

/** delete */
function sys_oss_delete_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/oss/delete',
    opts: opts
  });
}

/** list */
function sys_oss_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/oss/list',
    opts: opts
  });
}

/** saveConfig */
function sys_oss_saveConfig_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/oss/saveConfig',
    opts: opts
  });
}

/** saveConfig */
function sys_oss_saveConfig_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/oss/saveConfig',
    opts: opts
  });
}

/** upload */
function sys_oss_upload_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/oss/upload',
    opts: opts
  });
}

/** upload */
function sys_oss_upload_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/oss/upload',
    opts: opts
  });
}

/** qqLogin */
function sys_qqLogin_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/qqLogin',
    opts: opts
  });
}

/** qqLogin */
function sys_qqLogin_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/qqLogin',
    opts: opts
  });
}

/** delete */
function sys_role_delete_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/role/delete',
    opts: opts
  });
}

/** info */
function sys_role_info_roleId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/role/info/{roleId}', opts),
    opts: opts
  });
}

/** list */
function sys_menu_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/menu/list',
    opts: opts
  });
}

/** nav */
function sys_menu_nav_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/menu/nav',
    opts: opts
  });
}

/** save */
function sys_menu_save_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/menu/save',
    opts: opts
  });
}

/** queryColumns */
function sys_generator_queryColumns_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/queryColumns',
    opts: opts
  });
}

/** queryTables */
function sys_generator_queryTables_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/queryTables',
    opts: opts
  });
}

/** isLogin */
function sys_isLogin_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/isLogin',
    opts: opts
  });
}

/** list */
function sys_log_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/log/list',
    opts: opts
  });
}

/** login */
function sys_login_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/login',
    opts: opts
  });
}

/** login */
function sys_login_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/login',
    opts: opts
  });
}

/** logout */
function sys_logout_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/logout',
    opts: opts
  });
}

/** logout */
function sys_logout_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/logout',
    opts: opts
  });
}

/** delete */
function sys_menu_delete_menuId_delete(opts) {
  return instance({
    method: 'delete',
    url: convertRESTAPI('/sys/menu/delete/{menuId}', opts),
    opts: opts
  });
}

/** info */
function sys_menu_info_menuId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/menu/info/{menuId}', opts),
    opts: opts
  });
}

/** 修改引擎参数 */
function sys_engineParamController_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/engineParamController',
    opts: opts
  });
}

/** 删除引擎参数 */
function sys_engineParamController_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/engineParamController',
    opts: opts
  });
}

/** 获取引擎参数详情 */
function sys_engineParamController_getOptionValue_engineId_paramKey_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/engineParamController/getOptionValue/{engineId}/{paramKey}', opts),
    opts: opts
  });
}

/** 修改引擎参数详情 */
function sys_engineParamController_updateEngineParam_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/engineParamController/updateEngineParam',
    opts: opts
  });
}

/** code */
function sys_generator_code_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/code',
    opts: opts
  });
}

/** codeMany */
function sys_generator_codeMany_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/codeMany',
    opts: opts
  });
}

/** refresh */
function sys_generator_datasource_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/datasource',
    opts: opts
  });
}

/** dbInfos */
function sys_generator_dbInfos_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/dbInfos',
    opts: opts
  });
}

/** isInitDB */
function sys_generator_isInitDB_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/isInitDB',
    opts: opts
  });
}

/** list */
function sys_generator_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/generator/list',
    opts: opts
  });
}

/** info */
function sys_config_info_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/config/info/{id}', opts),
    opts: opts
  });
}

/** list */
function sys_config_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/config/list',
    opts: opts
  });
}

/** save */
function sys_config_save_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/config/save',
    opts: opts
  });
}

/** update */
function sys_config_update_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/config/update',
    opts: opts
  });
}

/** 获取引擎类型列表 */
function sys_engineController_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/engineController',
    opts: opts
  });
}

/** 保存引擎类型 */
function sys_engineController_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/engineController',
    opts: opts
  });
}

/** 修改引擎类型 */
function sys_engineController_put(opts) {
  return instance({
    method: 'put',
    url:  '/sys/engineController',
    opts: opts
  });
}

/** 删除引擎类型 */
function sys_engineController_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/engineController',
    opts: opts
  });
}

/** 获取引擎类型列表（不分页） */
function sys_engineController_getOptionValue_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/engineController/getOptionValue',
    opts: opts
  });
}

/** 根据id查询引擎详情 */
function sys_engineController_engineId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/sys/engineController/{engineId}', opts),
    opts: opts
  });
}

/** 获取引擎参数列表 */
function sys_engineParamController_get(opts) {
  return instance({
    method: 'get',
    url:  '/sys/engineParamController',
    opts: opts
  });
}

/** 保存引擎参数 */
function sys_engineParamController_post(opts) {
  return instance({
    method: 'post',
    url:  '/sys/engineParamController',
    opts: opts
  });
}

/** list */
function social_syssinauser_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/syssinauser',
    opts: opts
  });
}

/** delete */
function social_syssinauser_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/social/syssinauser',
    opts: opts
  });
}

/** unbind */
function social_syssinauser_unbind_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/social/syssinauser/unbind',
    opts: opts
  });
}

/** info */
function social_syssinauser_sinaUserId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/social/syssinauser/{sinaUserId}', opts),
    opts: opts
  });
}

/** list */
function social_syswechatuser_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/syswechatuser',
    opts: opts
  });
}

/** delete */
function social_syswechatuser_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/social/syswechatuser',
    opts: opts
  });
}

/** unbind */
function social_syswechatuser_unbind_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/social/syswechatuser/unbind',
    opts: opts
  });
}

/** info */
function social_syswechatuser_wechatUserId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/social/syswechatuser/{wechatUserId}', opts),
    opts: opts
  });
}

/** delete */
function sys_config_delete_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/sys/config/delete',
    opts: opts
  });
}

/** list */
function social_sysqquser_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/sysqquser',
    opts: opts
  });
}

/** delete */
function social_sysqquser_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/social/sysqquser',
    opts: opts
  });
}

/** unbind */
function social_sysqquser_unbind_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/social/sysqquser/unbind',
    opts: opts
  });
}

/** info */
function social_sysqquser_qqUserId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/social/sysqquser/{qqUserId}', opts),
    opts: opts
  });
}

/** getUserIdThruSinaUserId */
function social_getSysUserIdThruSinaUserId_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/getSysUserIdThruSinaUserId',
    opts: opts
  });
}

/** getUserIdThruWechatUserId */
function social_getSysUserIdThruWechatUserId_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/getSysUserIdThruWechatUserId',
    opts: opts
  });
}

/** saveConfig */
function social_saveConfig_post(opts) {
  return instance({
    method: 'post',
    url:  '/social/saveConfig',
    opts: opts
  });
}

/** saveConfig */
function social_saveConfig_put(opts) {
  return instance({
    method: 'put',
    url:  '/social/saveConfig',
    opts: opts
  });
}

/** 导出 Excel */
function excelfile_toExportExcel_get(opts) {
  return instance({
    method: 'get',
    url:  '/excelfile/toExportExcel',
    opts: opts
  });
}

/** 下载 Excel 模板 */
function excelfile_toExportExcelModel_get(opts) {
  return instance({
    method: 'get',
    url:  '/excelfile/toExportExcelModel',
    opts: opts
  });
}

/** loginCas1 */
function login_cas1_get(opts) {
  return instance({
    method: 'get',
    url:  '/login/cas1',
    opts: opts
  });
}

/** loginCas2 */
function login_cas2_get(opts) {
  return instance({
    method: 'get',
    url:  '/login/cas2',
    opts: opts
  });
}

/** info */
function login_info_get(opts) {
  return instance({
    method: 'get',
    url:  '/login/info',
    opts: opts
  });
}

/** info */
function login_info_head(opts) {
  return instance({
    method: 'head',
    url:  '/login/info',
    opts: opts
  });
}

/** info */
function login_info_post(opts) {
  return instance({
    method: 'post',
    url:  '/login/info',
    opts: opts
  });
}

/** info */
function login_info_put(opts) {
  return instance({
    method: 'put',
    url:  '/login/info',
    opts: opts
  });
}

/** info */
function login_info_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/login/info',
    opts: opts
  });
}

/** info */
function login_info_options(opts) {
  return instance({
    method: 'options',
    url:  '/login/info',
    opts: opts
  });
}

/** info */
function login_info_patch(opts) {
  return instance({
    method: 'patch',
    url:  '/login/info',
    opts: opts
  });
}

/** config */
function social_config_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/config',
    opts: opts
  });
}

/** getUserIdThruQqUserId */
function social_getSysUserIdThruQqUserId_get(opts) {
  return instance({
    method: 'get',
    url:  '/social/getSysUserIdThruQqUserId',
    opts: opts
  });
}

/** save */
function excel_excelconfig_post(opts) {
  return instance({
    method: 'post',
    url:  '/excel/excelconfig',
    opts: opts
  });
}

/** update */
function excel_excelconfig_put(opts) {
  return instance({
    method: 'put',
    url:  '/excel/excelconfig',
    opts: opts
  });
}

/** delete */
function excel_excelconfig_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/excel/excelconfig',
    opts: opts
  });
}

/** getExcelConfigAndExcludeByKeyOrTablename */
function excel_excelconfig_info_get(opts) {
  return instance({
    method: 'get',
    url:  '/excel/excelconfig/info',
    opts: opts
  });
}

/** info */
function excel_excelconfig_excelConfigId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/excel/excelconfig/{excelConfigId}', opts),
    opts: opts
  });
}

/** getExcelConfigByKey */
function excel_excelconfigByKey_get(opts) {
  return instance({
    method: 'get',
    url:  '/excel/excelconfigByKey',
    opts: opts
  });
}

/** getExcelConfigAndExcludeByKeyOrTablename */
function excel_excelconfigByKeyOrTablename_get(opts) {
  return instance({
    method: 'get',
    url:  '/excel/excelconfigByKeyOrTablename',
    opts: opts
  });
}

/** list */
function excel_excelconfigexclude_get(opts) {
  return instance({
    method: 'get',
    url:  '/excel/excelconfigexclude',
    opts: opts
  });
}

/** save */
function excel_excelconfigexclude_post(opts) {
  return instance({
    method: 'post',
    url:  '/excel/excelconfigexclude',
    opts: opts
  });
}

/** update */
function excel_excelconfigexclude_put(opts) {
  return instance({
    method: 'put',
    url:  '/excel/excelconfigexclude',
    opts: opts
  });
}

/** delete */
function excel_excelconfigexclude_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/excel/excelconfigexclude',
    opts: opts
  });
}

/** info */
function excel_excelconfigexclude_excelConfigExcludeId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/excel/excelconfigexclude/{excelConfigExcludeId}', opts),
    opts: opts
  });
}

/** 导入数据 */
function excelfile_post(opts) {
  return instance({
    method: 'post',
    url:  '/excelfile',
    opts: opts
  });
}

/** updateO */
function api_testObject_put(opts) {
  return instance({
    method: 'put',
    url:  '/api/testObject',
    opts: opts
  });
}

/** deleteO */
function api_testObject_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/api/testObject',
    opts: opts
  });
}

/** testSession */
function api_testSession_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/testSession',
    opts: opts
  });
}

/** bindingUser */
function api_weixin_bindUser_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/weixin/bindUser',
    opts: opts
  });
}

/** bindingUser */
function api_weixin_bindUser_put(opts) {
  return instance({
    method: 'put',
    url:  '/api/weixin/bindUser',
    opts: opts
  });
}

/** binding */
function api_weixin_binding_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/weixin/binding',
    opts: opts
  });
}

/** getMPLoginUrl */
function api_weixin_getMPLoginUrl_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/weixin/getMPLoginUrl',
    opts: opts
  });
}

/** getWechatLoginUrl */
function api_weixin_getWechatLoginUrl_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/weixin/getWechatLoginUrl',
    opts: opts
  });
}

/** mpBinding */
function api_weixin_mpBinding_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/weixin/mpBinding',
    opts: opts
  });
}

/** getAppName */
function app_appname_get(opts) {
  return instance({
    method: 'get',
    url:  '/app/appname',
    opts: opts
  });
}

/** getServerBase */
function app_server_get(opts) {
  return instance({
    method: 'get',
    url:  '/app/server',
    opts: opts
  });
}

/** captcha */
function captcha_get(opts) {
  return instance({
    method: 'get',
    url:  '/captcha.jpg',
    opts: opts
  });
}

/** list */
function excel_excelconfig_get(opts) {
  return instance({
    method: 'get',
    url:  '/excel/excelconfig',
    opts: opts
  });
}

/** bindingUser */
function api_qq_bindUser_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/qq/bindUser',
    opts: opts
  });
}

/** bindingUser */
function api_qq_bindUser_put(opts) {
  return instance({
    method: 'put',
    url:  '/api/qq/bindUser',
    opts: opts
  });
}

/** binding */
function api_qq_binding_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/qq/binding',
    opts: opts
  });
}

/** getQQLoginUrl */
function api_qq_getQQLoginUrl_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/qq/getQQLoginUrl',
    opts: opts
  });
}

/** signkey */
function api_signkey_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/signkey',
    opts: opts
  });
}

/** writeSignkey */
function api_signkey_put(opts) {
  return instance({
    method: 'put',
    url:  '/api/signkey',
    opts: opts
  });
}

/** vaidateSignkey */
function api_signkey_vaidate_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/signkey/vaidate',
    opts: opts
  });
}

/** bindingUser */
function api_sina_bindUser_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/sina/bindUser',
    opts: opts
  });
}

/** bindingUser */
function api_sina_bindUser_put(opts) {
  return instance({
    method: 'put',
    url:  '/api/sina/bindUser',
    opts: opts
  });
}

/** binding */
function api_sina_binding_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/sina/binding',
    opts: opts
  });
}

/** getSinaLoginUrl */
function api_sina_getSinaLoginUrl_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/sina/getSinaLoginUrl',
    opts: opts
  });
}

/** saveO */
function api_testObject_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/testObject',
    opts: opts
  });
}

/** ipspoof */
function api_ipspoof_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/ipspoof',
    opts: opts
  });
}

/** jwtkey */
function api_jwtkey_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/jwtkey',
    opts: opts
  });
}

/** logs */
function api_logs_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/logs',
    opts: opts
  });
}

/** logsfile */
function api_logsfile_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/logsfile',
    opts: opts
  });
}

/** mpTokenValidate */
function api_mpToken_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/mpToken',
    opts: opts
  });
}

/** testPrecision */
function api_precision_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/precision',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_options(opts) {
  return instance({
    method: 'options',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_patch(opts) {
  return instance({
    method: 'patch',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** 手机H5支付 */
function alipay_mobilePay_post(opts) {
  return instance({
    method: 'post',
    url:  '/alipay/mobilePay',
    opts: opts
  });
}

/** 电脑支付 */
function alipay_pcPay_post(opts) {
  return instance({
    method: 'post',
    url:  '/alipay/pcPay',
    opts: opts
  });
}

/** 二维码支付 */
function alipay_qcPay_post(opts) {
  return instance({
    method: 'post',
    url:  '/alipay/qcPay',
    opts: opts
  });
}

/** testCache */
function api_cache_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/cache',
    opts: opts
  });
}

/** testCache2 */
function api_cache2_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/cache2',
    opts: opts
  });
}

/** clientIp */
function api_clientip_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/clientip',
    opts: opts
  });
}

/** copyright */
function api_copyright_argot_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/copyright/{argot}', opts),
    opts: opts
  });
}

/** app支付服务端 */
function alipay_appPay_post(opts) {
  return instance({
    method: 'post',
    url:  '/alipay/appPay',
    opts: opts
  });
}

/** 支付宝支付回调(二维码、H5、网站) */
function alipay_callBack_post(opts) {
  return instance({
    method: 'post',
    url:  '/alipay/callBack',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_get(opts) {
  return instance({
    method: 'get',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_head(opts) {
  return instance({
    method: 'head',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_post(opts) {
  return instance({
    method: 'post',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_put(opts) {
  return instance({
    method: 'put',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** frontRcvResponse */
function alipay_frontRcvResponse_delete(opts) {
  return instance({
    method: 'delete',
    url:  '/alipay/frontRcvResponse',
    opts: opts
  });
}

/** 音频转文字 */
function AudioController_audioConvertToText_post(opts) {
  return instance({
    method: 'post',
    url:  '/AudioController/audioConvertToText',
    opts: opts
  });
}

export {
  api_testObject_lisenceId_get,
  api_testObject_lisenceId_post,
  api_testObjects_post,
  api_upload_put,
  api_testObject_head,
  api_testObject_options,
  api_testObject_patch,
  api_testObject_get,
  weixinpay_qcPay2_post,
  weixinpay_wxpayBack_get,
  weixinpay_wxpayBack_post,
  weixinpay_qcPay1_post,
  sys_user_list_get,
  sys_user_password_put,
  sys_user_save_post,
  sys_user_update_put,
  sys_user_usertype_get,
  sys_validate_get,
  sys_wechatLogin_post,
  sys_wechatLogin_put,
  table_tableColumnList_get,
  table_tableNameList_get,
  weixinpay_callBack_post,
  weixinpay_h5pay_post,
  weixinpay_mobileCallBack_get,
  weixinpay_mobileCallBack_post,
  weixinpay_mpPay_post,
  weixinpay_payFinishCallBack_post,
  sys_syslisence_get,
  sys_syslisence_post,
  sys_syslisence_put,
  sys_syslisence_delete,
  sys_syslisence_apply_post,
  sys_syslisence_grant_lisenceId_put,
  sys_syslisence_register_post,
  sys_syslisence_registerAgain_post,
  sys_syslisence_systemname_systemName_put,
  sys_syslisence_systemurl_serverUrl_put,
  sys_syslisence_lisenceId_get,
  sys_user_delete_delete,
  sys_user_getInfo_userId_get,
  sys_user_info_get,
  sys_user_info_userId_get,
  sys_sysdict_post,
  sys_sysdict_put,
  sys_sysdict_delete,
  sys_sysdict_batch_post,
  sys_sysdict_batch_put,
  sys_sysdict_condition_get,
  sys_sysdict_dictId_get,
  sys_sysdictitem_get,
  sys_sysdictitem_post,
  sys_sysdictitem_put,
  sys_sysdictitem_delete,
  sys_sysdictitem_batch_post,
  sys_sysdictitem_batch_put,
  sys_sysdictitem_condition_get,
  sys_sysdictitem_dictItemId_get,
  sys_schedule_run_get,
  sys_schedule_save_post,
  sys_schedule_update_put,
  sys_scheduleLog_info_logId_get,
  sys_scheduleLog_list_get,
  sys_sinaLogin_post,
  sys_sinaLogin_put,
  sys_sysdict_get,
  sys_role_list_get,
  sys_role_save_post,
  sys_role_select_get,
  sys_role_update_put,
  sys_schedule_delete_delete,
  sys_schedule_info_jobId_get,
  sys_schedule_list_get,
  sys_schedule_pause_get,
  sys_schedule_resume_get,
  sys_menu_select_get,
  sys_menu_update_put,
  sys_oss_config_get,
  sys_oss_delete_delete,
  sys_oss_list_get,
  sys_oss_saveConfig_post,
  sys_oss_saveConfig_put,
  sys_oss_upload_post,
  sys_oss_upload_put,
  sys_qqLogin_post,
  sys_qqLogin_put,
  sys_role_delete_delete,
  sys_role_info_roleId_get,
  sys_menu_list_get,
  sys_menu_nav_get,
  sys_menu_save_post,
  sys_generator_queryColumns_get,
  sys_generator_queryTables_get,
  sys_isLogin_get,
  sys_log_list_get,
  sys_login_post,
  sys_login_put,
  sys_logout_get,
  sys_logout_post,
  sys_menu_delete_menuId_delete,
  sys_menu_info_menuId_get,
  sys_engineParamController_put,
  sys_engineParamController_delete,
  sys_engineParamController_getOptionValue_engineId_paramKey_get,
  sys_engineParamController_updateEngineParam_put,
  sys_generator_code_get,
  sys_generator_codeMany_get,
  sys_generator_datasource_get,
  sys_generator_dbInfos_get,
  sys_generator_isInitDB_get,
  sys_generator_list_get,
  sys_config_info_id_get,
  sys_config_list_get,
  sys_config_save_post,
  sys_config_update_put,
  sys_engineController_get,
  sys_engineController_post,
  sys_engineController_put,
  sys_engineController_delete,
  sys_engineController_getOptionValue_get,
  sys_engineController_engineId_get,
  sys_engineParamController_get,
  sys_engineParamController_post,
  social_syssinauser_get,
  social_syssinauser_delete,
  social_syssinauser_unbind_delete,
  social_syssinauser_sinaUserId_get,
  social_syswechatuser_get,
  social_syswechatuser_delete,
  social_syswechatuser_unbind_delete,
  social_syswechatuser_wechatUserId_get,
  sys_config_delete_delete,
  social_sysqquser_get,
  social_sysqquser_delete,
  social_sysqquser_unbind_delete,
  social_sysqquser_qqUserId_get,
  social_getSysUserIdThruSinaUserId_get,
  social_getSysUserIdThruWechatUserId_get,
  social_saveConfig_post,
  social_saveConfig_put,
  excelfile_toExportExcel_get,
  excelfile_toExportExcelModel_get,
  login_cas1_get,
  login_cas2_get,
  login_info_get,
  login_info_head,
  login_info_post,
  login_info_put,
  login_info_delete,
  login_info_options,
  login_info_patch,
  social_config_get,
  social_getSysUserIdThruQqUserId_get,
  excel_excelconfig_post,
  excel_excelconfig_put,
  excel_excelconfig_delete,
  excel_excelconfig_info_get,
  excel_excelconfig_excelConfigId_get,
  excel_excelconfigByKey_get,
  excel_excelconfigByKeyOrTablename_get,
  excel_excelconfigexclude_get,
  excel_excelconfigexclude_post,
  excel_excelconfigexclude_put,
  excel_excelconfigexclude_delete,
  excel_excelconfigexclude_excelConfigExcludeId_get,
  excelfile_post,
  api_testObject_put,
  api_testObject_delete,
  api_testSession_get,
  api_weixin_bindUser_post,
  api_weixin_bindUser_put,
  api_weixin_binding_get,
  api_weixin_getMPLoginUrl_get,
  api_weixin_getWechatLoginUrl_get,
  api_weixin_mpBinding_get,
  app_appname_get,
  app_server_get,
  captcha_get,
  excel_excelconfig_get,
  api_qq_bindUser_post,
  api_qq_bindUser_put,
  api_qq_binding_get,
  api_qq_getQQLoginUrl_get,
  api_signkey_get,
  api_signkey_put,
  api_signkey_vaidate_get,
  api_sina_bindUser_post,
  api_sina_bindUser_put,
  api_sina_binding_get,
  api_sina_getSinaLoginUrl_get,
  api_testObject_post,
  api_ipspoof_get,
  api_jwtkey_get,
  api_logs_get,
  api_logsfile_get,
  api_mpToken_get,
  api_precision_get,
  alipay_frontRcvResponse_options,
  alipay_frontRcvResponse_patch,
  alipay_mobilePay_post,
  alipay_pcPay_post,
  alipay_qcPay_post,
  api_cache_get,
  api_cache2_get,
  api_clientip_get,
  api_copyright_argot_get,
  alipay_appPay_post,
  alipay_callBack_post,
  alipay_frontRcvResponse_get,
  alipay_frontRcvResponse_head,
  alipay_frontRcvResponse_post,
  alipay_frontRcvResponse_put,
  alipay_frontRcvResponse_delete,
  AudioController_audioConvertToText_post
};
