import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { FormsModule } from '@angular/forms';
import { CarEditComponent } from './pages/car-edit/car-edit.component';


@NgModule({
  declarations: [CarListComponent, CarAddComponent, CarEditComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ]
})
export class CarModule { }
