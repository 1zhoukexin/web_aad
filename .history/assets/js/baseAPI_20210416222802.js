$.ajaxPrefilter(function(options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
        //统一为有权限的接口 设置头

    if (options.url.indeOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    complete: function(res) {
        // res.responseJSON
        if (res.responseJSON.status === 1 &&
            res.responseJSON.message === "身份认证失败！") {
            //强制清空token
            localStorage.removeItem('token')
                //强制跳转登录页面
            location.href = '/login.html'
        }
    }
})