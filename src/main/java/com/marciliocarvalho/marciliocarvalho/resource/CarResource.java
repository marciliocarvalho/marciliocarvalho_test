package com.marciliocarvalho.marciliocarvalho.resource;

import com.marciliocarvalho.marciliocarvalho.domain.Car;
import com.marciliocarvalho.marciliocarvalho.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/")
public class CarResource {
    @Autowired
    private CarService carService;

    @GetMapping(value = "cars")
    public ResponseEntity<List<Car>> findByUser() {
        List<Car> list = carService.findByUser();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping(value = "cars")
    public ResponseEntity<Void> insert(@RequestBody Car obj) {
        obj = carService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(value = "cars/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        carService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value = "cars/{id}")
    public ResponseEntity<Car> findById(@PathVariable Integer id) {
        Car obj = carService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PutMapping(value = "cars/{id}")
    public ResponseEntity<Void> update(@RequestBody Car obj, @PathVariable Integer id) {
        obj.setId(id);
        obj = carService.update(obj);
        return ResponseEntity.noContent().build();
    }
}
