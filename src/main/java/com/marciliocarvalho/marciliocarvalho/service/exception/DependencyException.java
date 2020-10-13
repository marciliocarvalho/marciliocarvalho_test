package com.marciliocarvalho.marciliocarvalho.service.exception;

public class DependencyException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public DependencyException(String msg) {
        super(msg);
    }

    public DependencyException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
