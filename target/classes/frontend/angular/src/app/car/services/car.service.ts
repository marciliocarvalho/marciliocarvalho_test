import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/util/endpoints';
import { Car } from 'src/app/util/model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient
  ) { }

  findAll() {
    return this.http.get<Car[]>(Endpoints.CARS);
  }

  insert(car: Car) {
    return this.http.post<Car>(Endpoints.CARS, car);
  }

  update(car: Car, id: number) {
    return this.http.put<Car>(Endpoints.CARS + id, car);
  }

  findById(id:number) {
    return this.http.get<Car>(Endpoints.CARS + id);
  }

  delete(id: number) {
    return this.http.delete<void>(Endpoints.CARS + id);
  }
}
