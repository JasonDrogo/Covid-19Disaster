import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountryCase } from '../model/case.modle';
import { IDoughnutData } from '../model/doughnut.model';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  AllCountriesData: ICountryCase[] = [];
  length: number;
  constructor(private _http: HttpClient) { }


  public getLiveData(): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Credentials": "true" })
    return this._http.get<any>("http://localhost:3001/users", { headers });
  }
  public saveData(data: ICountryCase[]) {
    this.length = data.length;

    this.AllCountriesData = [...data];
    // this.AllCountriesData.sort((a, b) => { return b.cases.total - a.cases.total });


  }
  public getDoughnutData() {
    return this.AllCountriesData[0];
  }

  public getSavedData(): ICountryCase[] {

    return this.AllCountriesData;

  }

}
