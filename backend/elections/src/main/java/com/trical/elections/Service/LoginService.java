package com.trical.elections.Service;

import com.trical.elections.Entities.LoginDTO;
import com.trical.elections.Entities.LoginResponse;
import com.trical.elections.Entities.Passwords;
import com.trical.elections.Repository.PasswordRepo;
import com.trical.elections.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class LoginService {
    private final PasswordRepo passwordRepo;
    private final JwtUtil jwtUtil;
    public String login(LoginDTO loginDTO){
        Passwords passwords=passwordRepo.findByEmail(loginDTO.getEmail()).orElseThrow(()->new RuntimeException("not found"));
        if(passwords.getPassword().equals(loginDTO.getPassword())){
            String email=loginDTO.getEmail();
            LoginResponse ans=new LoginResponse();
            ans.setToken(jwtUtil.generateToken(loginDTO.getEmail()));
            ans.setEmail(loginDTO.getEmail());
            return ans.getToken();
        }
        return "INCORRECT PASSWORD";
    }
}
