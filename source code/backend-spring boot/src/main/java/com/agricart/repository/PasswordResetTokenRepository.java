package com.agricart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agricart.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
	PasswordResetToken findByToken(String token);
}
