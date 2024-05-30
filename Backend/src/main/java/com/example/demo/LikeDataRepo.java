package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;import jakarta.persistence.criteria.CriteriaBuilder.In;

public interface LikeDataRepo extends JpaRepository<Likedata, Integer> {
	
	int countByUseridAndPostid(int userid,int postid);

}
