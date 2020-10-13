import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/util/model/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.populateCars();
  }

  populateCars() {
    this.carService.findAll().subscribe(x => {
      this.cars = x;
    });
  }

  gotoAddCar() {
    this.router.navigate(['car-add'])
  }

  delete(id: number) {
    this.carService.delete(id).subscribe(() => {
      alert('Car deleted');
      this.populateCars();
    }, error => {
      alert(error.error.message);
    })
  }

}
