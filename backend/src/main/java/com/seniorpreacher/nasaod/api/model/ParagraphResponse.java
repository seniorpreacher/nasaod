package com.seniorpreacher.nasaod.api.model;

public class ParagraphResponse {
    private int id;
    private String content;

    public int getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    ParagraphResponse(int id, String content) {
        this.id = id;
        this.content = content;
    }
}
