/**
 * 
 */
package com.idformation.ccp3.mariopizza.mapper;

import java.util.ArrayList;
import java.util.List;

import com.idformation.ccp3.mariopizza.dto.PizzaDTO;
import com.idformation.ccp3.mariopizza.models.Pizza;

/**
 * @author Stagiaire
 *
 */
public class PizzaMapper {

	/**
	 * 
	 * @param piz, Pizza entity
	 * @return dto, Pizza to PizzaDTO
	 */
	public static PizzaDTO toDto(Pizza piz) {
		PizzaDTO dto = new PizzaDTO();

		dto.setId(piz.getId());
		dto.setName(piz.getName());
		dto.setImage(piz.getImage());
		dto.setDescription(piz.getDescription());
		dto.setPrice(piz.getPrice());

		return dto;
	}

	/**
	 * 
	 * @param dto, PizzaDTO
	 * @return piz, PizzaDTO to Pizza entity
	 */
	public static Pizza toEntity(PizzaDTO dto) {
		Pizza piz = new Pizza();

		piz.setId(dto.getId());
		piz.setName(dto.getName());
		piz.setImage(dto.getImage());
		piz.setDescription(dto.getDescription());
		piz.setPrice(dto.getPrice());

		return piz;
	}

	/**
	 * 
	 * @param pizs, List of Pizza
	 * @return dtos, List of Pizza Return to List of PizzaDTO
	 */
	public static List<PizzaDTO> ListToListDto(List<Pizza> pizs) {
		List<PizzaDTO> dtos = null;

		if (pizs != null && !pizs.isEmpty()) {
			dtos = new ArrayList<>();

			for (Pizza p : pizs) {
				dtos.add(toDto(p));
			}
		}

		return dtos;
	}

}
