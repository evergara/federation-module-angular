import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowinfoRoutingModule } from './showinfo-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShowinfoRoutingModule
  ]
})
export class ShowinfoModule { }
