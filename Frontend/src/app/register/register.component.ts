import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(public app:AppComponent){
    
  }
  add(){
    let obj={
      "username":this.app.username,
      "password":this.app.password,
      "email":this.app.email,
      "mobile":this.app.mobile


    }
    let url=this.app.baseUrl+'register';

this.app.http.post(url,obj).subscribe((data:any)=>
{    
    if(data==1)
      {
    alert(`register successful`);
    this.app.WhatToshow=1;
    this.app.username="";
      this.app.password="",
      this.app.email="",
      this.app.mobile=""

      }
    if(data==-4)
      alert(`Username is used by another user`);
    if(data==-3)
      alert(`Mobile is  already register`);
    if(data==-5)
      alert(`email  is  already register`);
    if(data==-2)
      alert(`invalid email`);
    if(data==-6)
      {
        alert('Invalid Mobile number')
      }
    if(data==-1)
      alert(`exception on server`);
    
});

  }
  
  
}
