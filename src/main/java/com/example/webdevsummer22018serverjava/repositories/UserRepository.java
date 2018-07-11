package com.example.webdevsummer22018serverjava.repositories;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.webdevsummer22018serverjava.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	@Query("SELECT user FROM User user WHERE user.username:=username")
	public Iterable<User> findUserByUsername(@Param("username") String username);
	
}

