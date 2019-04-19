import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {

  public pieChartLabels = ['Sales 01', 'Sales 02', 'Sales 03', 'Sales 04'];
  public pieChartData = [231, 354, 53, 42];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
