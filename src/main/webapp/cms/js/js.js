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
    $(".profile-username").text(nicks);
}

//设置操作
function doSet() {
    //获取相关元素
    var $set = $(".header-set");
    var $dropToggle = $(".dropdown-toggle");
    var $dropMenu = $(".dropdown-menu");
    //下拉
    $dropToggle.click(function () {
        if ($set.hasClass("open")) {
            $set.removeClass("open");
            $dropMenu.slideUp(500);
        } else {
            $set.addClass("open");
            $dropMenu.slideDown(500);
        }
    });

    //退出登录
    var $logout = $("#logout");
    $logout.click(function () {
        delCookie("cookieId");
        location.href = path+"/login.html";
    });
}

