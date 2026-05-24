import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>MiniSocial</h2>

      <div className="nav-links">

        <Link to="/">Feed</Link>

        <Link to="/signup">Signup</Link>

        <Link to="/create-post">Create Post</Link>

      </div>

    </nav>
  );
}

export default Navbar;