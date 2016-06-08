package com.ankurchashmaghar.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ankurchashmaghar.model.User;
import com.ankurchashmaghar.service.UserService;

@RestController
public class UserRestController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value="/fetchUsers",method = RequestMethod.GET)
	public ResponseEntity<List<User>> fetchAllUsers(){
		
		System.out.println("here");
		List<User> lstUsers = userService.getAllUsers();
		
		if(lstUsers.isEmpty()){
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(lstUsers,HttpStatus.OK);
	}
	
	
}
