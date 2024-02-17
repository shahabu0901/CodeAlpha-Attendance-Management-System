package com.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.dto.ResponseStructure;
import com.attendance.dto.Student;
import com.attendance.service.StudentService;

@CrossOrigin
@RestController
public class StudentController {
	@Autowired
	private StudentService service;

	@PostMapping("/student")
	public ResponseEntity<ResponseStructure<Student>> SaveStudent(@RequestBody Student student) {
		return service.SaveStudent(student);
	}

	@PutMapping("/student")
	public ResponseEntity<ResponseStructure<Student>> UpdateStudent(@RequestBody Student student) {
		return service.UpdateStudent(student);
	}

	@GetMapping("/student/{rollno}")
	public ResponseEntity<ResponseStructure<Student>> findById(@PathVariable int rollno) {
		return service.findById(rollno);
	}

	@DeleteMapping("/student/{rollno}")
	public ResponseEntity<ResponseStructure<String>> deleteById(@PathVariable int rollno) {
		return service.DeleteById(rollno);
	}

	@GetMapping("/studentall")
	public ResponseEntity<ResponseStructure<List<Student>>> findAllStudent() {
		return service.findAllStudent();
	}

}
