import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddclientComponent} from './components/facturador/addclient/addclient.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import { ShowfactComponent } from './components/facturador/showfact/showfact.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'adclients', component:AddclientComponent},
  {path: 'show/:factura', component: ShowfactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
