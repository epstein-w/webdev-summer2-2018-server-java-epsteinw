package com.example.webdevsummer22018serverjava.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer22018serverjava.models.Lesson;
import com.example.webdevsummer22018serverjava.models.Module;
import com.example.webdevsummer22018serverjava.repositories.CourseRepository;
import com.example.webdevsummer22018serverjava.repositories.LessonRepository;
import com.example.webdevsummer22018serverjava.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {
	@Autowired
	ModuleRepository moduleRepo;
	
	@Autowired
	CourseRepository courseRepo;
	
	@Autowired
	LessonRepository lessonRepo;
	
	@GetMapping("/api/lesson/{lessonId}")
	public Optional<Lesson> findLessonById(@PathVariable("lessonId") int lessonId) {
		return this.lessonRepo.findById(lessonId);
	}
	
	@PostMapping("/api/course/module/{moduleId}/lesson")
	public Lesson addLessonToModule (@PathVariable("moduleId") int moduleId, @RequestBody Lesson l) {
		Optional<Module> om = this.moduleRepo.findById(moduleId);
		if (om.isPresent()) {
			Module m = om.get();
			Lesson newL = l;
			newL.setModule(m);
			return this.lessonRepo.save(newL);
		} else {
			return new Lesson();
		}
	}
	
	@PostMapping("/api/course/{courseId}/{moduleId}/lesson")
	public Lesson addLessonToModule(@PathVariable("courseId") int courseId, @PathVariable("moduleId") int moduleId, @RequestBody Lesson l) {
		Optional<Module> om = this.moduleRepo.findById(moduleId);
		if (om.isPresent()) {
			Module m = om.get();
			Lesson newL = l;
			newL.setModule(m);
			return this.lessonRepo.save(newL);
		} else {
			return new Lesson();
		}
	}
	
	@DeleteMapping("api/course/module/{moduleId}/lesson/{lessonId}")
	public void deleteLessonFromModule(@PathVariable("moduleId") int moduleId, @PathVariable("lessonId") int lessonId) {
		this.lessonRepo.deleteById(lessonId);
	}
}
