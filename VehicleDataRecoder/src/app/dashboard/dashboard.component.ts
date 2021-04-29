import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { FileUploadService } from '../services/file.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public vehicles: Vehicle[] = [];
  constructor(private fileUploadService: FileUploadService) { }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email',
    'carMake', 'carModel', 'vinNumber', 'manufacturedDate', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Vehicle>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  resultsLength = 0;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllVehicleData();
  }


  getAllVehicleData() {
    this.fileUploadService.getAllVehicle().then(
      res => {
        this.vehicles = res;
        this.dataSource.data = res;
      }
    ).catch(
      error => {
        console.log(error);

      }
    );
  }

  editVehicle(res: Vehicle) {
    console.log(res);
  }

  deleteVehicle(res: Vehicle) {
    console.log(res);

  }

}


