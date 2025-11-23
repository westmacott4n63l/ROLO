package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.AddressRequest;

@RestController
@RequestMapping("/db/addresses/")
public class AddressesEndpoints extends BaseEndpoints<AddressRequest> {

	public AddressesEndpoints() {
		super("ENDERECO", AddressRequest.class);
	}

}
