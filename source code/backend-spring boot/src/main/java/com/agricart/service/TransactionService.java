package com.agricart.service;

import com.agricart.model.Order;
import com.agricart.model.Seller;
import com.agricart.model.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySeller(Seller seller);
    List<Transaction>getAllTransactions();
}
