import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postlist:any;
  posta:string='';
  wts=3;
  likesofpost:number=0;
  content:String='';
  
  constructor(public app:AppComponent)
  {
    let url=this.app.baseUrl+'getallposts'+this.app.userid;
    this.app.http.get(url).subscribe((res:any)=>{
      console.log(res)
      this.postlist=res;
    })

  }
  addcomment(post:any){
    console.log(this.content);
    let url=this.app.baseUrl+'addcomment'+this.app.userid+'and'+post.id;
    console.log(url);
    this.app.http.post(url,post.comments).subscribe((data:any)=>{
     
        this.app.commentslist.push(data);
        post.comments =" ";
      window.alert("doen");

    })


  }
 
  postthis(){
    
    if(window.confirm('Are you sure!'))
        {  
          let url=this.app.baseUrl+'addnewpost'+this.app.userid;
          this.app.http.post(url,this.posta).subscribe((data:any)=>{
            if(data==null)
              {

              }
              else{
                // this.app.Apostlist = []; 
                this.app.Apostlist.push(data);
                this.posta=" ";
              }
          })

}
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
           this.wts=6;
        }
    })

  }
  likepost(post:any){

  let url=this.app.baseUrl+'likepost'+this.app.userid+'and'+post.id;
  this.app.http.get(url).subscribe((data:any)=>{
    
      post.likecount=data;
    
    
  })
  }

  
}