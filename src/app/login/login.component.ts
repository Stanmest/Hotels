import { Component, OnInit } from '@angular/core';
import { CohurtService } from '../testservice/cohurt.service';
import { Router,Routes } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public error: string = "";
  constructor(private cohort:CohurtService, private navbar:Router) { }

  ngOnInit() {
  }
  subform(y){
   // alert(JSON.stringify(y.value));
   this.email=y.value.email;
   this.password=y.value.password;
   let body={
    email:this.email,
    password:this.password,
    mykey:'a1',
  }
   this.cohort.postMethod('http://localhost/hotelservice/registerapi.php',body).subscribe(
    (success)=>{console.log(success)
     if(success['code'] !='02'){
        this.error=success['message'];
      }else{
        this.navbar.navigate(["/dashboard"])}
    },
    (error)=>{console.log(error)},
    ()=>{}
  )
  }
  
    
}
