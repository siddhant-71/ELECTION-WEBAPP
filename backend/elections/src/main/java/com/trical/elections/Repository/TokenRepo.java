package com.trical.elections.Repository;

import com.trical.elections.Entities.Tokens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenRepo extends JpaRepository<Tokens,Long> {
    Optional<Tokens> findByEmail(String email);
}
