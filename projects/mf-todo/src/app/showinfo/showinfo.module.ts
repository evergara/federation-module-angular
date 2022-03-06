import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowinfoRoutingModule } from './showinfo-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ShowinfoComponent } from './showinfo.component';


@NgModule({
  declarations: [
    HomeComponent,
    ShowinfoComponent,
  ],
  imports: [
    CommonModule,
    ShowinfoRoutingModule
  ]
})
export class ShowinfoModule { }
