import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadService } from '../services/file.service';
import * as moment from 'moment';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  num: number = 1;
  message: string | any;
  imageName: any;
  fileName!: string;
  file!: File;
  files: File[] = [];
  url: string | any = "../../assets/upload.svg";

  vfname = '';
  vlname = '';
  vmail = '';
  vmake = '';
  vmodel = '';
  vnumber = '';
  pstartdate!: string;




  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private fileUploadService: FileUploadService,
    private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit(): void {


    // const res = this.client.mutate({
    //   mutation: SAVE_NEW_VEHICLE,
    //   variables: {
    //     firstName: "firstName",
    //     lastName: "lastName",
    //     email: "email",
    //     carMake: "carMake",
    //     carModel: "carModel",
    //     vinNumber: "vinNumber",
    //     manufacturedDate: "manufacturedDate"
    //   }
    // }).then(data => {
    //   console.log(data.data);

    // }).catch(error => {
    //   console.log(error);

    // });
  }



  submit() {
    const mStartDate = new Date(this.pstartdate);
    const start = moment(mStartDate).format("YYYY/MM/DD");

  }

  public logout() { }

}
