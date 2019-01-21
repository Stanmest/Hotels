import { Component, OnInit } from '@angular/core';
import { CohurtService } from '../testservice/cohurt.service';
import { HttpHandler } from '../../../node_modules/@angular/common/http';
import { Router,Routes } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public fullname: string;
  public email: string;
  public pwd: string;
  public cpwd: string;
  public error:string ='';

//	public string: string = 'Register';
  constructor(private cohurt:CohurtService, private nav:Router) { }

  ngOnInit() {
  }
  	subform(x){
     // alert(JSON.stringify(x.value));
	//alert(this.fullname);
  this.fullname=x.value.fullname;
  this.email=x.value.email;
  this.pwd=x.value.password;
  this.cpwd=x.value.cpassword; 
  let body={
    fullname:this.fullname,
    email:this.email,
    password:this.pwd,
    cpassword:this.cpwd,
    mykey:'a2'
  }
  this.cohurt.postMethod('http://localhost/hotelservice/registerapi.php',body).subscribe(
    (success)=>{console.log(success)
      if(success['code'] !='03'){
        this.error=success['message'];
      }else{
        this.nav.navigate(["/dashboard"])
      }
  },
    (error)=>{console.log(error)},
    ()=>{}
  )
	}
  

}
