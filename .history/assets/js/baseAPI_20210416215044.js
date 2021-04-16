$.ajaxPrefilter(function(options) {
    options.url = 'http://ajax.frontend.itheima.net' + options.url
        //统一为有权限的接口 设置头
    options.headers = Authorization: localStorage.getItem('token') || ''
})