import { Component, ElementRef, OnInit } from '@angular/core';
import { Data, Result } from '../interface/movie-content.i';
import { DataCallService } from '../service/data-call.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private _dataService: DataCallService, private _elRef: ElementRef) { }
  header: string;
  returnData: Result[];
  ngOnInit(): void {
    this._dataService.getMovieDescription('')
        .subscribe(item => {
          this.header = item.attributionText;
          this.returnData = item.data && item.data.results;
        })
  }

  getFilteredData(searchParam){
    this._dataService.getMovieDescription(searchParam.value)
        .subscribe(item => {
          this.header = item.attributionText;
          this.returnData = item.data && item.data.results;
        })
  }

}
