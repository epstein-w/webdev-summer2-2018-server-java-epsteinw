package com.example.webdevsummer22018serverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

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
	public User register(@RequestBody User user, HttpSession session) {
		Optional<User> userC = userRepository.findUserByUsername(user.getUsername());
		
		if (userC.isPresent()) {
			return null;
		} else {
			User currentUser =  userRepository.save(user);
			session.setAttribute("currentUser", currentUser);
			return currentUser;
		}
	}
	
	@GetMapping("/checkLogin")
	public User checkLogin(HttpSession session) {
		return (User)session.getAttribute("currentUser");
	}
	
	
	@PostMapping("/api/user/login")
	public User login(@RequestBody User user, HttpSession session) {
		User currentUser = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		if (currentUser == null) {
			System.out.println("hfadsjhkafdhjksl");
		} else {
			session.setAttribute("currentUser", currentUser);
		}
		return currentUser;
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

	@GetMapping("/profile/")
	public Optional<User> profile(@RequestBody User user, HttpSession session) {
		User currentUser = (User)session.getAttribute("currentUser");
		return userRepository.findById(currentUser.getId());
	}

	
	@PostMapping("/api/logout") 
	public User logout(HttpSession session) {
		User user = (User) session.getAttribute("currentUser");
		session.invalidate();
		return user;
	}
	
	@GetMapping("/invalidateSession")
	public void invalidate(HttpSession session) {
		session.invalidate();
	}
	
	@PutMapping("/api/profile")
	public User updateProfile(@RequestBody User updateUser, HttpSession session) {
		User oldUser = (User)session.getAttribute("currentUser");
		oldUser.setDateOfBirth(updateUser.getDateOfBirth());;
		oldUser.setEmail(updateUser.getEmail());
		oldUser.setFirstName(updateUser.getFirstName());
		oldUser.setLastName(updateUser.getLastName());
		oldUser.setPhone(updateUser.getPhone());
		oldUser.setRole(updateUser.getRole());
		
	
		
		return userRepository.save(oldUser);
	}
}



