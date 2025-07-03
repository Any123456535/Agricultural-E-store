package com.agricart.repository;

import com.agricart.model.Cart;
import com.agricart.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import com.agricart.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);


}
