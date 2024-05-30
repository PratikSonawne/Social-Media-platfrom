import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { SearchComponent } from './dashbord/search/search.component';
import { WatingRequestsComponent } from './dashbord/wating-requests/wating-requests.component';
import { ChatComponent } from './dashbord/chat/chat.component';
import { PostComponent } from './dashbord/post/post.component';
import { ReelsComponent } from './dashbord/reels/reels.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    ProfileComponent,
    SearchComponent,
    WatingRequestsComponent,
    ChatComponent,
    PostComponent,
    ReelsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
