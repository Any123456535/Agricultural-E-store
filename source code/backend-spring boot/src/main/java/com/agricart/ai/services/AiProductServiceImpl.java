package com.agricart.ai.services;


import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AiProductServiceImpl implements AiProductService {

    @Value("${gemini.api.key}")
    private static String API_KEY;


    @Override
    public String simpleChat(String prompt) {
        return "";
    }
}
