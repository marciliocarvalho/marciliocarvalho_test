import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './pages/car-list/car-list.component';


@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
