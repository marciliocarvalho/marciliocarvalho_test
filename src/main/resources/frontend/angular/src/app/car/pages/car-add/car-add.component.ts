import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/util/model/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  car: Car = {
    licensePlate: '',
    color: '',
    model: '',
    year: null
  }

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  insert() {
    return this.carService.insert(this.car);
  }

  onSubmit() {
    this.insert().subscribe(car => {
      this.router.navigate(['car']);
    }, error => {
      alert(error.error.message);
    });
  }
}
