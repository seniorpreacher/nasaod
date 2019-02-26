package com.seniorpreacher.nasaod;

import com.seniorpreacher.nasaod.paragraphService.ParagraphService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ParagraphServiceTests {
    @Autowired
    ParagraphService paragraphService;

    @Test
    public void testTextChunkWithOneWord(){
        String paragraph = this.paragraphService.getTextChunk(1, 0, 0);
        assert paragraph.indexOf(' ') == -1;
    }

    @Test
    public void testTextChunkWithThreeWords(){
        String paragraph = this.paragraphService.getTextChunk(3, 0, 0);

        long spaceCount = paragraph.chars().filter(ch -> ch == ' ').count();
        assertEquals(2, spaceCount);
    }

}
