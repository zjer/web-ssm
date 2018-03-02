package com.ssm.service;

import com.ssm.entity.User;
import com.ssm.util.ResultUtil;

/**
 * @author Administrator
 * @date 2018/2/28 9:56
 */
public interface UserService {
    //注册模块
    public ResultUtil<Object> addUser(String uName, String uPass);

    //登录模块
    public ResultUtil<User> checkLogin(String uName, String uPass);
}
