package com.marciliocarvalho.marciliocarvalho.service;

import com.marciliocarvalho.marciliocarvalho.domain.User;
import com.marciliocarvalho.marciliocarvalho.repository.UserRepository;
import com.marciliocarvalho.marciliocarvalho.service.exception.UniqueFieldException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

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
}
