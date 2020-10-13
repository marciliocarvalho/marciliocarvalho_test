package com.marciliocarvalho.marciliocarvalho.service.exception;

public class BlankFieldsException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public BlankFieldsException(String msg) {
        super(msg);
    }

    public BlankFieldsException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
