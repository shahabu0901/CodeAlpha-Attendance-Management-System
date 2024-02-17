package com.attendance.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.attendance.dao.StudentDao;
import com.attendance.dto.ResponseStructure;
import com.attendance.dto.Student;
import com.attendance.exception.RollNoNotFoundException;

@Service
public class StudentService {
	@Autowired
	private StudentDao studentDao;

	// Save
	public ResponseEntity<ResponseStructure<Student>> SaveStudent(Student student) {
		ResponseStructure<Student> structure = new ResponseStructure<>();
		student = studentDao.SaveStudent(student);
		structure.setData(student);
		structure.setMessage("Student Register Succesfully");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Student>>(structure, HttpStatus.CREATED);
	}

	// Update
	public ResponseEntity<ResponseStructure<Student>> UpdateStudent(Student student) {
		ResponseStructure<Student> structure = new ResponseStructure<>();
		student = studentDao.UpdateStudent(student);
		structure.setData(student);
		structure.setMessage("Student Updated Succesfully");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Student>>(structure, HttpStatus.ACCEPTED);
	}

	// DeleteByRollNo
	public ResponseEntity<ResponseStructure<String>> DeleteById(int rollno) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		boolean deleted = studentDao.DeleteById(rollno);
		if (deleted) {
			structure.setData("Student Deleted Succesfully");
			structure.setMessage("Student Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		structure.setData("Student Not Found");
		structure.setMessage("Invalid Roll No");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
	}

	// FindByRoll
	public ResponseEntity<ResponseStructure<Student>> findById(int rollno) {
		Optional<Student> rec = studentDao.findById(rollno);
		ResponseStructure<Student> structure = new ResponseStructure<>();
		if (rec.isPresent()) {
			structure.setData(rec.get());
			structure.setMessage("Student Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Student>>(structure, HttpStatus.OK);
		}
		throw new RollNoNotFoundException("Roll No Not Found Exception");
	}

	// FindAllStudent
	public ResponseEntity<ResponseStructure<List<Student>>> findAllStudent() {
		ResponseStructure<List<Student>> structure = new ResponseStructure<>();
		structure.setData(studentDao.findAllStudent());
		structure.setMessage("List of All Students");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Student>>>(structure, HttpStatus.OK);
	}
}
