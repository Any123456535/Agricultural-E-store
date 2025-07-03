package com.agricart.response;

import com.agricart.dto.OrderHistory;
import com.agricart.model.Cart;
import com.agricart.model.Product;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FunctionResponse {
    private String functionName;
    private Cart userCart;
    private OrderHistory orderHistory;
    private Product product;
}
