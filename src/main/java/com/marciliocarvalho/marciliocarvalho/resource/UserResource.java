package com.marciliocarvalho.marciliocarvalho.resource;

import com.marciliocarvalho.marciliocarvalho.domain.User;
import com.marciliocarvalho.marciliocarvalho.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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
    public ResponseEntity<Void> insert(@RequestBody User obj) {
        obj = userService.insert(obj);
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
    public ResponseEntity<Map<Object, Object>> login(@RequestBody User obj) {
        Map<Object, Object> retorno = userService.autenticate(obj.getLogin(), obj.getPassword());
        return ResponseEntity.ok().body(retorno);
    }
}
