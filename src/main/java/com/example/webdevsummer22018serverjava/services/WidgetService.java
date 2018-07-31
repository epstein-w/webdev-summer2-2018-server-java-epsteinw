package com.example.webdevsummer22018serverjava.services;


import com.example.webdevsummer22018serverjava.models.Lesson;
import com.example.webdevsummer22018serverjava.models.Widget;
import com.example.webdevsummer22018serverjava.repositories.LessonRepository;
import com.example.webdevsummer22018serverjava.repositories.WidgetRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class WidgetService {
	@Autowired
	WidgetRepository widgetRepo;
	
	@Autowired
	LessonRepository lessonRepo;
	
	@PostMapping("/api/widget")
	public List<Widget> saveWidgets(@RequestBody List<Widget> widgets) {
		List<Widget> saved = new ArrayList<>();
		widgetRepo.deleteAll();
		for (Widget w : widgets) {
			saved.add(widgetRepo.save(w));
		}
		return saved;
	}
	
	@GetMapping("/api/widget")
	public List<Widget> getAllWidgets() {
		return (List<Widget>) widgetRepo.findAll();
	}
	
	@GetMapping("/api/widget/{widgetId}")
	public Optional<Widget> findWidgetById(@PathVariable("widgetId") int widgetId) {
		return widgetRepo.findById(widgetId);
	}
	
	@GetMapping("/api/lesson/{lessonId}/widget")
	public List<Widget> getWidgetsByLessonId(@PathVariable("lessonId") int lessonId) {
		Optional<Lesson> ol = lessonRepo.findById(lessonId);
		if (ol.isPresent()) {
			Lesson l = ol.get();
			return l.getWidgets();
		} else {
			return new ArrayList();
		}
	}
	
	
	@PostMapping("/api/lesson/{lessonId}/widget")
	public Widget addWidgetForLesson(@PathVariable("lessonId") int lessonId, @RequestBody Widget w) {
		if (lessonRepo.findById(lessonId).isPresent()) {
			w.setLesson(lessonRepo.findById(lessonId).get());
			return widgetRepo.save(w);
		} else {
			return null;
		}
	}
	
	@PostMapping("/api/lesson/{lessonId}/widget/saveAll")
	public List<Widget> addWidgetForLesson(@PathVariable("lessonId") int lessonId, @RequestBody List<Widget> w) {
		if (lessonRepo.findById(lessonId).isPresent()) {
			List<Widget> saved = new ArrayList<>();
			this.clearLesson(lessonId);
			for (Widget widg : w) {
				widg.setLesson(lessonRepo.findById(lessonId).get());
				saved.add(widgetRepo.save(widg));
			}
			return saved;
			
		} else {
			return null;
		}
	}
	
	private void clearLesson(int lessonId) {
		List<Integer> toDelete = new ArrayList<>();
		for (Widget w : widgetRepo.findAll()) {
			if (w.getLesson() != null) {
				if (w.getLesson().getId() == lessonId) {
			
				toDelete.add(w.getId());
				}
			}
		}
		
		for (Integer i : toDelete) {
			widgetRepo.deleteById(i);
		}
	}
	
	@PutMapping("/api/widget/{widgetId}")
	public Widget updateWidgetById(@PathVariable("widgetId") int widgetId, @RequestBody Widget w) {
		int oldId = widgetRepo.findById(widgetId).get().getId();
		w.setId(oldId);
		return widgetRepo.save(w);
	}
	
	@DeleteMapping("api/widget/{widgetId}")
	public void deleteWidgetById (@PathVariable("widgetId") int widgetId) {
		widgetRepo.deleteById(widgetId);
	}
	
	
}
