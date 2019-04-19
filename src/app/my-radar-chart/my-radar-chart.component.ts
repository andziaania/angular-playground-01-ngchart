import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['01', '02', '03', '04', '05'];
  public radarChartType = 'radar';
  public radarChartData = [
    {data: [36, 23, 33, 52, 85], label: '2018'},
    {data: [62, 11, 26, 35, 22], label: '2019'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
