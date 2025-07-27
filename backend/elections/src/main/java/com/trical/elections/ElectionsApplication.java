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
