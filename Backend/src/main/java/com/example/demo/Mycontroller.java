package com.example.demo;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.hibernate.WrongClassException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.Id;

@RestController
@CrossOrigin
public class Mycontroller {
	
	
	@Autowired
	UserRepo userRepo;
	@Autowired
	ConnectionRepo connectionRepo;
	
	@Autowired
	Postrepo postrepo;
	@Autowired
	ChatRepo chatRepo;
	
	@Autowired
	LikeDataRepo likeDataRepo;
	
	@Autowired
	CommentRepo commentRepo;
	@RequestMapping("watingmesages{userid}")
	public List<Chat>  mymessage(@PathVariable int userid)
	{
		try {
			
			return chatRepo.findByUserid2(userid);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("massagesend")
	public Chat massagesend(@RequestBody Chat chat )
	{
		try {
			if(chat==null)
			{
				return null;
			}
			chat.setDate(new Date());
			return chatRepo.save(chat);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	
	@RequestMapping("getComments{postid}")
	public List<Comment> b(@PathVariable int postid)
	{
		try {
			return commentRepo.findByPostidOrderByIdDesc(postid);
			
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping("addcomment{userid}and{postid}")
	public  Comment a(@PathVariable int userid,@PathVariable int postid,@RequestBody String content )
	{
		try {
			Comment obj=new Comment();
			obj.comments=content;
			obj.postid=postid;
			obj.userid=userid;
			
			User user=userRepo.findById(userid).get();
			obj.username=user.username;
			return commentRepo.save(obj);
		
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		}
	
	@RequestMapping("likepost{userid}and{postid}")
	public int like(@PathVariable int userid,@PathVariable int postid )
	{
		try {
			Post aPost=postrepo.findById(postid).get();
			if(likeDataRepo.countByUseridAndPostid(userid,postid)>0)
				return  aPost.likecount;
		    aPost.likecount++;
			Likedata like=new Likedata();
			like.userid=userid;
			like.postid=postid;
			like.date=new Date();
			likeDataRepo.save(like);
			
			return aPost.likecount;
			
			
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	
	@RequestMapping("friendslist{userid}")
	public List<User> friendslist(@PathVariable int userid)
	{
		try {
			
		List<Integer> list=	connectionRepo.findUserIdsByUserId1AndConnectionStatusIs2(userid);
		List<User> aList=new ArrayList();
		for(Integer a:list)
		{
			if(userRepo.findById(a).isPresent())
			{
			aList.add(userRepo.findById(a).get());
			}
		}
			return aList;
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("getallposts{uid}")
	public List<Postdata> getallposts(@PathVariable int uid)
	{
		try {
			return postrepo.getPostsFromMyConnections(uid);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("addnewpost{uid}")
	public Post postthis(@PathVariable int uid ,@RequestBody String post)
	{
		try {
		
			Post posts  =new Post();
			posts.setUsername(userRepo.findById(uid).get().getUsername());
			posts.setDate(new Date());
			posts.setContent(post);
			posts.setUserid(uid);
			return postrepo.save(posts);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	}
    @RequestMapping("getmyposts{uid}")
    public List<Post> getmyposts(@PathVariable int uid)
    {
    	try {
			
    		return postrepo.findByUseridOrderByIdDesc(uid);
		} catch (Exception e) {
			return null;
		}
    }

	@RequestMapping("getfollowerslist{userid1}")
	public List<User> getfollowerslist(@PathVariable int userid1)
	{
		try {
            List<Integer> list =connectionRepo.findUserIdsByUserId2AndConnectionStatusis2(userid1);
           return userRepo.findByIdIn(list);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		
		}
		
	}

	@RequestMapping("getfollowinglist{userid1}")
	public List<User> getfollowinglist(@PathVariable int userid1)
	{
		try {
            List<Integer> list =connectionRepo.findUserIdsByUserId1AndConnectionStatusIs2(userid1);
           return userRepo.findByIdIn(list);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		
		}
		
	}
	 
	 @RequestMapping("setconnection")
	 public  int set(@RequestBody Connection connection)
	 {
		 try {
			 System.out.println(connection);
			 
			Connection allconnection=	connectionRepo.findByUserid1AndUserid2(connection.userid2,connection.userid1);
			//System.out.println(allconnection);
			if(allconnection!=null)
			{
			 allconnection.setConnectionstatus(connection.connectionstatus);
			 connectionRepo.save(allconnection);
			 return connection.connectionstatus;
			}
			return -3;
			
		} catch (Exception e) {
			   e.printStackTrace();
			   return -1;
		}
		 
	 }
	
	
	 @RequestMapping("watingreq")
	 public List<User> watingreq(@RequestBody int userid2)
	 {
//		  List<Connection> a=connectionRepo.findByUserid2AndConnectionstatus(userid2, 1);//conn stats 1 only displayed
//		  
//		  List<User> aList=new ArrayList();
//		  for(Connection data:a)
//		  {
//			//System.out.println(data);
////			  data.getUserid1();
////			  String user= userRepo.findById(data.getUserid1()).get().getUsername();
//			  
//			  aList.add(userRepo.findById(data.getUserid1()).get());
//	    	}
////		  System.out.println(a);
//			 return aList;
		 
	
		
		
			
		 try {
				List<Integer> list=  connectionRepo.findUserIdsByUserId2AndConnectionStatus(userid2);
				return userRepo.findByIdIn(list);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
	 }
	
	


	@RequestMapping("follow")
	public int follow(@RequestBody  Connection  connection)
	{
		try {
			Connection aConnection=	connectionRepo.findByUserid1AndUserid2(connection.userid1,connection.userid2);
		
	
			if(aConnection!=null)
			{  
				if (aConnection.connectionstatus==1) {
					return 7; // allready sended
					
				}
				if(aConnection.connectionstatus==4)
					return -2; //  use blocked by the user
				
					int psc=  userRepo.findById(connection.userid2).get().getStatus();
					     
					if(psc==1)
					{
							aConnection.connectionstatus=1;
							connectionRepo.save(aConnection);
							return 3; // id is privete requst send
					}
					else {
						aConnection.connectionstatus=2;
						connectionRepo.save(aConnection);
						return 4; // requst dircte acepeted id not private and follwed 
					}
					
					
					
				
			
			}
			else 
			{
						Connection newConnection=new Connection();
						
						newConnection.setUserid1(connection.userid1);
						newConnection.setUserid2(connection.userid2);
						int psc=  userRepo.findById(connection.userid2).get().getStatus();
								if(psc==1)
								{
										newConnection.connectionstatus=1;
										connectionRepo.save(newConnection);
										return  5; // id is privete requst send
								}
								else {
									newConnection.connectionstatus=2;
									 connectionRepo.save(newConnection);
									return 6; // requst dircte acepeted id not private and follwed 
								}
							
			
			}
			
			
		} catch (Exception e) {
			 e.printStackTrace();
			 return -1;
		}
		
	
		
	}
	
  @RequestMapping("updatestatus")
  public  int updatestatus(@RequestBody int userid)
  {
	try {
		Optional<User> user=userRepo.findById(userid);
		if(user.isPresent())
		{
		User u=user.get();
		
		
		if(u.getStatus()==0)
		{
			u.setStatus(1);	
			userRepo.save(u);
			return 1;  
		}
		else
		{
			u.setStatus(0);
			userRepo.save(u);
			return 0;
		}
		}
		return -1;
		
	} catch (Exception e) {
		 e.printStackTrace();
		 return -1;
	}
  }


	@RequestMapping("follwersandfollowing")
	public int[] abc(@RequestBody int uid)
	{
		   try {
					int[]a=new int[3];
					a[0]=connectionRepo.findUserIdsByUserId2AndConnectionStatusiscount(uid);
					a[1]=connectionRepo.findUserIdsByUserId1AndConnectionStatusIs2count(uid);
					Optional<User> user=userRepo.findById(uid);
					if(user.isPresent())
					{
					User b=user.get();
					a[2]=b.getStatus();
                     }
					
					return a;
				} catch (Exception e) 
				{
					e.printStackTrace();
					return null;
				}
	}
	
	@RequestMapping("search{un}and{luid}")
	public List<User> ser(@PathVariable String un ,@PathVariable int luid)
	{
		try {
			List<User> a=userRepo.findTop20ByUsernameStartsWith(un);
			
			User user =userRepo.findById(luid).orElse(null);
			if(user !=null)
			{
				 Iterator<User> iterator= a.iterator();
				while(iterator.hasNext())
				{
					User user2=iterator.next();
					if(user2.getUsername().equals(user.getUsername())) 
					{
							iterator.remove();
					}
				}
			}
			
			//System.out.println(a);
			if(a.isEmpty())
				return null;
			return a;
		} catch (Exception e) {
			e.printStackTrace();
			 return null;
		}
		
	}
	
	 @RequestMapping("get{id}")
	 public String[] a(@PathVariable int id)
	 {
		 String[] a=new String[1];
		Optional<User> b=userRepo.findById(id);
		if(b.isPresent())
		{
		User c=b.get();
		a[0]=c.getUsername();
		}
		return a;
	 }
	@RequestMapping("login")
	public int login(@RequestBody User userui)
	{
		try {
			if(userui.password==null)
				return -41;
				int count= userRepo.countByMobile(userui.mobile);
				if(count<=0)
				return -2; // worng mnumber
			 
				if(userRepo.countByPassword(userui.password)!=1)
				{
					return -3; //Wrongpasswrd
				}
				
				User userdb=userRepo.findByMobile(userui.mobile);
				userdb.password.equals(userui.password);
					return userdb.id;// 
				
			
		} catch (Exception e) {
			e.printStackTrace();	
			return -1;
		}
		
	}
	
	@RequestMapping("register")
	public int re(@RequestBody User user)
	{
		try{
			if(userRepo.countByUsername(user.username)>0 ) // 1
			return -4;// username duplicate
			
			if(userRepo.countByMobile(user.mobile)>0 )
				return -3 ; //mobile duplicate
			
			if(user.mobile < 1000000000L || user.mobile > 9999999999l)
				return -6;
			
			if(userRepo.countByEmail(user.email)>0 )
				return -5; //duplicate email
		
			if(!user.email.contains("@gmail.com"))
			{
			return -2;
	
			}
			user.setDate(new Date());
			userRepo.save(user);
			return 1;// susses
			
			//if(userRepo.countByPassword(null))
			
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	

}
