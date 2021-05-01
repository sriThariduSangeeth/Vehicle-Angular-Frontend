import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { FileUploadService } from '../services/file.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VehicleAddComponent } from '../vehicle-add/vehicle-add.component';
import { EditDeletePopupComponent } from '../shared/popup/edit-delete-popup/edit-delete-popup.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public vehicles: Vehicle[] = [];
  constructor(private fileUploadService: FileUploadService, public dialog: MatDialog) {
  }
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
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.id = "Edit";

    const dialogRef = this.dialog.open(EditDeletePopupComponent, {
      width: '70vw',
      height: '70vh',
      data: res,
      disableClose: true,
      id: "Edit"
    });

    dialogRef.componentInstance.dialogConfigs = dialogConfigs;

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        this.ngOnInit();
      });
  }

  deleteVehicle(res: Vehicle) {
    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.id = "Delete";
    const dialogRef = this.dialog.open(EditDeletePopupComponent, {
      width: '70vw',
      height: '70vh',
      data: res,
      disableClose: true,
      id: "Delete"
    });

    dialogRef.componentInstance.dialogConfigs = dialogConfigs;

    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        console.log("call");

        this.ngOnInit();
      });

  }

}


