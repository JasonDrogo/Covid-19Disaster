import { Component, OnInit, Input } from '@angular/core';
import { ICountryCase } from '../../model/case.modle';
import { GetdataService } from '../../services/getdata.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-tablerep',
  templateUrl: './tablerep.component.html',
  styleUrls: ['./tablerep.component.css']
})
export class TablerepComponent implements OnInit {
  data: any
  Filterdata: any;
  countryPopulation: number[] = [];
  _enteredtext: string;
  constructor(private _serviceData: GetdataService) { }
  ngOnInit() {
    this.data = this._serviceData.getSavedData();
    this.Filterdata = this.data;

  }

  set enteredtext(newValue: string) {
    this._enteredtext = newValue;
    console.log(newValue);
    this.Filterdata = this._enteredtext ? this.filterdata(this._enteredtext) : this.data;;
  }
  filterdata(filtertext: string) {
    // console.log(enteredtext);
    return this.data.filter((datas: any) => (datas.name.toLowerCase()).indexOf(filtertext.toLowerCase()) !== -1)
  }
}
