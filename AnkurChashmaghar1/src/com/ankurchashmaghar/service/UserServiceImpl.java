package com.ankurchashmaghar.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ankurchashmaghar.dao.HibernateDao;
import com.ankurchashmaghar.model.User;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	HibernateDao<User> userDao;

	@Override
	public void saveUser(User user) {
		// TODO Auto-generated method stub
		userDao.save(user);
		
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userDao.getAllUsers(new User());
	}

	@Override
	public List<User> getUserList(int intValue, int i, User user) {
		// TODO Auto-generated method stub
		return userDao.getUserList(intValue,i,user);
	}

	@Override
	public float countUserList(User user) {
		// TODO Auto-generated method stub
		
		long i= (long) userDao.countList(user);
		return i;
	}

	@Override
	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return userDao.getUserById(id);
	}
	
	
}
