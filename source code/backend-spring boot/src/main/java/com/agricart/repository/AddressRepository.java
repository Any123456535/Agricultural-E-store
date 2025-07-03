package com.agricart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agricart.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
