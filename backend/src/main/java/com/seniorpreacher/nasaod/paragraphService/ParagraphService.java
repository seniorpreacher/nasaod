package com.seniorpreacher.nasaod.paragraphService;

import com.thedeanda.lorem.LoremIpsum;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Component
public class ParagraphService {

    private LoremIpsum lorem;
    private Random random = new Random();

    public ParagraphService() {
        this.lorem = LoremIpsum.getInstance();
    }


    public String getParagraph() {
        return htmlify(lorem.getParagraphs(2, 4));
    }

    private String htmlify(String input) {
        List<String> inputAsList = new ArrayList<>(Arrays.asList(input.split(" ")));
        List<String> output = new ArrayList<>();
        for (String word : inputAsList) {
            // 10% chance to add a tag
            if (this.random.nextInt(10) == 0 && !word.equals(" ")) {
                String tag = getRandomTag();
                word = "<" + tag + ">" + word + "</" + tag + ">";
            }
            output.add(word);
        }
        return String.join(" ", output);
    }

    private String getRandomTag() {
        String[] availableTags = {"strong", "em", "u", "code"};
        return availableTags[this.random.nextInt(availableTags.length)];
    }
}
