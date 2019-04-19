import { Component, OnInit } from '@angular/core';
import {AnnaLuckyMomentsService} from '../anna-lucky-moments.service';


interface Dataset {
  data: number[];
  label: string;
}

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: Dataset[] = [];


  constructor(private annaService: AnnaLuckyMomentsService) { }

  ngOnInit() {
    this.getAnnaLuckyMoments();
  }

  getAnnaLuckyMoments(): void {
    this.annaService.getLuckyMoments().subscribe(moments => {
      console.log(moments);
      const result: Dataset = {
        data: moments,
        label: 'AnnA',
      };
      this.barChartData.push(result);
      console.log(this.barChartData);
    });
  }

}
