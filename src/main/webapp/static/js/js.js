//判断是否登陆
function checkSign() {
    //获取cookieId
    var cookies = getCookie("cookieId");
    console.log(cookies);
    if (!cookies || cookies == "static") {
        $("body").html("");
        showTips("您还未登录，请前往登陆！", path+"/login.html");
    }
    //获取昵称
    var nicks = getCookie("cookieNick");
    $("#nick").text(nicks);
}
