package com.ssm.controller;

import com.ssm.entity.User;
import com.ssm.service.UserService;
import com.ssm.util.ResultUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * @author Administrator
 * @date 2018/2/28 10:05
 */

@Controller
@RequestMapping("/user")
public class UserLoginController {
    @Resource
    private UserService userService;

    @RequestMapping("/login.do")//匹配请求
    @ResponseBody//使用json结果输出
    public ResultUtil<User> execute(String uName, String uPass) {
        System.out.println(uName + " ," + uPass);
        //调用UserService处理登录请求
        ResultUtil<User> resultUtil = userService.checkLogin(uName, uPass);
        return resultUtil;
    }
}
