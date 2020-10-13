package com.marciliocarvalho.marciliocarvalho.service;

import com.marciliocarvalho.marciliocarvalho.domain.User;
import com.marciliocarvalho.marciliocarvalho.dto.UserNewDTO;
import com.marciliocarvalho.marciliocarvalho.repository.UserRepository;
import com.marciliocarvalho.marciliocarvalho.security.JWTUtil;
import com.marciliocarvalho.marciliocarvalho.service.exception.BlankFieldsException;
import com.marciliocarvalho.marciliocarvalho.service.exception.DependencyException;
import com.marciliocarvalho.marciliocarvalho.service.exception.LoginException;
import com.marciliocarvalho.marciliocarvalho.service.exception.UniqueFieldException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    JWTUtil jwtUtil;
    @Autowired
    HttpServletRequest req;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Integer id) {
        Optional<User> obj = userRepository.findById(id);
        return obj.get();
    }

    public User insert(UserNewDTO objNewDto) {
        if (userRepository.findByEmail(objNewDto.getEmail()) != null) {
            throw new UniqueFieldException("Email already exists");
        } else if (userRepository.findByLogin(objNewDto.getLogin()) != null) {
            throw new UniqueFieldException("Login already exists");
        }

        return userRepository.save(fromDto(objNewDto));
    }

    public void delete(Integer id) {
        User user = findById(id);
        if (user.getCars().size() > 0) {
            throw new DependencyException("This user has cars");
        }
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

    public Map<Object, Object> findMe() {

        Map<Object, Object> response = new HashMap<>();
        String token = jwtUtil.resolveToken(req);
        response.put("id", Integer.parseInt(jwtUtil.getClaim(token, "id")));
        response.put("firstName", jwtUtil.getClaim(token, "firstName"));
        response.put("lastName", jwtUtil.getClaim(token, "lastName"));
        response.put("email", jwtUtil.getClaim(token, "email"));

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
        String miliseconds = jwtUtil.getClaim(token, "birthday");
        Date birthday = new Date(Long.parseLong(miliseconds));

        response.put("birthday", birthday);
        response.put("login", jwtUtil.getClaim(token, "login"));
        response.put("phone", jwtUtil.getClaim(token, "phone"));

        return response;
    }

    public User fromDto(UserNewDTO objDto) {
        return new User(objDto);
    }

}
