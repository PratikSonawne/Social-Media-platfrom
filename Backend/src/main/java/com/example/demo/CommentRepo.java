package com.example.demo;

import java.util.List;

import org.springframework.boot.autoconfigure.web.servlet.JerseyApplicationPath;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo  extends JpaRepository<Comment, Integer>{
	
	List<Comment> findByPostidOrderByIdDesc(int postid);

}
