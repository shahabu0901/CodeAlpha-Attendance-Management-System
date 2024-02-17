package com.attendance.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.attendance.dto.ResponseStructure;

@ControllerAdvice
public class StudentExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(RollNoNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>> ExceptionHandler(RollNoNotFoundException e) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		structure.setMessage(e.getMessage());
		structure.setData("Student Found");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<com.attendance.dto.ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
	}
}
