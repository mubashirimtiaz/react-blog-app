import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1>Blog App</h1>
      <div className={style.links}>
        <a href="/">Home</a>
        <a href="/create" className={style.button}>
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
