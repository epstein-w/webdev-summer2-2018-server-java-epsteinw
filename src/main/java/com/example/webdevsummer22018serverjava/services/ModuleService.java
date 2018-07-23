package com.example.webdevsummer22018serverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer22018serverjava.models.Course;
import com.example.webdevsummer22018serverjava.models.Module;
import com.example.webdevsummer22018serverjava.repositories.CourseRepository;
import com.example.webdevsummer22018serverjava.repositories.ModuleRepository;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ModuleService {
	@Autowired
	ModuleRepository moduleRepo;
	
	@Autowired
	CourseRepository courseRepo;
	
//	
//	@PostMapping("/api/course/{courseId}/module")
//	public Module addModule(@RequestBody Module module, @PathVariable("courseId") Integer courseId) {
//		Module m = module;
//		Optional<Course> c = courseRepo.findById(courseId);
//		if (c.isPresent()) {
//			Course t = c.get();
//			m.setCourse(t);
//			return moduleRepo.save(m);
//		} else {
//			return null;
//		}
//		
//	}
	
//	@GetMapping("/api/course/{courseId}/module")
//	public List<Module> findModulesFromCourse(@PathVariable("courseId") int courseId) {
//		return (List<Module>)this.moduleRepo.findModulesFromCourse(courseId);
//		
//	}

	
	
}
