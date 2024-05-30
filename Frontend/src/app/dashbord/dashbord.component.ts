import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

  name:string="";
  
 constructor(public app:AppComponent)
 {
  let url=this.app.baseUrl+'get'+this.app.userid;
  this.app.http.get(url).subscribe((data:any)=>
    {
      this.app.username=data[0];
      console.log(data[0]);
    })
}
 whattosshowc:number=0;
// whattoshow(num:number)
// {
//  this.whattosshowc=num;
// }
}

