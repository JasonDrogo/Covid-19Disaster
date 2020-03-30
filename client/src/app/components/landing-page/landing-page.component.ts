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
  dataFormat: ICountryCase = { name: 'pa', cases: { new: '', active: 0, critical: 0, recovered: 0, total: 0 }, deaths: { new: '', total: 0 } };
  AllCountriesData: ICountryCase[] = [];
  barChartValue: ICountryCase[] = [];
  TotalData: IDoughnutData = { confirmed: 0, recovered: 0, deaths: 0 };
  activateCard: boolean = false;
  ngOnInit() {
    this._dataService.getLiveData().subscribe((data: any) => {
      data.map((countryData: any) => {
        if (countryData.country == 'All') {
          this.TotalData.confirmed = countryData.cases.total;
          this.TotalData.deaths = countryData.deaths.total;

          this.TotalData.recovered = countryData.cases.recovered;
          this.activateCard = true;
        }
        else {
          this.dataFormat.name = countryData.country;

          this.dataFormat.cases.new = countryData.cases.new;
          this.dataFormat.cases.active = countryData.cases.active;
          this.dataFormat.cases.critical = countryData.cases.critical;
          this.dataFormat.cases.recovered = countryData.cases.recovered;
          this.dataFormat.cases.total = countryData.cases.total;

          this.dataFormat.deaths.new = countryData.deaths.new;
          this.dataFormat.deaths.total = countryData.deaths.total;
          this.AllCountriesData.push(JSON.parse(JSON.stringify(this.dataFormat)));
        }
      });
      this.AllCountriesData.sort((a, b) => {
        return b.cases.total - a.cases.total;
      })
      // if (this._dataService.saveData(this.AllCountriesData)) {
      // this.AllCountriesData.map((data: any) => {
      //   this._dataService.getPopulation(data.name).subscribe((data: any) => {
      //     const div = data[0].population / 1000000;
      //     this.dataFormat.mortalityRate = this.dataFormat.deaths / div;
      //     console.log(this.dataFormat.mortalityRate);
      //   })
      // })
      // };
      if (this._dataService.saveData(this.AllCountriesData)) {

        this.barChartValue = [...this.AllCountriesData.splice(0, 5)];
        this.setFlag();
      }
    });
  }

  setFlag() {
    this.send = true;
  }

}
