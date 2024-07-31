layui.define(['form'], function (exports) {
    let $ = layui.$,
        setter = layui.setter,
        admin = layui.admin,
        form = layui.form,
        router = layui.router(),
        search = router.search;

    WindowResize($(window).width());

    //浏览器窗口大小改变事件
    $(window).on('resize', function () {
        WindowResize($(window).width());
    });

    //浏览器窗口大小改变方法
    function WindowResize(width) {
        $('#loginBox').css({
            left: `calc(-100% * (1920 / ${width} - 1)/2)`,
            width: `calc(100% * (1920 / ${width}))`,
            transform: `scale(calc(${width} / 1920))`,
        });

        $('.form_remarks').css({
            fontSize: '16px'
        });
    }

    // 表单赋值
    form.val('demo-val-filter', {
        "username": "admin",
        "password": "123456",
    });

    //自定义验证规则
    form.verify({
        v_username: [
            /^[0-9a-zA-Z\u4e00-\u9fa5_]{1,16}$/, '用户名不能为空，且不能出现空格'
        ],
        v_password: [
            /^[\S]{6,20}$/, '密码必须6到20位，且不能出现空格'
        ]
    });


    form.render();

    $('#LAY-user-login-password').on('keyup', function (event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && parseInt(e.keyCode) === 13) {
            $('[lay-filter="LAY-user-login-submit"]').trigger('click');
        }
    });

    //提交
    form.on('submit(LAY-user-login-submit)', function (obj) {

        //请求登入接口
        admin.reqs(layui.apiPath.login, {
            data: obj.field,
            success(res) {
                if (res.code === -1) {
                    layer.msg(res.message);
                    return false;
                }

                //请求成功后，写入 Authorization
                layui.data(setter.tableName, {
                    key: setter.request.tokenName,
                    value: "bearer " + res.data.token
                });

                layui.data(setter.tableName, {
                    key: 'username',
                    value: res.data.username
                });

                layui.data(setter.tableName, {
                    key: 'is_super_admin',
                    value: res.data.is_super_admin
                });

                layui.data(setter.tableName, {
                    key: 'is_self',
                    value: res.data.is_self
                });

                layui.data(setter.tableName, {
                    key: 'department_id',
                    value: res.data.department_id
                });

                layui.data(setter.tableName, {
                    key: 'group_id',
                    value: res.data.group_id
                });
                layui.data(setter.tableName, {
                    key: 'user_id',
                    value: res.data.user_id
                });

                //登入成功的提示与跳转
                layer.msg('登入成功', {
                    offset: '15px',
                    icon: 1,
                    time: 1000
                }, function () {
                    location.hash = search.redirect ? decodeURIComponent(search.redirect) : '/' + res.data.jump_url;
                });

            }
        });

    });

    exports('login', {});
});