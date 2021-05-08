import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { FileUploadService } from '../services/file.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDeletePopupComponent } from '../shared/popup/edit-delete-popup/edit-delete-popup.component';
import { take } from 'rxjs/operators';
import { threadId } from 'node:worker_threads';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public vehicles: Vehicle[] = [];
  public totalVehicleCount: number = 0;
  public first: number = 10;
  public offset: number = 0;
  public resultsLength: number = 0;

  constructor(private fileUploadService: FileUploadService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) {
  }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email',
    'carMake', 'carModel', 'vinNumber', 'manufacturedDate', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Vehicle>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllVehicleData(this.first);
    this.dataSource.paginator = this.paginator;
  }


  getAllVehicleData(first?: number, offset?: number, last?: number) {
    this.fileUploadService.getAllVehicle(first, offset, last).then(
      res => {
        this.totalVehicleCount = res.totalCount;
        this.dataSource.data = res.vehicles;
        console.log(this.totalVehicleCount);
        console.log(this.vehicles);
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
        this.getAllVehicleData(this.first);
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
        this.getAllVehicleData(this.first);
        this.changeDetectorRefs.detectChanges();
      });

  }

  handlePageEvent(event: PageEvent) {
    console.log(event);
    this.offset = (event.pageIndex * event.pageSize);
    // this.totalVehicleCount = 10000;
    this.getAllVehicleData(event.pageSize, this.offset);
  }

}


