import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  UserCount:any;
  ClientCount:any;
  Users=[2, 1, 3, 5, 2, 3];
  Clients=[4, 1, 1, 8, 2, 3];
  constructor(private dash:DashboardService) { }

  ngOnInit() {
    this.userCount();
    this.clientCount();
  }
  userCount(){
    this.dash.showUser().subscribe(
      (data) =>{ 
        this.UserCount = data;
        console.log(this.UserCount);
      });
  }
  clientCount(){
    this.dash.showClient().subscribe(
      (data) =>{ 
        this.ClientCount = data;
        console.log(this.ClientCount);
      });
  }
  
}
