package com.trical.elections.Service;

import com.trical.elections.Entities.Passwords;
import com.trical.elections.Entities.secondYear;
import com.trical.elections.Entities.secondYearDTO;
import com.trical.elections.Repository.PasswordRepo;
import com.trical.elections.Repository.secondYearRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class secondYearService{
    private final secondYearRepo RepoSecondYear;
    private final PasswordRepo passwordRepo;
    public void confirmVote(secondYearDTO secondDTO){
        Optional<secondYear> secondOpt=RepoSecondYear.findByEmail(secondDTO.getEmail());
        secondYear votes=new secondYear();
        if(secondOpt.isPresent())votes=secondOpt.get();
        votes.setEmail(secondDTO.getEmail());
        votes.setRollNo(secondDTO.getRollNo());
        votes.setCR(secondDTO.getCR());
        votes.setLR(secondDTO.getLR());
        votes.setAcrA(secondDTO.getAcrA());
        votes.setAcrB(secondDTO.getAcrB());
        votes.setSportsBoysOne(secondDTO.getSportsBoysOne());
        votes.setSportsBoysTwo(secondDTO.getSportsBoysTwo());
        votes.setSportsGirl(secondDTO.getSportsGirl());
        votes.setCulturalOne(secondDTO.getCulturalOne());
        votes.setCulturalTwo(secondDTO.getCulturalTwo());
        votes.setCulturalThree(secondDTO.getCulturalThree());
        votes.setCreativeOne(secondDTO.getCreativeOne());
        votes.setCreativeTwo(secondDTO.getCreativeTwo());
        votes.setCreativeThree(secondDTO.getCreativeThree());
        votes.setTechnical(secondDTO.getTechnical());
        votes.setLiterary(secondDTO.getLiterary());
        votes.setAlumni(secondDTO.getAlumni());
        votes.setExternal(secondDTO.getExternal());
        votes.setTreasurer(secondDTO.getTreasurer());
        RepoSecondYear.save(votes);
    }
    public secondYear getVoteByEmail(String email){
        return RepoSecondYear.findByEmail(email).orElseThrow(()->new RuntimeException("not found"));
    }
}
