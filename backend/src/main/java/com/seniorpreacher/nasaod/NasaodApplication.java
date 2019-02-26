package com.seniorpreacher.nasaod;

import com.seniorpreacher.nasaod.paragraphService.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class NasaodApplication {
    @Autowired
    ParagraphService paragraphService;

    public static void main(String[] args) {
        SpringApplication.run(NasaodApplication.class, args);
    }

    @RequestMapping("/")
    public List paragraphRoute() {
        List responseParagraphs = new ArrayList<ParagraphResponse>();
        for (int i = 0; i < 20; i++) {
            responseParagraphs.add(new ParagraphResponse(i, this.paragraphService.getParagraph()));
        }
        return responseParagraphs;
    }
}
