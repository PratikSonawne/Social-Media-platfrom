import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import e from 'express';
import { interval, mergeMap } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  wts=0;
  userid2:number=0;
  targetusername:string='';
  message:string='';
  frindslist:any;
currentmessage:any;
  messagetod:any[]=[];

  // interval(5000).pipe(
  //   mergeMap(() => this.http.get<any[]>(`${this.apiUrl}/retrieve`))
  // )
  // // We subscribe to the observable stream
  // .subscribe((messages: any[]) => {
  //   // When a response is received, this callback function is executed
  //   // It assigns the received messages to the 'this.messages' property of the component
  //   this.messages = messages;
  // });

  


  
 

  constructor(public app:AppComponent){
    let url=this.app.baseUrl+'friendslist'+this.app.userid;
    this.app.http.get(url).subscribe((data:any)=>
    {
      if(data==null)
        {
          window.alert('No friends ');
        }
        else{
          this.frindslist=data;
         // console.log(this.frindslist);

        }
    })


    
  }
  watingmassages(){
    let url=this.app.baseUrl+'watingmesages'+this.app.userid;
    this.app.http.get(url).subscribe((data:any)=>{
      this.messagetod=data;
      console.log(data);
      console.log(this.messagetod);
      this.wts=2;
    })
  }

  // message1:String='';

 messages: any[] = [];
  ngOnInit()
  {
    let url=this.app.baseUrl+'messages/retrieve';
    interval(5000).pipe(
    mergeMap(() => this.app.http.get<any[]>(`${url}`))
  )
  // We subscribe to the observable stream
  .subscribe((messages: any[]) => {
    // When a response is received, this callback function is executed
    // It assigns the received messages to the 'this.messages' property of the component
    this.messages = messages;
  });

  }


  messagesend()
  {
  
   let obj={
    "userid1":this.app.userid,
    "userid2":this.userid2,
     "message":this.message,
     "username":this.app.username
   }
    let url=this.app.baseUrl+'massagesend';
    this.app.http.post(url,obj).subscribe((data:any)=>{
      if(data==null)
      {
        window.alert('no friend');
      }
      else{
        this.load()
      }
    });

  }
  load(){
    let url=this.app.baseUrl+'load'+this.app.userid;
    this.app.http.get(url).subscribe((data:any)=>
    {
      if(data==null)
        {
          window.alert('No friends ');
        }
        else{
         

        }
    })

  }

 }
// messages: any[] = [];
// newMessage: any = { sender: 'userId1', receiver: 'userId2', content: '' }; // Assuming userId1 is sending to userId2
// apiUrl = '/api/messages';

// constructor(private http: HttpClient) { }

// ngOnInit(): void {
//   // Poll for new messages every 5 seconds
//   interval(5000).pipe(
//     mergeMap(() => this.http.get<any[]>(${this.apiUrl}/retrieve))
//   ).subscribe((messages: any[]) => {
//     this.messages = messages;
//   });
// }

// sendMessage(): void {
//   this.http.post<any>(${this.apiUrl}, this.newMessage).subscribe(() => {
//     this.newMessage.content = ''; // Clear input field after sending message
//     });
