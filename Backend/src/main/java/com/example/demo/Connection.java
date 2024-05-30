package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Connection {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cid;
	
	int userid1;
	int userid2;
	int connectionstatus;
}
