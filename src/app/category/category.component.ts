import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { CohurtService } from '../testservice/cohurt.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public catname: string;
  public air: boolean;
  public internet: boolean;
  balcony: boolean;
  bed: boolean;
  extra: boolean;
  double: boolean;
  lobby: boolean;
  public error;
  
  constructor(private cohort:CohurtService) {
     
   }

  ngOnInit() {
  }
  subform(x){
    console.log(x.value);
    this.catname=x.value.catname;
    this.air=x.value.air;
    this.internet=x.value.internet;
    this.balcony=x.value.balcony;
    this.bed=x.value.bed;
    this.extra=x.value.extra;
    this.double=x.value.double;
    this.lobby=x.value.lobby;
    let body={
    catname:this.catname,
    air:this.air,
    internet:this.internet,
    balc:this.balcony,
    king_size:this.bed,
    extra:this.extra,
    double:this.double,
    lobby:this.lobby,
  }
   this.cohort.postMethod('http://localhost/hotelservice/categoryApi.php',body).subscribe(
    (success)=>{console.log(success)
     if(success['code'] !='01'){
        this.error=success['message'];
      }else{
      }
    },
    (error)=>{console.log(error)},
    ()=>{}
  )
  
  }
}
