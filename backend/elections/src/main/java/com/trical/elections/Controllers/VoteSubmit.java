package com.trical.elections.Controllers;

import com.trical.elections.Entities.*;
import com.trical.elections.Repository.PasswordRepo;
import com.trical.elections.Repository.TokenRepo;
import com.trical.elections.Service.AddPasswords;
import com.trical.elections.Service.LoginService;
import com.trical.elections.Service.secondYearService;
import com.trical.elections.Service.thirdYearService;
import com.trical.elections.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/vote")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class VoteSubmit {
    private final secondYearService secondService;
    private final thirdYearService thirdService;
    private final AddPasswords addPasswords;
    private final PasswordRepo passwordRepo;
    private final JwtUtil jwtUtil;
    private final TokenRepo tokenRepo;

    @GetMapping("/test")
    public void test(){
        addPasswords.savePassword();
    }
    @GetMapping("/delete")
    public void delete(){
        passwordRepo.deleteAll();
    }
    @GetMapping("/check")
    public boolean check(@RequestParam String email){
        email=email.replaceAll("^\\s+","");
        Optional<Passwords> passwords=passwordRepo.findByEmail(email);
        Passwords ourPass=new Passwords();
        if(passwords.isPresent()){
            ourPass=passwords.get();
            return ourPass.isJuniorVoted();
        }
        throw new RuntimeException("not found");
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO){
        Optional<Passwords> passwords=passwordRepo.findByEmail(loginDTO.getEmail().replaceAll("^\\s+",""));
        Passwords ourPass=new Passwords();
        if(passwords.isPresent())ourPass=passwords.get();
        if(ourPass.isSeniorVoted())return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("ALREADY VOTED");
        if(ourPass.getPassword().equals(loginDTO.getPassword())) return ResponseEntity.ok(jwtUtil.generateToken(loginDTO.getEmail().replaceAll("^\\s+","")));
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("INCORRECT PASSWORD");
    }
    @PostMapping("/seniors")
    public ResponseEntity<String> submitVotes(@RequestBody thirdYearDTO dto,@RequestParam String token){
        Optional<Tokens> tokens=tokenRepo.findByEmail(dto.getEmail().replaceAll("^\\s+",""));
        if(!tokens.get().getToken().equals(token))return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("TRYING TO HACK UHHH");
        Optional<Passwords> passwords=passwordRepo.findByEmail(dto.getEmail().replaceAll("^\\s+",""));
        Passwords ourPass=new Passwords();
        if(passwords.isPresent())ourPass=passwords.get();
        if(ourPass.isSeniorVoted())return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("ALREADY VOTED");
        thirdService.submitSeniorsVote(dto);
        ourPass.setSeniorVoted(true);
        passwordRepo.save(ourPass);
        tokenRepo.delete(tokens.get());
        return ResponseEntity.ok("VOTING DONE");
    }
    @PostMapping("/juniors")
    public ResponseEntity<String> SubmitVotes(@RequestBody secondYearDTO dto,@RequestParam String token){
        Optional<Tokens> tokens=tokenRepo.findByEmail(dto.getEmail().replaceAll("^\\s+",""));
        if(!tokens.get().getToken().equals(token))return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("TRYING TO HACK UHHH");
        Optional<Passwords> passwords=passwordRepo.findByEmail(dto.getEmail().replaceAll("^\\s+",""));
        Passwords ourPass=new Passwords();
        if(passwords.isPresent())ourPass=passwords.get();
        if(ourPass.isSeniorVoted())return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("ALREADY VOTED");
        secondService.confirmVote(dto);
        ourPass.setJuniorVoted(true);
        passwordRepo.save(ourPass);
        return ResponseEntity.ok("VOTING DONE");
    }
}
