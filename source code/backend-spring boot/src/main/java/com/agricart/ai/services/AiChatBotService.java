package com.agricart.ai.services;

import com.agricart.exception.ProductException;
import com.agricart.response.ApiResponse;

public interface AiChatBotService {

    ApiResponse aiChatBot(String prompt,Long productId,Long userId) throws ProductException;
}
