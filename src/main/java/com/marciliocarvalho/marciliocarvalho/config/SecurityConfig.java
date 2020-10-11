package com.marciliocarvalho.marciliocarvalho.config;

import com.marciliocarvalho.marciliocarvalho.security.JWTAuthenticationFilter;
import com.marciliocarvalho.marciliocarvalho.security.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JWTUtil jwtUtil;

    private static final String[] PUBLIC_MATCHERS = {
            "/api/signin",
            "/api/users",
            "/api/users/**",
            "/h2-console/**",
    };

    private static final String[] PRIVATE_MATCHERS = {
            "api/cars",
            "api/cars/**",
            "/api/me"
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/**").permitAll()
                .antMatchers(PRIVATE_MATCHERS).authenticated()
                .antMatchers(PUBLIC_MATCHERS).permitAll()
                .and().headers().frameOptions().sameOrigin();

        http.addFilterBefore(new JWTAuthenticationFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

}
