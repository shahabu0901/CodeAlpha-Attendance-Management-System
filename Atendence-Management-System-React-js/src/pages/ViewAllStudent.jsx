import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./ViewAllStudent.module.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewAllStudent = () => {
  const [students, setStudents] = useState([]);
  let c = true;
  const fetchData = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/studentall`);
      setStudents(res.data.data);
      console.log(res.data);
      c = false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (c) {
    fetchData();
  }

  const deleteHandler = async (id) => {
    let res = await axios.delete(`http://localhost:8080/student/${id}`);
    console.log(res.data);
    let newStudent = students.filter((student) => student.rollNo !== id);
    setStudents(newStudent);
    toast.error("Student deleted", { draggable: true, theme: "dark" });
  };
  return (
    <>
      <div>
        <ToastContainer position="top-center" />
      </div>
      <div className={style.container}>
        <h2 className={style.h2}> Students Attedance List</h2>
        <div className={style.section_center}>
          {students.map((student) => {
            return (
              <div key={student.rollNo} className={style.box}>
                <p>
                  Roll No : <span>{student.rollNo}</span>
                </p>
                <p>
                  Name : <span>{student.name}</span>
                </p>
                <p>
                  Email : <span>{student.email}</span>
                </p>
                <p>
                  Phone : <span>{student.phone}</span>
                </p>
                <p>
                  Subject : <span>{student.subject}</span>
                </p>
                <div className={style.attendence}>
                  <h3>Atendence</h3>
                  <p>
                    Total Class : <span>{student.totalClass}</span>
                  </p>
                  <p>
                    Attand Class: <span>{student.attendClass}</span>
                  </p>
                  <p>
                    Percentage :{" "}
                    <span>
                      {Math.floor(
                        (student.attendClass / student.totalClass) * 100
                      )}
                      %
                    </span>
                  </p>
                </div>
                <div className={style.btns}>
                  <Link
                    to={`/update/${student.rollNo}`}
                    className={style.btn_suc}
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deleteHandler(student.rollNo)}
                    className={style.btn_den}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewAllStudent;
