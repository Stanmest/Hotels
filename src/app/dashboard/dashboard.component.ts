import { Component, OnInit } from '@angular/core';
import { CohurtService } from '../testservice/cohurt.service';
import { Router,Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   //public fullname: string;
  public ServiceURL: string;
 public HotelName:string;
 // public Location: string;
 public ServiceID: string;
  public error: string='';
  
  constructor(private cohort:CohurtService) { }


  ngOnInit() {
  }
  me(y){
    // alert(JSON.stringify(y.value));
    this.ServiceURL=y.value.ServiceURL;
    //this.Location=y.value.Location;
    this.ServiceID=y.value.ServiceID;
    this.HotelName=y.value.HotelName;
    let body={
     ServiceURL:this.ServiceURL,
     HotelName:this.HotelName,
     //Location:this.Location
     ServiceID:this.ServiceID
    
   }
    this.cohort.postMethod('http://localhost/hotelservice/ServiceApi.php',body).subscribe(
     (success)=>{console.log(success)
      if(success['code'] =='01'){
         this.error=success['message'];
       }else{
         this.error=success['Invalid login'];}
     },
     (error)=>{console.log(error)},
     ()=>{}
   )
   }
   
     
 }

