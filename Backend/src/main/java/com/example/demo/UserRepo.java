package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import lombok.extern.java.Log;
import java.util.List;


public interface UserRepo  extends JpaRepository<User, Integer>{
	int countByUsername(String name);
	int countByMobile(long number);
	int countByEmail(String email);
	int countByPassword(String pass);
	
	//User findByMobile(long num);
	User findByMobile(Long num);
	User findByUsername(String uname);
//	User  findById(int id);
	
	List<User> findTop20ByUsernameStartsWith(String ername );
	List<User> findByIdIn(List<Integer> ids);
	
}
