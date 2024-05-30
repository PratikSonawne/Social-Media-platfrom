import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-wating-requests',
  templateUrl: './wating-requests.component.html',
  styleUrl: './wating-requests.component.css'
})
export class WatingRequestsComponent {

  watingreq:any;
  constructor(public app:AppComponent)
  {
     let url= this.app.baseUrl+'watingreq';
     this.app.http.post(url,this.app.userid).subscribe((data:any)=>{
      this.watingreq=data;
     });

  }
  setconnctionS(userid2:number,setstatus:number)   //accept reject block button
  {
    
    let obj={
      "userid1":this.app.userid,
      "userid2":userid2,
      "connectionstatus":setstatus
    }
    if(setstatus==4)
      {
        const confirmation = window.confirm("Are you sure you want to perform this action?");
        if(confirmation)
          {
            let url= this.app.baseUrl+'setconnection';
            this.app.http.post(url,obj).subscribe((data:any)=>{
              if(data<0)
                {
                  window.alert('exception on server');
                }
                if(data==2)
                  {
                    window.alert('accept doen');
                  }
                  if(data==3)
                    {
                      window.alert('reject doen');
                    }
                    // if(data==4)
                    //   {
                    //     window.alert('Block doen');
                    //   }
                    //   if(data==2 || data==3 || data==4)
                    //     {
                    //       let i=this.watingreq.indexOf(this.watingreq);
                    //       if(i>=0)
                    //         {
                    //           this.watingreq.splice(i,1);
                    //         }

                    //     }
                    //     if (data == 2 || data == 3 || data == 4) {
                    //       let index = this.watingreq.findIndex(item => item.userid2 === userid2);
                    //       if (index >= 0) {
                    //         this.watingreq.splice(index, 1);
                    //       }
                    //     }
        
             });
            }
          }
        
          
      else
      {
    
    let url= this.app.baseUrl+'setconnection';
    this.app.http.post(url,obj).subscribe((data:any)=>{
      if(data<0)
        {
          window.alert('exception on server');
        }
        if(data==2)
          {
            window.alert('accept doen');
          }
          if(data==3)
            {
              window.alert('reject doen');
            }
            if(data==4)
              {
                window.alert('Block doen');
              }
        // if(data==2 || data==3 || data==4)
        //   {
        //     let i=this.watingreq.indexOf(this.watingreq);
        //     if(i>=0)
        //       {
        //         this.watingreq.splice(i,1);
        //       }

        //   }

     });
    }

  }

}
