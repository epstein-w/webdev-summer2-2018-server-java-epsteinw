package com.example.webdevsummer22018serverjava.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer22018serverjava.models.User;
import com.example.webdevsummer22018serverjava.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/api/user/findAllUsers")
	public List<User> findAllUsers() {
		return (List<User>)userRepository.findAll();
	}
	
	@PostMapping("/api/editUser/{userId}")
	public User editUser(@RequestBody User newData, @PathVariable("userId") Integer id) {
//			User oldUser = userRepository.findById(id).get();
//			oldUser.setFirstName(newData.getFirstName());
//			oldUser.setLastName(newData.getLastName());
//			oldUser.setUsername(newData.getUsername());
//			oldUser.setPassword(newData.getPassword());
//			
			userRepository.deleteById(id);
			return userRepository.save(newData);
			
	}
	
}
