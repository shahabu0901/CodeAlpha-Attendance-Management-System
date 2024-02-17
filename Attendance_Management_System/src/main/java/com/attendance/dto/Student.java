package com.attendance.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int RollNo;
	@Column(nullable = false)
	private String Name;
	@Column(nullable = false, unique = true)
	private String Email;
	@Column(nullable = false, unique = true)
	private long Phone;
	@Column(nullable = false)
	private String Subject;
	@Column(nullable = false)
	private int TotalClass;
	private int AttendClass;
}
