package com.seniorpreacher.nasaod;

import com.seniorpreacher.nasaod.paragraphService.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class NasaodApplication {
    @Autowired
    ParagraphService paragraphService;

    public static void main(String[] args) {
        SpringApplication.run(NasaodApplication.class, args);
    }

    @RequestMapping("/")
    public String paragraphRoute() {
        return this.paragraphService.getTextChunk(20, 0, 0);
    }
}
