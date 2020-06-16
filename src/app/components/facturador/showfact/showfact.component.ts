import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-showfact',
  templateUrl: './showfact.component.html',
  styleUrls: ['./showfact.component.css']
})
export class ShowfactComponent implements OnInit {

  factura:any;
  costoTotal: Number = 0;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.factura = JSON.parse(activatedRoute.snapshot.params["factura"]);
  }

  ngOnInit(): void {
    for(var f of this.factura){
      this.costoTotal = this.costoTotal + f.callCost;
    }
  }

}
