import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ResetformComponent } from './components/resetform/resetform.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { ContentComponent } from './components/content/content.component';
import { LoaderComponent } from './components/loader/loader.component';
 
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ 
    HeaderComponent, 
    LoginformComponent, 
    ResetformComponent, 
    UserlistComponent, 
    UsercardComponent, 
    ContentComponent, LoaderComponent ],
  exports: [
    HeaderComponent,
    LoginformComponent,
    ResetformComponent,
    UserlistComponent, 
    UsercardComponent,
    ContentComponent
  ]
})
export class SharedModule {}