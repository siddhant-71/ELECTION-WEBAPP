package com.trical.elections.Service;

import com.trical.elections.Entities.Passwords;
import com.trical.elections.Entities.thirdYear;
import com.trical.elections.Entities.thirdYearDTO;
import com.trical.elections.Repository.PasswordRepo;
import com.trical.elections.Repository.thirdYearRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class thirdYearService {
    private final thirdYearRepo RepoThirdYear;
    public void submitSeniorsVote(thirdYearDTO votesSr){
        Optional<thirdYear> votesOpt=RepoThirdYear.findByEmail(votesSr.getEmail());
        thirdYear votes=new thirdYear();
        if(votesOpt.isPresent())votes=votesOpt.get();
        votes.setEmail(votesSr.getEmail());
        votes.setRollNo(votesSr.getRollNo());
        votes.setDR(votesSr.getDR());
        votes.setLDR(votesSr.getLDR());
        votes.setAdrA(votesSr.getAdrA());
        votes.setAdrB(votesSr.getAdrB());
        votes.setSportsBoysOne(votesSr.getSportsBoysOne());
        votes.setSportsBoysTwo(votesSr.getSportsBoysTwo());
        votes.setSportsGirl(votesSr.getSportsGirl());
        votes.setCulturalOne(votesSr.getCulturalOne());
        votes.setCulturalTwo(votesSr.getCulturalTwo());
        votes.setCulturalThree(votesSr.getCulturalThree());
        votes.setCreativeOne(votesSr.getCreativeOne());
        votes.setCreativeTwo(votesSr.getCreativeTwo());
        votes.setCreativeThree(votesSr.getCreativeThree());
        votes.setTechnical(votesSr.getTechnical());
        votes.setLiterary(votesSr.getLiterary());
        votes.setAlumni(votesSr.getAlumni());
        votes.setExternal(votesSr.getExternal());
        votes.setTreasurer(votesSr.getTreasurer());
        RepoThirdYear.save(votes);
    }
    public thirdYear getVoteByEmail(String email){
        return RepoThirdYear.findByEmail(email).orElseThrow(()->new RuntimeException("not found"));
    }
}
