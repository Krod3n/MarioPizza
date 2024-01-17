/**
 * 
 */
package com.idformation.ccp3.mariopizza.dto;

import java.util.Date;
import java.util.List;

import com.idformation.ccp3.security.models.User;

/**
 * @author Stagiaire
 *
 */
public class OrderDTO {

	private Long id;
	private Date date;
	private Double totalAmount;
	private User user;

	private List<OrderLineDTO> lines;

	public OrderDTO() {
		super();
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}

	/**
	 * @return the totalAmount
	 */
	public Double getTotalAmount() {
		return totalAmount;
	}

	/**
	 * @param totalAmount the totalAmount to set
	 */
	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	/**
	 * @return the lines
	 */
	public List<OrderLineDTO> getLines() {
		return lines;
	}

	/**
	 * @param lines the lines to set
	 */
	public void setLines(List<OrderLineDTO> lines) {
		this.lines = lines;
	}

}
