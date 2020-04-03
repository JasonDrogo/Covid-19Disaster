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
  doughnut: ICountryCase;
  AllCountriesData: ICountryCase[] = [];
  barChartValue: any[] = [];


  ngOnInit() {



    this.barChartValue = [... this._dataService.getSavedData().slice(1, 5)];
    this.doughnut = this._dataService.getDoughnutData();
    this.setFlag();

  }

  setFlag() {
    this.send = true;
  }

}
