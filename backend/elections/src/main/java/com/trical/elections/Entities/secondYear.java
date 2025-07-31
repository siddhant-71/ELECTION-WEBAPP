package com.trical.elections.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "juniors")
public class secondYear {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String rollNo;
    private String CR;
    private String LR;
    private String AcrA;
    private String AcrB;
    private String SportsBoysOne;
    private String SportsBoysTwo;
    private String SportsGirl;
    private String CulturalOne;
    private String CulturalTwo;
    private String CulturalThree;
    private String CreativeOne;
    private String CreativeTwo;
    private String CreativeThree;
    private String Technical;
    private String Literary;
    private String Alumni;
    @Column(name = "externalSec")
    private String External;
    private String Treasurer;
}



















