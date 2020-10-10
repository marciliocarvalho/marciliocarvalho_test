package com.marciliocarvalho.marciliocarvalho.service;

import com.marciliocarvalho.marciliocarvalho.domain.User;
import com.marciliocarvalho.marciliocarvalho.repository.UserRepository;
import com.marciliocarvalho.marciliocarvalho.security.JWTUtil;
import com.marciliocarvalho.marciliocarvalho.service.exception.LoginException;
import com.marciliocarvalho.marciliocarvalho.service.exception.UniqueFieldException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    JWTUtil jwtUtil;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Integer id) {
        Optional<User> obj = userRepository.findById(id);
        return obj.get();
    }

    public User insert(User obj) {
        if (userRepository.findByEmail(obj.getEmail()) != null) {
            throw new UniqueFieldException("Email already exists");
        } else if (userRepository.findByLogin(obj.getLogin()) != null) {
            throw new UniqueFieldException("Login already exists");
        }
        return userRepository.save(obj);
    }

    public void delete(Integer id) {
        findById(id);
        userRepository.deleteById(id);
    }

    public User update(User newObj) {
        User userByEmail = userRepository.findByEmail(newObj.getEmail());
        if (userByEmail != null && !newObj.getId().equals(userByEmail.getId())) {
            throw new UniqueFieldException("Email already exists");
        }
        User userByLogin = userRepository.findByLogin(newObj.getLogin());
        if (userByLogin != null && !newObj.getId().equals(userByLogin.getId())) {
            throw new UniqueFieldException("Login already exists");
        }

        return userRepository.save(newObj);
    }

    public Map<Object, Object> autenticate(String login, String password) {
        User user = userRepository.findByLogin(login);
        if (user == null || !user.getPassword().equals(password)) {
            throw new LoginException("Invalid login or password");
        }

        String token = jwtUtil.generateToken(login, user);

        Map<Object, Object> response = new HashMap<>();

        response.put("token", token);

        return response;
    }
}