package com.marciliocarvalho.marciliocarvalho.security;

import com.marciliocarvalho.marciliocarvalho.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JWTUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generateToken(String login, User user) {
        return Jwts.builder().setSubject(login).claim("user", user)
                .signWith(SignatureAlgorithm.HS512, secret.getBytes())
                .compact();
    }

}
