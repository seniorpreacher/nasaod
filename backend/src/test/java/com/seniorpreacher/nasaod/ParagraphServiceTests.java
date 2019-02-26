package com.seniorpreacher.nasaod;

import com.seniorpreacher.nasaod.paragraphService.ParagraphService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ParagraphServiceTests {
    @Autowired
    ParagraphService paragraphService;

    @Test
    public void testTextChunkWithAParagraph(){
        String paragraph = this.paragraphService.getParagraph();
        assert paragraph.length() > 20;
    }
}
