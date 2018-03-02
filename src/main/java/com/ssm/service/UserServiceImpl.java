package com.ssm.service;

import com.ssm.dao.UserDao;
import com.ssm.entity.User;
import com.ssm.util.ResultUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;

/**
 * @author Administrator
 * @date 2018/2/28 14:14
 */

@Service("userService")//扫描Sring容器
@Transactional
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao userDao;
    //注册
    public ResultUtil<Object> addUser(String uName, String uNick, String uPass) {
        //接收结果数据
        ResultUtil<Object> resultUtil = new ResultUtil<Object>();
        //检测用户名是否被占用
        User hasUser = userDao.findByName(uName);
        if (hasUser != null) {
            resultUtil.setStatus(1);
            resultUtil.setMsg("用户名已存在！");
            return resultUtil;
        }

        User user = new User();
        //设置用户名
        user.setName(uName);
        //设置用户昵称
        user.setNick(uNick);
        //设置用户密码
        user.setPass(uPass);
        //插入用户数据
        userDao.save(user);
        //构建返回结果
        resultUtil.setStatus(0);
        resultUtil.setMsg("注册成功!");
        resultUtil.setData(user);
        return resultUtil;
    }

    //登陆
    public ResultUtil<User> checkLogin(String uName, String uPass) {
        //接收结果数据
        ResultUtil<User> resultUtil = new ResultUtil<User>();
        //按参数name查询数据
        User user = userDao.findByName(uName);
        //检查用户名
        if (user == null) {
            //约定返回0表示登录成功  非0表示登录失败
            resultUtil.setStatus(1);
            resultUtil.setMsg("用户名不存在!");
            return resultUtil;
        }
        //检查密码
        if (!user.getPass().equals(uPass)) {
            resultUtil.setStatus(2);
            resultUtil.setMsg("密码错误!");
            return resultUtil;
        }
        //用户名和密码都正确
        resultUtil.setStatus(0);
        resultUtil.setMsg("登陆成功!");
        resultUtil.setData(user);
        return resultUtil;
    }
}
