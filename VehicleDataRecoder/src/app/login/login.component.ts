import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId: string = '';
  passwordId: string = '';
  error:string = '';
  returnUrl: string = '';
  loading: boolean = false;


  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public submitLogin(): void {
    this.router.navigate(['/main']);
  }

}
