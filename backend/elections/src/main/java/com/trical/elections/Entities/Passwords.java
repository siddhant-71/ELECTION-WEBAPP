package com.trical.elections.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Passwords")
@Data
public class Passwords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private boolean juniorVoted=false;
    private boolean seniorVoted=false;
}
