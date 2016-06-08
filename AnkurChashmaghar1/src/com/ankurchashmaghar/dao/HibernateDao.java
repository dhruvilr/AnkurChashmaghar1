package com.ankurchashmaghar.dao;

import java.util.List;

import com.ankurchashmaghar.model.User;

public interface HibernateDao<T> {

	void save(T entity);

	List<T> getAllUsers(T entity);

	List<User> getUserList(int intValue, int i, User user);

	Long countList(User user);

	User getUserById(int id);

}
