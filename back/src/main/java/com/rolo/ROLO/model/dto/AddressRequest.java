package com.rolo.ROLO.model.dto;

import lombok.Getter;
import lombok.Setter;

public class AddressRequest {
	@Getter @Setter public int id;
	@Getter @Setter public String cep;
	@Getter @Setter public String rua;
	@Getter @Setter public String numero;
	@Getter @Setter public String bairro;
	@Getter @Setter public String cidade;
	@Getter @Setter public String estado;
	@Getter @Setter public String pais;
	@Getter @Setter public String complemento;
}
