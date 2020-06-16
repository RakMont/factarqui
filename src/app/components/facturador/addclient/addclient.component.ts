import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  phoneNumber=""
  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log(this.phoneNumber);
    this.apiService.retrieveCallRecords("retrieve/?phoneNumber=" + this.phoneNumber).subscribe(
      (r) => {
        console.log(r);
        this.router.navigate(['/show',JSON.stringify(r)]);
      },
      (e) => {
        console.log(e);
      }

    );
  }
}
