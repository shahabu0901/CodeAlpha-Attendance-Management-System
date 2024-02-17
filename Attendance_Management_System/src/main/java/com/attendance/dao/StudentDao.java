package com.attendance.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.attendance.dto.Student;
import com.attendance.repository.StudentRepository;

@Repository
public class StudentDao {
	@Autowired
	private StudentRepository repository;

	// Save
	@SuppressWarnings("null")
	public Student SaveStudent(Student student) {
		System.out.println(repository);
		return repository.save(student);
	}

	// Update
	@SuppressWarnings("null")
	public Student UpdateStudent(Student student) {
		return repository.save(student);
	}

	// FetchByRollNo
	public Optional<Student> findById(int rollno) {
		return repository.findById(rollno);
	}

	// Delete
	public boolean DeleteById(int rollno) {
		Optional<Student> rec = findById(rollno);
		if (rec.isPresent()) {
			repository.deleteById(rollno);
			return true;
		}
		return false;
	}

	// FindAllStudent
	public List<Student> findAllStudent() {
		return repository.findAll();
	}

}
