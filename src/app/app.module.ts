//import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CohurtService } from './testservice/cohurt.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { RoomComponent } from './room/room.component';
//import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';


const route=[{
  path:"",component: NavbarComponent, children:[
    {path:"",component: HomeComponent},
    {path:"login",component: LoginComponent},
    {path:"signup",component: SignupComponent},
    {path:"category",component: CategoryComponent}
]},
 {path:"dashboard",component: DashboardComponent//, Children:[
  //{path:"",Component: WelcomeComponent}
   //]
}];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    FormsModule,
   HttpModule,
   ReactiveFormsModule,
   RouterModule.forRoot(route)
  ],
  providers: [
    CohurtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

