import React from "react";
import { Link } from "react-router";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search/>
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
