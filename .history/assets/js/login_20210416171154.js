$(function() {
    //   点击去注册账号的链接
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //点击去登录的链接
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //   从layui 中获取form对象
    var form = layui.form;
    var layer = layui.layer;
    // 通过form.verify函数自定义效验规则
    form.verify({
            pwd: [
                /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
            ],
            repwd: function(value) {
                var pwd = $('.reg-box [name = password]').val()
                if (pwd !== value) {
                    return '两次密码不一致'
                }
            }
        })
        //    注册表单事件
    $('#form_reg').on('submit', function(e) {
        e.preventDefault()
        var data = {
            username: $('#form_reg #username1').val(),
            password: $('#form_reg #password1').val(),
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', data


            ,
            function(res) {
                if (res.status !== 0) {
                    layer.msg(res.message);
                }
                layer.msg('注册成功了');
                //模拟点击行为
                $('#link_login').click()
            })
    })

})