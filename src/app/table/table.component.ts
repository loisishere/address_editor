import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	displayedColumns: string[] = ['streetNumber', 'streetName', 'city', 'state', 'zip'];
	public dataSource = new MatTableDataSource<any>(this.service.addressList.getValue());
	public currentIndex = null;
	public columnSelected = '';
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	constructor(private service:AppService){ }


  ngOnInit(){
	this.dataSource.sort = this.sort;
	this.dataSource.paginator = this.paginator;

  }

  trackByFunction(index, item){
	  return index;
  }

  saveData(input_value,index,type){
	  let {value} = this.service.addressList;
	  value[index][type] = input_value;
	  this.service.postAddressesBeingSaved();
	  this.service.addressList.next(value);
  }

}
