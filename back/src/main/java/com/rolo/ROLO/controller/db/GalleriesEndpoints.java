package com.rolo.ROLO.controller.db;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rolo.ROLO.controller.BaseEndpoints;
import com.rolo.ROLO.model.dto.GalleryRequest;

@RestController
@RequestMapping("/db/galleries/")
public class GalleriesEndpoints extends BaseEndpoints<GalleryRequest> {
	
	public GalleriesEndpoints() {
		super("GALERIA", GalleryRequest.class);
	}
	
}
