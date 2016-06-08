package com.ankurchashmaghar.service;

import java.util.List;

import com.ankurchashmaghar.model.User;

public interface UserService {

	void saveUser(User user);

	List<User> getAllUsers();

	List<User> getUserList(int intValue, int i, User user);

	float countUserList(User user);

	User getUserById(int id);

}
