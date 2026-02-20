import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <nav className="nav">
      {/* LEFT SIDE - LOGO */}
      <div className="logo">
        <img src="/MeghaAI.png" alt="MeghaAI Logo" />
      </div>

      {/* CENTER - NAV LINKS */}
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link to="/" className={location.pathname === "/solutions" ? "active" : ""}>
          Solutions
        </Link>

        <Link to="/" className={location.pathname === "/products" ? "active" : ""}>
          Products
        </Link>

        <Link
          to="/resources"
          className={location.pathname === "/resources" ? "active" : ""}
        >
          Resources
        </Link>

        <Link to="/" className={location.pathname === "/about" ? "active" : ""}>
          About Us
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </Link>
      </div>

      {/* RIGHT SIDE - SEARCH */}
<div className="nav-search">
  <div className="search-wrapper">
    <FaSearch className="search-icon" />
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate("/search");
      }}
      className="search-input"
    />
  </div>
</div>

    </nav>
  );
}
