package com.ssm.dao;

import com.ssm.entity.User;

/**
 * @author Administrator
 * @date 2018/2/28 9:48
 */
public interface UserDao {
    //注册
    public void save(User user);

    //登陆
    public User findByName(String uName);
}
