package com.seniorpreacher.nasaod.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class ParagraphResponse {
    @Getter
    private int id;
    @Getter
    private String content;
}
