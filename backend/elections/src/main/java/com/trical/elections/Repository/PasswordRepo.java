package com.trical.elections.Repository;

import com.trical.elections.Entities.Passwords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PasswordRepo extends JpaRepository<Passwords,Long> {
    Optional<Passwords> findByEmail(String email);
}
