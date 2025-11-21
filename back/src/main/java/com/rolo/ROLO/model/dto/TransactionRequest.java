package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class TransactionRequest {
	@Getter @Setter public int id;
	@Getter @Setter public String data;
	@Getter @Setter public String status;
	@Getter @Setter public int vendedor;
	@Getter @Setter public int comprador;
	@Getter @Setter public int produto_id;
}
