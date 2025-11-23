package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.UserAddressRequest;

@RestController
@RequestMapping("/db/users-addresses/")
public class UsersAddressesEndpoints extends BaseEndpoints<UserAddressRequest>{

	public UsersAddressesEndpoints() {
		super("ENDERECO_DO_USUARIO", UserAddressRequest.class);
	}

}
