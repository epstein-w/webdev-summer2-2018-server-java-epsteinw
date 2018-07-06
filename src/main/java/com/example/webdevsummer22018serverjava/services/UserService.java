package com.example.webdevsummer22018serverjava.services;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer22018serverjava.models.User;

@RestController
public class UserService {

	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return user;
	}
}
