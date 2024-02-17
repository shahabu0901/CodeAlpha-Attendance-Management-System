import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className="nav_center">
        <h1>
          <Link to="/">Attendance Management System</Link>
        </h1>
        <ul>
          <li>
            <Link to="/stdents">Student</Link>
          </li>
          <li>
            <Link to="/viewall">View Students</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
