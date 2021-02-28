import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1>Blog App</h1>
      <div className={style.links}>
        <Link to="/">Home</Link>
        <Link to="/create" className={style.button}>
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
