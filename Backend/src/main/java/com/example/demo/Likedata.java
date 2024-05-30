package com.example.demo;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Likedata {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id ;
	 int userid;
	 int postid;
	 Date date;

}
