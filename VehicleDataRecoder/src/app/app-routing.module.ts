import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login',component: LoginComponent },
  {
    path:'main', 
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {path:'home', component: HomeComponent , canActivate: [AuthGuard]},
      // {path:'counter', component: CounterComponent , canActivate: [AuthGuard]},
      // {path:'statics', component: StaticsComponent , canActivate: [AuthGuard]},
      // {path:'register/driver', component: DriveraddComponent  , canActivate: [AuthGuard]},
      // {path:'register/vehicle', component: VehicleaddComponent  , canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }