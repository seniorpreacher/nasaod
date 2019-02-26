package com.seniorpreacher.nasaod.paragraphService;

import com.thedeanda.lorem.LoremIpsum;

class ParagraphServiceImpl implements ParagraphService{
    private LoremIpsum lorem;

    public ParagraphServiceImpl() {
        this.lorem = LoremIpsum.getInstance();
    }

    @Override
    public String getTextChunk(int wordCount, int limit, int offset) {
        return lorem.getWords(wordCount, wordCount);
    }
}
