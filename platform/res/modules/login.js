layui.define(['form'], function (exports) {
    var $ = layui.$;
    var setter = layui.setter;
    var admin = layui.admin;
    var form = layui.form;
    var router = layui.router();
    var search = router.search;

    form.render();

    // 提交
    form.on('submit(LAY-user-login-submit)', function (obj) {

        // 请求登入接口
        admin.req({
            // url: './res/json/user/login.js', // 实际使用请改成服务端真实接口
            url: layui.apiPath.login.url,
            type: layui.apiPath.login.type,
            data: obj.field,
            success: function (res) {
                console.log('Login Data:', res);

                if (res.code === -1) {
                    layer.msg(res.message);
                    return false;
                }


                // 请求成功后，写入 access_token
                layui.data(setter.tableName, {
                    key: setter.request.tokenName,
                    value: res.data.access_token
                });

                // 给基础组件同步预设 token 值
                admin.setComponentsToken();

                // 登入成功的提示与跳转
                layer.msg('即将模拟跳转', {
                    offset: '15px',
                    icon: 1,
                    time: 1000
                }, function () {
                    location.hash = search.redirect ? decodeURIComponent(search.redirect) : '/';
                });
            }
        });

    });


    exports('login', {});
});