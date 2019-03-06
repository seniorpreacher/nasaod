package com.seniorpreacher.nasaod;

import com.seniorpreacher.nasaod.paragraphService.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/")
    public List<ParagraphResponse> paragraphRoute(@RequestParam(name = "offset") int offset, @RequestParam(name = "limit") int limit) {
        List<ParagraphResponse> responseParagraphs = new ArrayList<>();
        for (int i = offset; i < offset + limit; i++) {
            responseParagraphs.add(new ParagraphResponse(i, this.paragraphService.getParagraph()));
        }
        return responseParagraphs;
    }
}
