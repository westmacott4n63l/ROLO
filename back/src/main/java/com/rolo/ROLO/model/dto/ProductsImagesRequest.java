package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class ProductsImagesRequest {
	@Getter @Setter public int id;
	@Getter @Setter public String link_imagem;
	@Getter @Setter public int produto_id;
}
