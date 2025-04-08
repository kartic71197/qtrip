import React from "react";
import { Link } from "react-router";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-500 text-white p-4">
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="search"
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
