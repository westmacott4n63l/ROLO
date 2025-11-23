package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.ProductsImagesRequest;

@RestController
@RequestMapping("/db/products-images/")
public class ProductsImagesEndpoints extends BaseEndpoints<ProductsImagesRequest>{
	
	public ProductsImagesEndpoints() {
		super("IMAGENS_PRODUTO", ProductsImagesRequest.class);
	}

}
