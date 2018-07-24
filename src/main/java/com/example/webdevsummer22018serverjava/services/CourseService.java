package com.example.webdevsummer22018serverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.webdevsummer22018serverjava.models.Course;
import com.example.webdevsummer22018serverjava.models.Module;
import com.example.webdevsummer22018serverjava.repositories.CourseRepository;
import com.example.webdevsummer22018serverjava.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class CourseService {
	@Autowired
	CourseRepository courseRepo;
	
	@Autowired
	ModuleRepository moduleRepo;
	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepo.findAll();
	}
	
	@GetMapping("/api/course/{courseId}")
	public Optional<Course> getCourseById(@PathVariable("courseId") Integer id) {
		return courseRepo.findById(id);
	}

	
	@PostMapping("/api/course")
	public Course addCourse(@RequestBody Course c) {
		return this.courseRepo.save(c);
	}
	
	
	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourseById(@PathVariable("courseId") Integer id) {
		courseRepo.deleteById(id);
	}
	
	@GetMapping("/api/course/{courseId}/module")
	public List<Module> getModulesByCourseId(@PathVariable("courseId") Integer courseId) {
		Optional<Course> oc = courseRepo.findById(courseId);
		if (oc.isPresent()) {
			Course c = oc.get();
			List<Module> lom = c.getModules();
			return lom;
		} else {
			return new ArrayList<Module>();
		}
	}

	@PostMapping("/api/course/{courseId}/module")
	public Module addModule(@RequestBody Module module, @PathVariable("courseId") Integer courseId) {
		Module m = module;
		Optional<Course> c = courseRepo.findById(courseId);
		if (c.isPresent()) {
			Course t = c.get();
			m.setCourse(t);
			return moduleRepo.save(m);
		} else {
			return null;
		}
		
	}
}
