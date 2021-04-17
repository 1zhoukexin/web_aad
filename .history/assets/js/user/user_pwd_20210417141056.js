$(function() {
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        samePwd: function(value) {
            if (value === $('#oldPwd').val()) {
                return '新旧密码不能相同'
            }
        },
        dd: function(value) {
            if (value !== $('#newPwd').val()) {
                return '两次尼玛不一致'
            }
        }
    })
})