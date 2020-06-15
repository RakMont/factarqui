import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddclientComponent} from './components/facturador/addclient/addclient.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'adclients', component:AddclientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
