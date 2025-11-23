package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.TransactionRequest;

@RestController
@RequestMapping("/db/transactions/")
public class TransactionsEndpoints extends BaseEndpoints<TransactionRequest> {
	
	public TransactionsEndpoints() {
		super("TRANSACAO", TransactionRequest.class);
	}
	
}
