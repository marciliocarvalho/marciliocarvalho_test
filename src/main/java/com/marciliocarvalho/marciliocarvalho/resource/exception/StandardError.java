package com.marciliocarvalho.marciliocarvalho.resource.exception;

import java.io.Serializable;

public class StandardError implements Serializable {
    private static final long serialVersionUID = 1L;

    private String message;
    private int errorCode;

    public StandardError() {
    }

    public StandardError(String message, int errorCode) {
        this.message = message;
        this.errorCode = errorCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }
}
