package com.example.webdevsummer22018serverjava.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.webdevsummer22018serverjava.models.Hello;


public interface HelloRepository
extends CrudRepository<Hello, Integer> {}

