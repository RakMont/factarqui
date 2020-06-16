import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  phoneNumber=""
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log(this.phoneNumber);
    this.apiService.retrieveCallRecords("retrieve/", this.phoneNumber).subscribe(
      (r) => {
        console.log(r);
      },
      (e) => {
        console.log(e);
      }

    );
  }
}
