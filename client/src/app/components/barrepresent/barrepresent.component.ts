import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ICountryCase } from 'src/app/model/case.modle';

@Component({
  selector: 'app-barrepresent',
  templateUrl: './barrepresent.component.html',
  styleUrls: ['./barrepresent.component.css']
})
export class BarrepresentComponent implements OnInit {
  @Input()
  countryData: any[];
  death: any[] = [];
  constructor() { }
  // names: string[] = [];
  // value: number[] = [];
  ngOnInit() {
    this.countryData.map((data: any) => {
      this.barChartData[0].data.push(data.cases.total);
      this.barChartLabels.push(data.country);
      this.barChartData[1].data.push(data.deaths.total);
    })
  }

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  public barChartOptions: any = {

    responsive: true,

  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      data: [], label: 'TotalCases', backgroundColor: 'grey', borderColor: 'black'
    },
    {
      data: [], label: 'Deaths', backgroundColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
    }
  ];

}
