package com.seniorpreacher.nasaod.paragraphService;

import org.springframework.stereotype.Service;

@Service
public interface ParagraphService {
    String getTextChunk(int wordCount, int limit, int offset);
}
