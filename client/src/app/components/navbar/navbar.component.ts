import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  send: boolean = false;
  constructor(private _dataService: GetdataService) { }

  ngOnInit() {
    this._dataService.getLiveData().subscribe((data: any) => {
      data.sort((a, b) => { return b.cases.total - a.cases.total })

      this._dataService.saveData(data);
      this.send = true;
    });
  }

}
