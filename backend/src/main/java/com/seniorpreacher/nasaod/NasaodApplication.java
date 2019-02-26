package com.seniorpreacher.nasaod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class NasaodApplication {

    public static void main(String[] args) {
        SpringApplication.run(NasaodApplication.class, args);
    }

    @RequestMapping("/")
    public String home() {
        return "Hello World";
    }
}
