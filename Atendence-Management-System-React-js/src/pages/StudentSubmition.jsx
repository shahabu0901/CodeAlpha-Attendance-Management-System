import { PiStudentBold } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import style from "./StudentSubmition.module.css";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentSubmition = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSublect] = useState("");
  const [totalClass, setTotalClass] = useState("");
  const [attendClass, setAttendClass] = useState("");

  const fetchData = () => {
    const data = {
      name,
      email,
      phone,
      subject,
      totalClass,
      attendClass,
    };
    console.log(data);
    axios
      .post(`http://localhost:8080/student`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
    toast.success("Student Registerd", { draggable: true, theme: "dark" });
    console.log(res);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <div>
        <ToastContainer position="top-center" />
      </div>
      <div className={style.form_container}>
        <form onSubmit={submitHandler}>
          <h2>
            <FiAward /> Add Student <PiStudentBold />
          </h2>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSublect(e.target.value)}
          />
          <input
            type="number"
            placeholder="Total Class"
            value={totalClass}
            onChange={(e) => setTotalClass(e.target.value)}
          />
          <input
            type="number"
            placeholder="Attend Class"
            value={attendClass}
            onChange={(e) => setAttendClass(e.target.value)}
          />
          <button type="submit" className={style.btn}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentSubmition;
