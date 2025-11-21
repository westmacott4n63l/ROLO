package com.rolo.ROLO.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.model.LoginRequest;
import com.rolo.ROLO.model.Session;
import com.rolo.ROLO.service.AuthService;

@RestController
@RequestMapping("/api")
public class AuthEndpoints {
	
	@Autowired
	private AuthService authService;
	
    @PostMapping("/login")
    public ResponseEntity<Session> login(@RequestBody LoginRequest loginRequest) {
    	return authService.validateLogin(loginRequest);
    }
    
    @PostMapping("/logout/{token}")
    public ResponseEntity<Session> logout(@PathVariable Integer token) {
    	authService.invalidateSession(token);
    	return ResponseEntity.status(HttpStatus.OK).build();
    }
    
}
