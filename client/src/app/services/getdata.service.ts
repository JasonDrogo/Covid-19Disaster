import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountryCase } from '../model/case.modle';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  dataGathered: ICountryCase[];

  constructor(private _http: HttpClient) { }


  public getLiveData(): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Credentials": "true" })
    return this._http.get<any>("http://localhost:3001/users", { headers });
  }
  public saveData(data: ICountryCase[]): boolean {
    this.dataGathered = [...data];
    console.log(data);
    return true;

  }
  public getSavedData(): any {
    return this.dataGathered;
  }

}
