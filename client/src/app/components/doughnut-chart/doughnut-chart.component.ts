import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GetdataService } from '../../services/getdata.service';
import { IDoughnutData } from '../../model/doughnut.model';
import { ICountryCase } from '../../model/case.modle';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  @Input()
  data: ICountryCase;
  public doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
  public doughnutChartData = [];
  public doughnutChartColors = [

    { backgroundColor: ["#566D7E", "#000000", "#6C7D55"] },
    { borderColor: ["#D68910", "#000000", "#006400"] }];
  public doughnutChartType = 'pie';

  constructor(private _serviceData: GetdataService) { }
  ngOnInit() {

    this.doughnutChartData.push(this.data.cases.total, this.data.deaths.total, this.data.cases.recovered);

  }
}
