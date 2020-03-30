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
  countryData: ICountryCase[];
  death: any[] = [];
  constructor() { }
  // names: string[] = [];
  // value: number[] = [];
  ngOnInit() {
    this.countryData.map((data: ICountryCase) => {
      this.barChartData[0].data.push(data.cases.total);
      this.barChartLabels.push(data.name);
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
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: [

    { backgroundColor: ["#86c7f3", "#FF0000", "#006400", "#006400", "#FF0000"] },
    { borderColor: ["#D68910", "#FF0000", "#006400", "#FF0000", "#FF0000"] }];
  public barChartData: ChartDataSets[] = [
    {
      data: [], label: 'TotalCases'
    },
    {
      data: [], label: 'TotalDeaths'
    }
  ];

}
