package com.seniorpreacher.nasaod.paragraphService;

import com.thedeanda.lorem.LoremIpsum;

class ParagraphServiceImpl implements ParagraphService{
    private LoremIpsum lorem;

    public ParagraphServiceImpl() {
        this.lorem = LoremIpsum.getInstance();
    }

    @Override
    public String getParagraph() {
        return lorem.getParagraphs(2, 4);
    }
}
