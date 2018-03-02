package com.ssm.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

/**
 * @author Administrator
 * @date 2018/2/28 10:24
 */

@Component
@Aspect
public class AuditBean {
    @Around("within(com.ssm.service..*)")
    public Object audit(ProceedingJoinPoint joinPoint) {
        Object obj = null;

        try {
            long timeStart = System.currentTimeMillis();
            //执行目标的方法
            obj = joinPoint.proceed();
            long timeEnd = System.currentTimeMillis();
            String str = joinPoint.getSignature().toString();
            System.out.println(str + "耗时：" + (timeEnd - timeStart));
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        return obj;
    }
}
