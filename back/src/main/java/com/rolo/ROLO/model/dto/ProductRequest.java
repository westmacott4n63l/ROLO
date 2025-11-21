package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class ProductRequest {
	@Getter @Setter public int id;
	@Getter @Setter public String nome;
	@Getter @Setter public String descricao;
	@Getter @Setter public int categoria_id;
}
