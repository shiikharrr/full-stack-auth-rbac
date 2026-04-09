package com.shikhar.authsystem.dto;

import lombok.Data;
import com.shikhar.authsystem.entity.Role;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private Role role;
}
