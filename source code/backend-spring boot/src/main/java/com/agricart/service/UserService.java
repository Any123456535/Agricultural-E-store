package com.agricart.service;

import java.util.List;

import com.agricart.exception.UserException;
import com.agricart.model.User;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;


}
