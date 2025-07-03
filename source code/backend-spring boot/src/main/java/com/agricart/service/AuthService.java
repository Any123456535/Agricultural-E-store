package com.agricart.service;

import com.agricart.exception.SellerException;
import com.agricart.exception.UserException;
import com.agricart.request.LoginRequest;
import com.agricart.request.SignupRequest;
import com.agricart.response.AuthResponse;
import jakarta.mail.MessagingException;

public interface AuthService {

    void sentLoginOtp(String email) throws UserException, MessagingException;
    String createUser(SignupRequest req) throws SellerException;
    AuthResponse signin(LoginRequest req) throws SellerException;

}
