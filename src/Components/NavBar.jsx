import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      {/* Left side: Page Title & Search Bar */}
      <div className="navbar-left">
        <h1 className="navbar-title">HorizonX</h1>
      </div>
    </nav>
  );
};

export default Navbar;
