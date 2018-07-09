package com.example.webdevsummer22018serverjava.repositories;
import org.springframework.data.repository.CrudRepository;
import com.example.webdevsummer22018serverjava.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	public boolean findUserByUserName(String username);
}

