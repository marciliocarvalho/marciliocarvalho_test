package com.marciliocarvalho.marciliocarvalho.resource;

import com.marciliocarvalho.marciliocarvalho.domain.User;
import com.marciliocarvalho.marciliocarvalho.dto.UserNewDTO;
import com.marciliocarvalho.marciliocarvalho.resource.exception.StandardError;
import com.marciliocarvalho.marciliocarvalho.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(value = "/api/")
public class UserResource {
    @Autowired
    private UserService userService;

    @GetMapping(value = "users")
    public ResponseEntity<List<User>> findAll() {
        List<User> list = userService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "users/{id}")
    public ResponseEntity<User> findById(@PathVariable Integer id) {
        User obj = userService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping(value = "users")
    public ResponseEntity<Object> insert(@Valid @RequestBody UserNewDTO objDto) {

        User obj = userService.fromDto(objDto);
        obj = userService.insert(objDto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(value = "users/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "users/{id}")
    public ResponseEntity<Void> update(@RequestBody User obj, @PathVariable Integer id) {
        obj.setId(id);
        obj = userService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("signin")
    public ResponseEntity<Object> login(@RequestBody Map<String, String> credentials) {

        Map<Object, Object> response = userService.autenticate(credentials.get("login"), credentials.get("password"));
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("me")
    public ResponseEntity<Map<Object, Object>> findMe() {
        Map<Object, Object> response = userService.findMe();
        return ResponseEntity.ok().body(response);
    }
}
