package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ConnectionRepo  extends JpaRepository<Connection, Integer>{
	
	int countByUserid1(int uid1);
	int countByUserid2(int uid2);
	Connection  findByUserid1AndUserid2(int us1,int us2);
	List<Connection> findByUserid2AndConnectionstatus(int userid2,int Connectionstatus);
	
	 @Query(value = "SELECT userid1 FROM Connection WHERE userid2 = :userId AND connectionstatus = 1", nativeQuery = true)
	 List<Integer> findUserIdsByUserId2AndConnectionStatus( int userId);
		
	 @Query(value = "SELECT userid1 FROM Connection WHERE userid2 = :userId AND connectionstatus = 2", nativeQuery = true)
	 List<Integer> findUserIdsByUserId2AndConnectionStatusis2( int userId);// foolwer
//	 
//	 @Query(value = "SELECT userid1 FROM Connection WHERE userid1 = :userId AND connectionstatus = 2", nativeQuery = true)
//	 List<Integer> findUserIdsByUserId1AndConnectionStatusis2( int userId);
	 
	 @Query(value = "SELECT userid2 FROM Connection WHERE userid1 = :userId AND connectionstatus = 2", nativeQuery = true)
	 List<Integer> findUserIdsByUserId1AndConnectionStatusIs2(int userId); // folowing
	 
	 @Query(value = "SELECT count(*) FROM Connection WHERE userid2 = :userId AND connectionstatus = 2", nativeQuery = true)
	 int findUserIdsByUserId2AndConnectionStatusiscount( int userId);// foolwer cnt

	 @Query(value = "SELECT count(*) FROM Connection WHERE userid1 = :userId AND connectionstatus = 2", nativeQuery = true)
	 int findUserIdsByUserId1AndConnectionStatusIs2count(int userId); // folowing count
	
}
