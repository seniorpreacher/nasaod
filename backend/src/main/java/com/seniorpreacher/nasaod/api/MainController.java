package com.seniorpreacher.nasaod.api;

import com.seniorpreacher.nasaod.api.model.ParagraphResponse;
import com.seniorpreacher.nasaod.paragraphService.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {

    @Autowired
    ParagraphService paragraphService;

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
