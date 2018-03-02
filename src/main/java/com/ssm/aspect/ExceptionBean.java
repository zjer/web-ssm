package com.ssm.aspect;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author Administrator
 * @date 2018/2/28 10:45
 */

@Component//纳入到spring容器里
@Aspect//将该类作为切面组件
public class ExceptionBean {
    @AfterThrowing(throwing = "e", pointcut = "within(com.ssm.service..*)")
    public void execute(Exception e) {
        //将异常信息输入文件
        try {
            FileWriter fileWriter = new FileWriter("C:\\Users\\Administrator\\IdeaProjects\\log\\error.log", true);
            //向文件中写数据
            PrintWriter printWriter = new PrintWriter(fileWriter);
            //文件头：时间信息、异常类型等
            Date date = new Date();
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String timeStr = simpleDateFormat.format(date);
            //构建文件头
            printWriter.println("******************");
            printWriter.print("异常类型：" + e);
            printWriter.println("异常时间：" + timeStr);
            printWriter.println("*******异常详细信息********");
            e.printStackTrace(printWriter);
            printWriter.close();
            fileWriter.close();
        } catch (IOException e1) {
            e1.printStackTrace();
            System.out.println("记录异常失败...");
        }
    }
}
