package com.agricart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agricart.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {



}
