package com.seniorpreacher.nasaod.paragraphService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ParagraphServiceConfig {
    @Bean
    public ParagraphServiceImpl paragraphService() {
        return new ParagraphServiceImpl();
    }
}
