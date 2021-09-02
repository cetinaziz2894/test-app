import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ResetpageComponent } from './pages/resetpage/resetpage.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent},
  { path: 'reset', component: ResetpageComponent},
  { path: 'dashboard', component: DashboardComponent}
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}