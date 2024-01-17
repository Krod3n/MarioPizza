/**
 * 
 */
package com.idformation.ccp3.security.mapper;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.idformation.ccp3.security.dto.UserDTO;
import com.idformation.ccp3.security.models.User;

/**
 * @author Stagiaire
 *
 */
public class UserMapper {
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	

	public static UserDTO toDto(User use) {
		UserDTO dto = new UserDTO();

		dto.setId(use.getId());
		dto.setFirstname(use.getFirstname());
		dto.setLastname(use.getLastname());
		dto.setPassword(use.getPassword());
		dto.setPhonenumber(use.getPhonenumber());
		dto.setAddress(use.getAddress());

		return dto;
	}

	public static User toEntity(UserDTO dto) {
		User use = new User();

		use.setId(dto.getId());
		use.setFirstname(dto.getFirstname());
		use.setLastname(dto.getLastname());
		use.setPassword(dto.getPassword());
		use.setPhonenumber(dto.getPhonenumber());
		use.setAddress(dto.getAddress());

		return use;
	}

}
