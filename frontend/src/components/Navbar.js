import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>lavender todo app</h1>
        </Link>
        <Link to="/about">
          <h1>about</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
