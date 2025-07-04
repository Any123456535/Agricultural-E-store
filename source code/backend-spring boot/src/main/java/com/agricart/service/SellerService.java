package com.agricart.service;

import com.agricart.domain.AccountStatus;
import com.agricart.exception.SellerException;
import com.agricart.model.Seller;
import java.util.List;
import java.util.Optional;

public interface SellerService {
    Seller getSellerProfile(String jwt) throws SellerException;
    Seller createSeller(Seller seller) throws SellerException;
    Seller getSellerById(Long id) throws SellerException;
    Seller getSellerByEmail(String email) throws SellerException;
    List<Seller> getAllSellers(AccountStatus status);
    Seller updateSeller(Long id, Seller seller) throws SellerException;
    void deleteSeller(Long id) throws SellerException;
    Seller verifyEmail(String email,String otp) throws SellerException;

    Seller updateSellerAccountStatus(Long sellerId, AccountStatus status) throws SellerException;
}
