package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Postrepo  extends JpaRepository<Post, Integer>{
	List<Post> findByUseridOrderByIdDesc(int uid);
//	 @Query(value = "SELECT p.id, p.content, p.date, p.likecount, u.username " +
//	            "FROM post p " +
//	            "JOIN user u ON p.userid = u.id " +
//	            "WHERE p.userid IN (SELECT userid2 FROM Connection WHERE userid1 = ?1 AND connectionstatus = 2) " +
//	            "ORDER BY p.id DESC " +
//	            "LIMIT 50", nativeQuery = true)
//	 List<Postdata> getpostfrommyconecations(int uid);
	@Query(value = "SELECT p.id, p.content, p.date, p.likecount, u.username " +
            "FROM post p " +
            "JOIN user u ON p.userid = u.id " +
            "WHERE p.userid IN (SELECT userid2 FROM connection WHERE userid1 = ?1 AND connectionstatus = 2) " +
            "ORDER BY p.id DESC " +
            "LIMIT 50", nativeQuery = true)
	List<Postdata> getPostsFromMyConnections(int userid);
}
