import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDarkTheme:boolean = false;
  hidden:boolean = true;
  show:boolean = false;

  @ViewChild("drawer",{ static: false }) drawer: any;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  


  public clickLogin():void{
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

  constructor(private breakpointObserver: BreakpointObserver , private authservice: AuthService) {}

 

  public closeSidenav():void{

  }

  public testClick():void{
  }

}
