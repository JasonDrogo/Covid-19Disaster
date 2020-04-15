import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { ICountryCase } from 'src/app/model/case.modle';
import * as CanvasJS from 'canvasjs';
import { IDoughnutData } from 'src/app/model/doughnut.model';
import { TouchSequence } from 'selenium-webdriver';
import { IBardata } from 'src/app/model/barchart.model';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private _dataService: GetdataService) { }
  send: boolean = false;
  doughnut: any;
  doughtnutFilter: any;
  AllCountriesData: ICountryCase[] = [];
  barChartValue: any[] = [];
  data: any[];
  name: string = 'World';
  ngOnInit() {

    this.data = [...this._dataService.getSavedData()]

    this.barChartValue = [...this.data.slice(3, 8)];

    this.doughnut = (this._dataService.getDoughnutData());
    console.log(this.doughnut);
    this.setFlag();

  }

  setFlag() {
    this.send = true;
  }
  receiveMessage(a: string) {
    if (a == 'All')
      this.name = 'World';

    else this.name = a;
    if (a == 'United States of America') { a = 'USA'; this.name = 'USA' }
    else if (a == 'Sri Lanka') {
      a = 'Sri-Lanka'
    }
    this.doughnut = [];
    this.doughnut = this.data.find((datas: any) =>
      a == datas.country);
  }

}
