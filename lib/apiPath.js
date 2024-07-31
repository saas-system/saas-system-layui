/**
 * 接口路径
 */
layui.define(function (exports) {
    "use strict";

    let apiPath = {

        /*---------- 基础配置 start ----------*/

        //项目地址
        baseUrl: 'http://localhost:8000/', //dist

        //OSS路径
        ossUrl: 'https://cross-new.oss-accelerate.aliyuncs.com/',
        //OSS配置
        ossParams: {type: 'GET', url: 'common/aliyun_oss_params'},
        //OSS回调
        ossNotify: {type: 'POST', url: 'common/upload_notify'},
        //菜单权限列表
        menu: {type: 'GET', url: 'common/auth_menu_list'},

        /*---------- 基础配置  end  ----------*/


        /*---------- 菜单配置 start ----------*/

        //菜单管理列表（菜单/节点）
        menuManage: {type: 'GET', url: 'system/menu'},
        //菜单开关
        menuSwitch: {type: 'PUT', url: 'system/menu/status'},
        //删除菜单（菜单/节点）
        menuDel: {type: 'DELETE', url: 'system/menu'},
        //添加菜单（菜单/节点）
        menuAdd: {type: 'POST', url: 'system/menu'},
        //更新菜单（菜单/节点）
        menuSave: {type: 'PUT', url: 'system/menu'},
        //上级菜单
        menuSuperior: {type: 'GET', url: 'system/superior_menu_list'},
        // 岗位上级
        accMenuSuperior: {type: 'GET', url: 'account/superior_position_list'},
        //同步权限节点
        menuSync: {type: 'POST', url: 'system/refresh_action_node'},

        /*---------- 菜单配置  end  ----------*/


    };

    layui.$.each(apiPath, function (index, item) {
        if (item.url && item.url !== '') {
            apiPath[index].url = apiPath.baseUrl + item.url;
        }
    });

    layui.$.extend(apiPath);

    exports('apiPath', apiPath);
});
