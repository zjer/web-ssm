package com.ssm.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

/**
 * @author Administrator
 * @date 2018/2/28 10:57
 * 切面 实际上就是一段代码
 */

@Component
@Aspect
public class LoggerBean {
    @Before("within(com.ssm.controller..*)")
    public void logController() {
        System.out.println("AOP切面注入Controller!");
    }

    @Before("within(com.ssm.service..*)")
    public void logService() {
        System.out.println("AOP切面注入Service!");
    }
}
