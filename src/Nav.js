import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";

function Nav() {
  return (
    <Router>
      <nav>
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/menu">
          Menu
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Nav;
