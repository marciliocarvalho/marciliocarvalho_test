package com.marciliocarvalho.marciliocarvalho.service;

import com.marciliocarvalho.marciliocarvalho.domain.Car;
import com.marciliocarvalho.marciliocarvalho.domain.User;
import com.marciliocarvalho.marciliocarvalho.repository.CarRepository;
import com.marciliocarvalho.marciliocarvalho.repository.UserRepository;
import com.marciliocarvalho.marciliocarvalho.security.JWTUtil;
import com.marciliocarvalho.marciliocarvalho.service.exception.UniqueFieldException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JWTUtil jwtUtil;
    @Autowired
    HttpServletRequest req;

    public List<Car> findByUser() {
        Integer userId = getUserId();

        return carRepository.findByUser_id(userId);
    }

    public Car insert(Car obj) {
        if (carRepository.findByLicensePlate(obj.getLicensePlate()) != null) {
            throw new UniqueFieldException("License plate already exists");
        }
        Integer userId = getUserId();

        User user = userRepository.findById(userId).get();

        user.getCars().add(obj);
        obj.setUser(user);

        userRepository.save(user);

        carRepository.save(obj);

        return carRepository.save(obj);
    }

    public void delete(Integer carId) {
        User user = userRepository.findById(getUserId()).get();
        Car car = carRepository.findById(carId).get();

        if (user.getCars().contains(car)) {
            user.getCars().remove(car);
            carRepository.delete(car);
            userRepository.save(user);
        }
    }

    public Car findById(Integer id) {
        Car car = carRepository.findByIdAndUser_id(id, getUserId());
        return car;

    }

    public Car update(Car newObj) {
        Car carByLicensePlate = carRepository.findByLicensePlate(newObj.getLicensePlate());
        if (carByLicensePlate != null
                && !newObj.getId().equals(carByLicensePlate.getId())) {
            throw new UniqueFieldException("License plate already exists");
        }
        User user = userRepository.findById(getUserId()).get();
        newObj.setUser(user);
        return carRepository.save(newObj);
    }

    private Integer getUserId() {
        String token = jwtUtil.resolveToken(req);
        return Integer.parseInt(jwtUtil.getClaim(token, "id"));
    }
}
