package com.trical.elections.Entities;

import lombok.Data;

@Data
public class LoginResponse {
    private String token;
    private String email;
}
