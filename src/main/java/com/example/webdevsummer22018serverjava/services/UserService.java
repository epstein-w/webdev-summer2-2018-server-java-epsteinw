package com.example.webdevsummer22018serverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
//		User temp = this.findUserByUsername(user.getUsername());
//		if (temp == null) {
//			return userRepository.save(user);
//		} else {
//			return null;
//		}
//		
//		List<User> arl = (List<User>)userRepository.findUserByUsername(user.getUsername());
//		if (arl.isEmpty()) {
//			return user;
//		} else {
//			return new User();
//		}
		
		Optional<User> userC = userRepository.findUserByUsername(user.getUsername());
		
		if (userC.isPresent()) {
			return null;
		} else {
			return userRepository.save(user);
		}
		
		
	}
	
	@PostMapping("/api/user/login")
	public User login(@RequestBody User user) {
		user = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		return user;
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>)userRepository.findAll();
	}
	
	@PutMapping("/api/user/{userId}")
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
	
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int userId) {
		Optional<User> data = userRepository.findById(userId);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") Integer id) {
		userRepository.deleteById(id);
	}
	
	@DeleteMapping("api/user")
	public void deleteAll() {
		userRepository.deleteAll();
	}
	
//	public User findUserByUsername(String username) {
//		return null;
//		//return userRepository.findUserByUsername(username);
//	}

}



