package com.marciliocarvalho.marciliocarvalho.resource.exception;

import com.marciliocarvalho.marciliocarvalho.service.exception.BlankFieldsException;
import com.marciliocarvalho.marciliocarvalho.service.exception.DependencyException;
import com.marciliocarvalho.marciliocarvalho.service.exception.LoginException;
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
    public ResponseEntity<StandardError> uniqueFieldException(UniqueFieldException e, HttpServletRequest request) {
        StandardError err = new StandardError(e.getMessage(), HttpStatus.CONFLICT.value());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(err);
    }

    @ExceptionHandler(LoginException.class)
    public ResponseEntity<StandardError> loginException(LoginException e, HttpServletRequest request) {
        StandardError err = new StandardError(e.getMessage(), HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
    }

    @ExceptionHandler(BlankFieldsException.class)
    public ResponseEntity<StandardError> blankFields(BlankFieldsException e, HttpServletRequest request) {
        StandardError err = new StandardError(e.getMessage(), HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<StandardError> validation(MethodArgumentNotValidException e, HttpServletRequest request) {

        ValidationError err = new ValidationError(HttpStatus.BAD_REQUEST.value(), "Erro de validação");
        for (FieldError x : e.getBindingResult().getFieldErrors()) {
            err.addError(x.getField(), x.getDefaultMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
    }

    @ExceptionHandler(DependencyException.class)
    public ResponseEntity<StandardError> dependency(DependencyException e, HttpServletRequest request) {
        StandardError err = new StandardError(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(err);
    }


}
