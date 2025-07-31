package com.trical.elections.Repository;

import com.trical.elections.Entities.secondYear;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface secondYearRepo extends JpaRepository<secondYear,Long> {
    Optional<secondYear> findByEmail(String email);
}
