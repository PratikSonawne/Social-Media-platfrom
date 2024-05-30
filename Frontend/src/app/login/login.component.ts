import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public app:AppComponent){
    this.app.mobile="";
    this.app.password="";
  }
  
  login()
  {
     let obj={
      "mobile":this.app.mobile,
      "password":this.app.password
     };
    let url=this.app.baseUrl+'login';
    this.app.http.post(url,obj).subscribe((data:any)=>{
      // console.log(data);
      if(data==-2)
        {
          window.alert( "wrong mobile number")
        }
        else if(data==-3)
          {
            window.alert("wrong password");
          }
          else if(data==-1)
          {
            window.alert("user not found");
          }
          else if(data==-2)
          {
          window.alert('wrong number');
          }
          else if (data<1){
           window.alert("exception on server");
          }
          else{
            // window.alert("login Successful");
           this.app.WhatToshow=2;
           this.app.userid=data;
          this.app.mobile="",
          this.app.password=""
          }
  });
  }
  
}
