package com.trical.elections.Service;

import com.trical.elections.Entities.Passwords;
import com.trical.elections.Repository.PasswordRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
@AllArgsConstructor
public class AddPasswords {

    private final PasswordRepo passwordRepo;


    public static int generateOTP(){
        SecureRandom random = new SecureRandom();
        return random.nextInt(900000) + 100000;
    }
    public void savePassword(){
        for(int i=1;i<120;i++){
            String num="";
            if(i<10)num="00"+i;
            else if(i<100)num="0"+i;
            else num=i+"";
            String junior="bt23eee"+num+"@students.vnit.ac.in";
            int juniorOtp=generateOTP();
            Passwords passwords=new Passwords();
            passwords.setPassword(String.valueOf(juniorOtp));
            passwords.setEmail(junior);
            passwords.setJuniorVoted(true);
            passwords.setSeniorVoted(false);
            passwordRepo.save(passwords);
        }
        for(int i=1;i<120;i++){
            String num="";
            if(i<10)num="00"+i;
            else if(i<100)num="0"+i;
            else num=i+"";
            String senior="bt24eee"+num+"@students.vnit.ac.in";
            int seniorOtp=generateOTP();
            Passwords passwords=new Passwords();
            passwords.setPassword(String.valueOf(seniorOtp));
            passwords.setEmail(senior);
            passwords.setJuniorVoted(false);
            passwords.setSeniorVoted(false);
            passwordRepo.save(passwords);
        }
    }
}
