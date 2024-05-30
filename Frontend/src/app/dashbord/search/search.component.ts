import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { get } from 'http';
import { DashbordComponent } from '../dashbord.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search:string=""
  sname:string=""
  constructor(public app:AppComponent ) {}


  follow(userid2:number)
   {
        let obj={
          "userid1":this.app.userid,
          "userid2":userid2
          }

        let url=this.app.baseUrl+'follow';
        this.app.http.post(url,obj).subscribe((data:any)=>{
          if(data==-2)
            {
             window.alert("Blocked by the user");
            }
            if(data== 3)
              {
                window.alert('Id is privete requst sended')
              }
              if(data==4)
                {
                  window.alert("direct acepeted")
                }
                if(data==5)
                  {
                    window.alert("Id is privete requst sended new conection")
                  }
                  if(data==6)
                    {
                      window.alert("direct acepeted new con")
                    }
                    if(data==7)
                      {
                        window.alert(" You allready seds rqust")
                      }
                    if(data==-1)
                      {
                      window.alert('exception');
                      }
          });
    }               

  Search(search:any)
  {
   //
    console.log(this.sname);
     if(this.sname=="")
      {
      window.alert('Enter something')
      }
      else{
    let url=this.app.baseUrl+'search'+this.sname+'and'+this.app.userid;
    this.app.http.get(url).subscribe((data:any)=>{
      if(data==null)
        {
          window.alert("not found");

        }
        else{
          this.app.List=data;
        }

    })
  }
    

  
  
  }
  Reload()
    {
      this.app.List=null;
      this.search='';
      
    }
  
}
