package com.marciliocarvalho.marciliocarvalho.repository;

import com.marciliocarvalho.marciliocarvalho.domain.Car;
import com.marciliocarvalho.marciliocarvalho.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
    List<Car> findByUser_id(Integer userId);
    Car findByLicensePlate(String licensePlate);
    Car findByIdAndUser_id(Integer userId, Integer carId);
}
