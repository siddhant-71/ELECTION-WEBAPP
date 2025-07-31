package com.trical.elections.Repository;

import com.trical.elections.Entities.thirdYear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface thirdYearRepo extends JpaRepository<thirdYear,Long> {
    Optional<thirdYear> findByEmail(String email);
}
