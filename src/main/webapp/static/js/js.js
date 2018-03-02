//判断是否登陆
function checkSign() {
    //获取cookieId
    var cookies = getCookie("cookieId");
    if (!cookies) {
        showTips("您还未登录，请前往登陆！", path+"login.html");
    }
}
