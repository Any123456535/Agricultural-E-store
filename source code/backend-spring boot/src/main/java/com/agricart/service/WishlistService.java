package com.agricart.service;


import com.agricart.exception.WishlistNotFoundException;
import com.agricart.model.Product;
import com.agricart.model.User;
import com.agricart.model.Wishlist;

import java.util.Optional;

public interface WishlistService {

    Wishlist createWishlist(User user);

    Wishlist getWishlistByUserId(User user);

    Wishlist addProductToWishlist(User user, Product product) throws WishlistNotFoundException;

}

