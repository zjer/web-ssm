package com.ssm.controller;

import com.ssm.service.UserService;
import com.ssm.util.ResultUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * @author Administrator
 * @date 2018/2/28 10:12
 */

@Controller
@RequestMapping("/user")
public class UserRegistController {
    @Resource
    private UserService userService;

    @RequestMapping("/add.do")//匹配请求
    @ResponseBody//使用json结果输出
    public ResultUtil<Object> execute(String uName, String uNick, String uPass) {
        System.out.println(uName + " ," + uNick + " ," + uPass);
        //调用UserService处理登录请求
        ResultUtil<Object> resultUtil = userService.addUser(uName, uNick, uPass);
        return resultUtil;
    }
}
