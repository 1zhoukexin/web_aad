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

    initUserinfo()

    function initUserinfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败')
                }
                console.log(res);

                form.val('formUserInfo', res.data)
            }
        })
    }
    $('#btnchongzhi').on('click', function(e) {
        e.preventDefault()
        initUserinfo()
    })

    $('.layui-form').on('submit', function(e) {
        e.preventDefaule()
        $.ajax({
            method: 'post',
            url: '/my/userinfo',
            data: $(this).serialize()
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('更新信息失败')
                }
                layer.msg('更新信息成功')
                window.parent.getUserInfo()
            }
        })
    })

})