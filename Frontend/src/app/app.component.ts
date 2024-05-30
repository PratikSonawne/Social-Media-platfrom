import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SMP';
  List:any;
  userid:number=0;
  WhatToshow:number=1;
  username:String='';
  password:String='';
  email:String='';
  mobile:String='';
 // baseUrl="http://localhost:8080/"
    baseUrl="http://13.233.128.178:8080/socialmedia/"
  Apostlist:any;
  commentslist:any;



  constructor( public http:HttpClient){}
 
 
}
