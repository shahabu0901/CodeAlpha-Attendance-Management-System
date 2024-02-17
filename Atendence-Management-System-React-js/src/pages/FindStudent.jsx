import { useState } from "react";
import style from "./FindStudent.module.css";
import axios from "axios";

const FindStudent = () => {
  const [rollNo, setrollNo] = useState("");
  const [stdent, setStudent] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/student/${rollNo}`);
      console.log(res.data);
      setStudent(res.data);
    } catch (error) {
      setStudent({});
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  };
  return (
    <div className={style.form_container}>
      <h2 className={style.h2}>Fetch Student </h2>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Enter Roll No"
          value={rollNo}
          onChange={(e) => setrollNo(e.target.value)}
        />
        <button className={style.btn} type="submit">
          Fetch
        </button>
      </form>
      {stdent.statusCode == 200 ? (
        <div className={style.container}>
          <div className={style.section_center}>
            <div className={style.box}>
              <p>
                Roll No : <span>{stdent.data.rollNo}</span>
              </p>
              <p>
                Name : <span>{stdent.data.name}</span>
              </p>
              <p>
                Email : <span>{stdent.data.email}</span>
              </p>
              <p>
                Phone : <span>{stdent.data.phone}</span>
              </p>
              <p>
                Subject : <span>{stdent.data.subject}</span>
              </p>
              <div className={style.attendence}>
                <h3>Atendence</h3>
                <p>
                  Total Class : <span>{stdent.data.totalClass}</span>
                </p>
                <p>
                  Attend Class : <span>{stdent.data.attendClass}</span>
                </p>
                <p>
                  Percentage :{" "}
                  <span>
                    {Math.floor(
                      (stdent.data.attendClass / stdent.data.totalClass) * 100
                    )}
                    %
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ transition: "1s linear" }}
          className={`${style.err} ${isClicked && style.visble}`}
        >
          <h2>You Have Enter Invalid Roll No</h2>
        </div>
      )}
    </div>
  );
};

export default FindStudent;
