package com.marciliocarvalho.marciliocarvalho.service.exception;

public class LoginException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public LoginException(String msg) {
        super(msg);
    }

    public LoginException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
