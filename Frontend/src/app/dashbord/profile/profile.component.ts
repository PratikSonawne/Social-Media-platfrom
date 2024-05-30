import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    
  followers:number=0;
  following:number=0;
  status:string='';
  statusa:number=0;
  wts=0;
  wtsc=0;
  followerslist:any;
  followingList:any;
  constructor(public app:AppComponent){
    let url=this.app.baseUrl+'follwersandfollowing';
    this.app.http.post(url,this.app.userid).subscribe(
      (res:any)=>{
        
          this.followers= res[0]
          this.following= res[1]
          this.status=res[1];
         if(res[2]==0)
          this.status='Public';
         else
          this.status='Private';
      }
    )

  }
  getCommentsAll(post:any){
    let url=this.app.baseUrl+'getComments'+post.id;
    this.app.http.get(url).subscribe((data:any)=>{
      if(data.length==0)
        {
          window.alert('nothing to show');
        }
        else{
          console.log(data);
            this.app.commentslist=data;
           this.wtsc=1;
        }
    })

  }
 
  getmyposts()
  {
    let url=this.app.baseUrl+'getmyposts'+this.app.userid;
    this.app.http.get(url).subscribe((data:any)=>{
      if(data.index<0)
        {
          window.alert('nothing to show');
        }
        else{
          this.app.Apostlist=data;
        }
    });
  }
  getfollowerslist()
  {
    let url=this.app.baseUrl+'getfollowerslist'+this.app.userid;
      this.app.http.get(url).subscribe((data:any)=>{
      
        if(data==null)
          {
            window.alert('nothing two show');
          }
          else{
            this.followerslist=data;
          }

      });

  }
  
  getfollowinglist()
  {
    let url=this.app.baseUrl+'getfollowinglist'+this.app.userid;
   
      this.app.http.get(url).subscribe((data:any)=>{
        console.log(data);
        if(data==null)
          {
            window.alert('nothing two show');
          }
          else{
            this.followingList=data;
          }

      });

  }
  UpdateStatus()
    {
      let url=this.app.baseUrl+'updatestatus';
      this.app.http.post(url,this.app.userid).subscribe(
        (res:any)=>{
          this.statusa=res;
          if(res==0)
          this.status='Public';
          else
          this.status='Private';
        }
      )
      
    }

}
