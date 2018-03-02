//定义地址
var path = "http://localhost:81";

//注册
function userRegist() {
    //获取相关参数
    var $doRegist = $("#doRegist");
    var $doReset = $("#doReset");
    //获取用户名，昵称，密码，确认密码
    var $userName = $("#userName");
    var $userNick = $("#userNick");
    var $userPass = $("#userPass");
    var $rUserPass = $("#rUserPass");
    //对用户名，昵称，密码，确认密码获取焦点进行验证
    $(".form-items input").focus(function () {
        $(this).parent().addClass("onfocus");
    });
    //设置默认不可点
    $userNick.attr("disabled", true);
    $userPass.attr("disabled", true);
    $rUserPass.attr("disabled", true);
    $doRegist.attr("disabled", true);
    $doReset.attr("disabled", true);
    //对用户名，昵称，密码，确认密码失去焦点进行验证
    $userName.blur(function () {
        //添加标识符
        var $status = $(this).next();
        //失去焦点更换样式
        $(this).parent().removeClass("onfocus");
        $status.removeClass("icon-warning");
        //获取错误提示
        var $msg = $(this).parent().next();
        $msg.text("").hide(500);
        //获取用户名
        var $name = $userName.val().trim();
        if ($name == "") {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("用户名不能为空").show(500);
        } else if ($name.length < 5 || $name.length > 10) {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("用户名长度在5-10个字符").show(500);
        } else {
            $status.addClass("icon-success");
            $(this).parent().addClass("isok");
            $userNick.attr("disabled", false);
        }
    });
    $userNick.blur(function () {
        //添加标识符
        var $status = $(this).next();
        //失去焦点更换样式
        $(this).parent().removeClass("onfocus");
        $status.removeClass("icon-warning");
        //获取错误提示
        var $msg = $(this).parent().next();
        $msg.text("").hide(500);
        //获取昵称
        var $nick = $userNick.val().trim();
        if ($nick == "") {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("昵称不能为空").show(500);
        } else if ($nick.length > 5) {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("昵称长度不超过5个字符").show(500);
        } else {
            $status.addClass("icon-success");
            $(this).parent().addClass("isok");
            $userPass.attr("disabled", false);
        }
    });
    $userPass.blur(function () {
        //添加标识符
        var $status = $(this).next();
        //失去焦点更换样式
        $(this).parent().removeClass("onfocus");
        $status.removeClass("icon-warning");
        //获取错误提示
        var $msg = $(this).parent().next();
        $msg.text("").hide(500);
        //获取密码
        var $pass = $userPass.val().trim();
        //密码验证
        var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,15}$/;
        if ($pass == "") {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("密码不能为空").show(500);
        } else if (regExp.test($pass) === false) {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("密码为5-15个字母和数字组成，不能是纯数字或纯字母").show(500);
        } else {
            $status.addClass("icon-success");
            $(this).parent().addClass("isok");
            $rUserPass.attr("disabled", false);
        }
    });
    $rUserPass.blur(function () {
        //添加标识符
        var $status = $(this).next();
        //失去焦点更换样式
        $(this).parent().removeClass("onfocus");
        $status.removeClass("icon-warning");
        //获取错误提示
        var $msg = $(this).parent().next();
        $msg.text("").hide(500);
        //获取密码
        var $rPass = $rUserPass.val().trim();
        if ($rPass == "") {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("密码不能为空").show(500);
        } else if ($rPass !== $userPass.val().trim()) {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("两次输入密码不一致！").show(500);
        } else {
            $status.addClass("icon-success");
            $(this).parent().addClass("isok");
            $doRegist.attr("disabled", false);
            $doReset.attr("disabled", false);
        }
    });
    //注册开始
    $doRegist.click(function () {
        //获取数据
        var $name = $userName.val().trim();
        var $nick = $userNick.val().trim();
        var $pass = $userPass.val().trim();
        //Ajax验证
        $.ajax({
            url: path+"/user/add.do",
            type: "post",
            data: {"uName": $name, "uNick": $nick, "uPass": $pass},
            dataType: "json",
            success: function (resultUtil) {
                //注册验证
                if (resultUtil.status == 1) {
                    $userName.next().removeClass("icon-success").addClass("icon-warning");
                    $userName.parent().removeClass("isok").addClass("haserr");
                    $userName.parent().next().text(resultUtil.msg).show(500);
                } else if (resultUtil.status == 0) {
                    $userName.next().removeClass("icon-warning").addClass("icon-success");
                    $userName.parent().removeClass("haserr").addClass("isok");
                    $userName.parent().next().text("");
                    showTips(resultUtil.msg, "login.html");
                }
            }
        })
    });
}

//登陆
function userLogin() {
    //获取相关参数
    var $doLogin = $("#doLogin");
    var $doReset = $("#doReset");
    //获取用户名，密码
    var $userName = $("#userName");
    var $userPass = $("#userPass");
    //对用户名，密码获取焦点进行验证
    $(".form-items input").focus(function () {
        $(this).parent().addClass("onfocus");
    });
    //设置默认不可点
    $userPass.attr("disabled", true);
    $doLogin.attr("disabled", true);
    $doReset.attr("disabled", true);
    //对用户名，密码失去焦点进行验证
    $userName.blur(function () {
        //添加标识符
        var $status = $(this).next();
        //失去焦点更换样式
        $(this).parent().removeClass("onfocus");
        $status.removeClass("icon-warning");
        //获取错误提示
        var $msg = $(this).parent().next();
        $msg.text("").hide(500);
        //获取用户名
        var $name = $userName.val().trim();
        if ($name == "") {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("用户名不能为空").show(500);
        } else if ($name.length < 5 || $name.length > 10) {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("用户名长度在5-10个字符").show(500);
        } else {
            $status.addClass("icon-success");
            $(this).parent().addClass("isok");
            $userPass.attr("disabled", false);
        }
    });
    $userPass.blur(function () {
        //添加标识符
        var $status = $(this).next();
        //失去焦点更换样式
        $(this).parent().removeClass("onfocus");
        $status.removeClass("icon-warning");
        //获取错误提示
        var $msg = $(this).parent().next();
        $msg.text("").hide(500);
        //获取密码
        var $pass = $userPass.val().trim();
        if ($pass == "") {
            $status.addClass("icon-warning");
            $(this).parent().addClass("haserr");
            $msg.text("密码不能为空").show(500);
        } else {
            $status.addClass("icon-success");
            $(this).parent().addClass("isok");
            $doLogin.attr("disabled", false);
            $doReset.attr("disabled", false);
        }
    });
    //登陆开始
    $doLogin.click(function () {
        //获取数据
        var $name = $userName.val().trim();
        var $pass = $userPass.val().trim();
        //Ajax验证
        $.ajax({
            url: path+"/user/login.do",
            type: "post",
            data: {"uName": $name, "uPass": $pass},
            dataType: "json",
            success: function (resultUtil) {
                //注册验证
                if (resultUtil.status == 1) {
                    $userName.next().removeClass("icon-success").addClass("icon-warning");
                    $userName.parent().removeClass("isok").addClass("haserr");
                    $userName.parent().next().text(resultUtil.msg).show(500);
                } else if (resultUtil.status == 2) {
                    $userPass.next().removeClass("icon-success").addClass("icon-warning");
                    $userPass.parent().removeClass("isok").addClass("haserr");
                    $userPass.parent().next().text(resultUtil.msg).show(500);
                } else if (resultUtil.status == 0) {
                    $userName.next().removeClass("icon-warning").addClass("icon-success");
                    $userName.parent().removeClass("haserr").addClass("isok");
                    $userName.parent().next().text("");
                    if ($name == "admin") {
                        //将用户信息保存到Cookie里
                        var cookieId = "static";
                        addCookie("cookieId", cookieId, 10);
                        showTips(resultUtil.msg, "cms/index.html");
                    } else {
                        //将用户信息保存到Cookie里
                        var cookieId = "cms";
                        addCookie("cookieId", cookieId, 10);
                        showTips(resultUtil.msg, "static/index.html");
                    }
                    //将用户昵称保存到Cookie里
                    addCookie("cookieNick", resultUtil.data.nick, 10);
                }
            }
        })
    });
}

//弹窗提示
function showTips(tips, newHref) {
    var $body = $("body");
    var $tips = "";
    $tips += "<div class='tips'>"+tips+"</div>";
    $body.append($tips);
    $(".tips").slideDown(500);
    setTimeout(function () {
        $(".tips").hide();
        location.href = newHref;
    }, 3000);
}