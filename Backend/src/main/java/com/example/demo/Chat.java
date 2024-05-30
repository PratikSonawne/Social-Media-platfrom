package com.example.demo;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Chat {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 int id;
	
	int userid1;
	int userid2;
	Date date;
	String username;
	String message;
	
	

}
