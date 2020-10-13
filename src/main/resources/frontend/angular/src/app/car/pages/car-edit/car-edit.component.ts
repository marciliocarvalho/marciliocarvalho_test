import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/util/model/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: Car;
  id: number;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.findById().subscribe(car => {
      this.car = car;
    }, error => {
      console.log(error);
    })
  }

  update() {
    return this.carService.update(this.car, this.id);
  }

  findById() {
    return this.carService.findById(this.id);
  }

  onSubmit() {
    this.update().subscribe(car => {
      alert('Car updated!');
      this.location.back();
    }, error => {
      alert(error.error.message);
    })
  }

}
