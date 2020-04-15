import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { GetdataService } from '../../services/getdata.service';
import { IDoughnutData } from '../../model/doughnut.model';
import { ICountryCase } from '../../model/case.modle';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input()
  data: any;
  public doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
  public doughnutChartData = [];
  public doughnutChartColors = [

    { backgroundColor: ["#566D7E", "#000000", "#6C7D55"] },
    { borderColor: ["#D68910", "#000000", "#006400"] }];
  public doughnutChartType = 'pie';

  constructor(private _serviceData: GetdataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    this.doughnutChartData = [];
    this.doughnutChartData.push(this.data[0].cases.total, this.data[0].deaths.total, this.data[0].cases.recovered);

  }
}
