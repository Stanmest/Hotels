import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';


@Injectable({
  providedIn: 'root'
})
export class CohurtService {

  constructor(private xcv:Http) { 
}
  postMethod(apiEndPoint,payLoad){
    return this.xcv.post(apiEndPoint,payLoad).pipe(map((e:Response)=>e.json())); 
  }
   putMethod(apiEndPoint,payLoad){
    return this.xcv.put(apiEndPoint,payLoad).pipe(map((e:Response)=>e.json()));
  }
   deleteMethod(apiEndPoint){
    return this.xcv.delete(apiEndPoint).pipe(map((e:Response)=>e.json()));
  }
  getMethod(apiEndPoint){
    return this.xcv.get(apiEndPoint).pipe(map((e:Response)=>e.json()));
  }
}

