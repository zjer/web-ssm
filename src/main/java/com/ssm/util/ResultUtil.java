package com.ssm.util;

/**
 * @author Administrator
 * @date 2018/2/28 9:58
 * 将服务器返回的数据进行封装。
 */
public class ResultUtil<T> {
    private Integer status;
    private String msg;
    private  T data;

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
