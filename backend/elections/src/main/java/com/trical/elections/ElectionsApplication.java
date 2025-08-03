package com.trical.elections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ElectionsApplication {
	public static void main(String[] args) {
		SpringApplication.run(ElectionsApplication.class, args);
		System.out.println("Elections Application Started");
	}

}
//DATASOURCE_PASSWORD=siddhant;DATASOURCE_URL=jdbc:mysql://localhost:3306/elections;DATASOURCE_USER=root;FRONTEND_URL=http://localhost:5173;SPRING_PASSWORD=siddhant;SPRING_USERNAME=siddhant
