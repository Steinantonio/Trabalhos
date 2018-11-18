package com.demo.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.demo.apirest.models.entity.Customer;

public interface CustomerDAO extends CrudRepository<Customer, Integer> {

}
