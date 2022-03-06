import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'fm', loadChildren: ()=> import ('./showinfo/showinfo-routing.module').then((m) => m.ShowinfoRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
