import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { FileSocketService } from './services/file-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'VehicleDataRecoder';
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {


  }


}
