import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { CarEditComponent } from './pages/car-edit/car-edit.component';
import { CarListComponent } from './pages/car-list/car-list.component';


const routes: Routes = [

  {
    path: '',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarAddComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: '',
    redirectTo: 'car-list',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
