package com.trical.elections.util;

import com.trical.elections.Entities.Tokens;
import com.trical.elections.Repository.TokenRepo;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Optional;

@Component
@AllArgsConstructor
public class JwtUtil {
    private final TokenRepo tokenRepo;
    private final SecretKey key= Keys.hmacShaKeyFor("aj23nsrf45k35yenwert8453jnerg945jret4rs".getBytes());
    private final long EXPIRATION_TIME=1000*60;
    public String generateToken(String username){
        String GeneratedToken=Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
        Tokens UserToken=new Tokens();
        Optional<Tokens> tokenOpt=tokenRepo.findByEmail(username);
        tokenOpt.ifPresent(tokenRepo::delete);
        UserToken.setEmail(username);
        UserToken.setToken(GeneratedToken);
        tokenRepo.save(UserToken);
        return GeneratedToken;
    }
}
