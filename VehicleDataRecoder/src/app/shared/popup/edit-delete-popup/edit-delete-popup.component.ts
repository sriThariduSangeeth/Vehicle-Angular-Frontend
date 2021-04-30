import { Inject, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehicle } from 'src/app/model/vehicle';

@Component({
  selector: 'app-edit-delete-popup',
  templateUrl: './edit-delete-popup.component.html',
  styleUrls: ['./edit-delete-popup.component.css']
})
export class EditDeletePopupComponent implements OnInit {

  constructor(@Optional() public dialogRef: MatDialogRef<EditDeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vehicle) { }

  vfname = '';
  vlname = '';
  vmail = '';
  vmake = '';
  vmodel = '';
  vnumber = '';
  pstartdate!: string;

  ngOnInit(): void {
    console.log(this.data);

  }

  submit() {

  }

  public logout() { }

  public close() {

  }

}
