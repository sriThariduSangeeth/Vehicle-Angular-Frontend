import { Inject, Optional, TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IVehicle, Vehicle } from 'src/app/model/vehicle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from 'src/app/services/file.service';

@Component({
  selector: 'app-edit-delete-popup',
  templateUrl: './edit-delete-popup.component.html',
  styleUrls: ['./edit-delete-popup.component.css']
})
export class EditDeletePopupComponent implements OnInit {

  dialogConfigs!: MatDialogConfig;

  constructor(@Optional() public dialogRef: MatDialogRef<EditDeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vehicle,
    @Inject(MAT_DIALOG_DATA) public id: string,
    private _snackBar: MatSnackBar,
    private fileUploadService: FileUploadService,) { }

  vid!: number;
  vfname = '';
  vlname = '';
  vmail = '';
  vmake = '';
  vmodel = '';
  vnumber = '';
  pstartdate!: string;

  edit_btn: boolean = true;
  edit_input: boolean = false;
  edit_count: number = 0;

  popup_type!: string;

  ngOnInit(): void {

    this.popup_type = "" + this.dialogConfigs.id;
    if (this.popup_type == "Delete") {
      this.edit_btn = false;
      this.edit_input = true;
    }
    this.edit_count = 0;
    this.setValue(this.data);
  }

  private setValue(data: Vehicle) {
    this.vid = data.id;
    this.vfname = data.firstName;
    this.vlname = data.lastName;
    this.vmail = data.email;
    this.vmake = data.carMake;
    this.vmodel = data.carModel;
    this.vnumber = data.vinNumber;
    this.pstartdate = data.manufacturedDate;
  }

  submit() {
    if (this.popup_type == 'Edit') {
      console.log("Edit");

      const vehicle: IVehicle = {
        id: this.vid,
        firstName: this.vfname,
        lastName: this.vlname,
        email: this.vmail,
        carMake: this.vmake,
        carModel: this.vmodel,
        vinNumber: this.vnumber,
        manufacturedDate: this.pstartdate
      };

      this.fileUploadService.updateVehicle(vehicle).then(res => {
        this.dialogRef.close();
      });
    } else {
      this.fileUploadService.deleteVehicle(this.vid).then(res => {
        this.dialogRef.close();
      });
    };

  }

  onChange() {
    this.edit_count += 1;
    if (this.edit_count >= 1) {
      this.edit_btn = false;
    }
  }

  public close() {

    if (this.edit_count >= 1) {
      const sanckref = this._snackBar.open("You have done changes so Do you want close ?", "Yes");
      sanckref.afterDismissed().subscribe(() => {
        console.log("trigger");
        this.dialogRef.close();
      });
    } else {
      this.dialogRef.close();
    }

  }

}
