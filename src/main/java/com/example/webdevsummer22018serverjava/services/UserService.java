package com.example.webdevsummer22018serverjava.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	
	@PostMapping("/api/user")
	public User register(@RequestBody User user) {
		if (this.findUserByUserName(user.getUsername())) {
			return userRepository.save(user);
		} else {
			
		}
	}
	
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>)userRepository.findAll();
	}
	
	@PostMapping("/api/user/{userId}")
	public User editUser(@RequestBody User newData, @PathVariable("userId") Integer id) {
		Optional<User> oldData = userRepository.findById(id);
		if(oldData.isPresent()) {
			User oldUser = oldData.get();
			oldUser.setFirstName(newData.getFirstName());
			oldUser.setLastName(newData.getLastName());
			oldUser.setPhone(newData.getPhone());
			oldUser.setRole(newData.getRole());
			oldUser.setDateOfBirth(newData.getDateOfBirth());
			oldUser.setEmail(newData.getEmail());
			userRepository.save(oldUser);
			return oldUser;
		}
		return null;
			
	}
	
	@DeleteMapping("api/user/{userId")
	public void deleteUser(@PathVariable("userId") Integer id) {
		userRepository.deleteById(id);
	}
	
	@DeleteMapping("api/user")
	public void deleteAll() {
		userRepository.deleteAll();
	}
	
	public boolean findUserByUserName(String username) {
		for (User u : userRepository.findAll()) {
			if (u.getUsername().equals(username)) {
				return false;
			}
		}
		return true;
	}
}


