package com.marciliocarvalho.marciliocarvalho.resource.exception;

import com.marciliocarvalho.marciliocarvalho.service.exception.UniqueFieldException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(UniqueFieldException.class)
    public ResponseEntity<StandardError> objectNotFound(UniqueFieldException e, HttpServletRequest request) {
        StandardError err = new StandardError(e.getMessage(), HttpStatus.CONFLICT.value());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(err);
    }
}
