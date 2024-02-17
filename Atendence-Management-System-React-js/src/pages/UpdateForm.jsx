import { useEffect, useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import style from "./UpdateForm.module.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [totalClass, setTotalClass] = useState(0);
  const [attendClass, setAtendClass] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/student/${id}`);
      console.log(res.data);

      setName(res.data.data.name);
      setEmail(res.data.data.email);
      setPhone(res.data.data.phone);
      setAtendClass(res.data.data.attendClass);
      setTotalClass(res.data.data.totalClass);
      setSubject(res.data.data.subject);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8080/student", {
      rollNo: id,
      name,
      email,
      phone,
      attendClass,
      totalClass,
      subject,
    });
    // navigate("/viewall");
    toast.success("Student Updated", { draggable: true, theme: "dark" });
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
            onChange={(e) => setSubject(e.target.value)}
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
            onChange={(e) => setAtendClass(e.target.value)}
          />
          <button type="submit" className={style.btn}>
            update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateForm;
