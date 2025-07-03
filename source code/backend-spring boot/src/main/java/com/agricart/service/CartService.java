package com.agricart.service;

import com.agricart.exception.ProductException;
import com.agricart.model.Cart;
import com.agricart.model.CartItem;
import com.agricart.model.Product;
import com.agricart.model.User;

public interface CartService {
	
	public CartItem addCartItem(User user,
								Product product,
								String size,
								int quantity) throws ProductException;
	
	public Cart findUserCart(User user);

}
