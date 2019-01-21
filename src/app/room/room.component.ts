import { Component, OnInit } from '@angular/core';
import { CohurtService } from '../testservice/cohurt.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
public selects;
public room_no;
public comment;
public image;
public catname;
  constructor(private cohort:CohurtService) { }
  
  ngOnInit() {
    this.cohort.getMethod('http://localhost/hotelservice/rooms.php').subscribe(
      fet=>{ this.selects = fet['message']; 
        console.log(this.selects);
  }
    )
  }
 getroom(x){
  this.room_no = x.value.room_no;
  this.comment = x.value.comment;
  this.image = x.value.image;
  let body ={
    room_no: this.room_no,
  }
 }

}
