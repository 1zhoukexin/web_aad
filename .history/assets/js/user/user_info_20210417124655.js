$(function() {
    var layer = layui.layer;
    var form = layui.form
    form.verify({
        nickname: function(value) {
            if (value.length > 6) {
                return '昵称必须在1-6个字符串之间'
            }
        }
    })

    function initUserinfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败')
                }
            }

        })
    }
})