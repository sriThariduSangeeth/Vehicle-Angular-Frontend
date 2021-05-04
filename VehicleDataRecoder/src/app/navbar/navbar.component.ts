import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { FileSocketService } from '../services/file-socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDarkTheme: boolean = false;
  hidden: boolean = true;
  show: boolean = false;

  @ViewChild("drawer", { static: false }) drawer: any;

  notifList: string[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



  public clickLogin(): void {
    this.drawer.close();
  }

  // navList: {heading: string, icon: string,link: string, pages:{title: string, link: string, icon:string}[]} [] = [
  //     {
  //       heading: 'Dashboard',
  //       icon: 'dashboard',
  //       link: '/dashboard',
  //       pages: []
  //     },
  //     {
  //       heading: 'Main Heading',
  //       icon: 'settings',
  //       link: '/settings',
  //       pages: [
  //         {
  //           title: 'Subpage',
  //           link: '/settings/advanced',
  //           icon: ''
  //         }
  //       ]
  //     }
  //   ];

  constructor(private breakpointObserver: BreakpointObserver,
    private authservice: AuthService,
    private socketClient: FileSocketService,
    private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.socketClient.listenToServer('message').subscribe(data => {
      this.notifList.push(data);
      this._snackBar.open(data, "OK", {
        duration: 5 * 1000,
      });
    });
  }

  public notify() {
    console.log("test run");

    this.socketClient.emitToServer('message', " hello hello test run");
  }

  public closeSidenav(): void {

  }

  public testClick(): void {
  }

}
