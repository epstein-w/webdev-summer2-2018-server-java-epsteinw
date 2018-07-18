package com.example.webdevsummer22018serverjava.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.webdevsummer22018serverjava.models.Course;
import com.example.webdevsummer22018serverjava.repositories.CourseRepository;

@RestController
public class CourseService {
	@Autowired
	CourseRepository courseRepo;
	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepo.findAll();
	}
}
