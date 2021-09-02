import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ResetpageComponent } from './pages/resetpage/resetpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
 
@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginpageComponent
      },
      {
        path: 'login',
        component: LoginpageComponent
      },
      {
        path: 'reset',
        component: ResetpageComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]),
  ],
  providers: [
  ],
  declarations: [LoginpageComponent, ResetpageComponent, DashboardComponent],
  exports:[
    LoginpageComponent,
    ResetpageComponent,
    DashboardComponent
  ]
})
export class HomeModule { 
 
}