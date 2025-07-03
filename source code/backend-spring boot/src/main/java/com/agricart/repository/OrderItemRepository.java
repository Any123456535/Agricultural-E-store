package com.agricart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agricart.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
