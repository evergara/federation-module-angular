import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { ShowinfoComponent } from './showinfo.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, pathMatch: 'full'},
  {
    path:'',
    component:ShowinfoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowinfoRoutingModule { }
