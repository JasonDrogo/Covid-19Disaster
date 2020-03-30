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
  data: IDoughnutData;
  public doughnutChartLabels = ['Confirmed', 'Deaths', 'Recovered'];
  public doughnutChartData = [];
  public doughnutChartColors = [

    { backgroundColor: ["#FF4500", "#FF0000", "#006400"] },
    { borderColor: ["#D68910", "#FF0000", "#006400"] }];
  public doughnutChartType = 'doughnut';

  constructor(private _serviceData: GetdataService) { }
  ngOnInit() {

    this.doughnutChartData.push(this.data.confirmed, this.data.deaths, this.data.recovered);

  }
}
