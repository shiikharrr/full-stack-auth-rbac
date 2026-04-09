package com.shikhar.authsystem.service;

import org.springframework.stereotype.Service;

import com.shikhar.authsystem.dto.LoginRequest;
import com.shikhar.authsystem.dto.RegisterRequest;
import com.shikhar.authsystem.entity.Role;
import com.shikhar.authsystem.entity.User;
import com.shikhar.authsystem.repository.UserRepository;
import com.shikhar.authsystem.security.JwtService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public User register(RegisterRequest request){
        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(request.getPassword()) //(we'll encrypt later)
            .role(request.getRole() != null? request.getRole() : Role.USER)
            .build();

        return userRepository.save(user);
    }

    public String login(LoginRequest request){
        // 1. find user by email
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. check password (we'll encrypt later)
        if(!user.getPassword().equals(request.getPassword())){
            throw new RuntimeException("Invalid credentials");
        }

        // TODO: replace with JWT token generation once JwtService is available
        return jwtService.generateToken(user.getEmail(), user.getRole().name());
    }
}
