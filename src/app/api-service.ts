import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

 // API_URL : string = "https://localhost/4567/";
 API_URL = 'http://localhost:4567/';



  public retrieveCallRecords(path:string) {

    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);

  }


}
