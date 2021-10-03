// https://i.imgur.com/7I9Was5.png

import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

import styles from "./Header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLocationOutline, IoCart } from "react-icons/io5";

function Header() {
  return (
    <div className={styles["nav-belt"]}>
      <div>
        <Link className={styles["nav-belt-container"]} to="/">
          <img
            className={styles.logo}
            src="https://i.imgur.com/7I9Was5.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className={styles["nav-belt-container"]}>
        <IoLocationOutline className={styles["header-icon"]} />
        <div className={styles["header-text-container"]}>
          <p className={styles["header-text"]}>Deliver to</p>
          <p
            className={`${styles["header-text"]} ${styles["header-text-lower"]}`}
          >
            Indonesia
          </p>
        </div>
      </div>
      <SearchBar />

      <div className={styles["nav-belt-container"]}>
        <div className={styles["header-text-container"]}>
          <p className={styles["header-text"]}>Hello, Sign in</p>
          <p
            className={`${styles["header-text"]} ${styles["header-text-lower"]}`}
          >
            Account & Lists <IoMdArrowDropdown />
          </p>
        </div>
      </div>

      <div className={styles["nav-belt-container"]}>
        <div className={styles["header-text-container"]}>
          <p className={styles["header-text"]}>Returns</p>
          <p
            className={`${styles["header-text"]} ${styles["header-text-lower"]}`}
          >
            & Orders
          </p>
        </div>
      </div>

      <div className={styles["nav-belt-container"]}>
        <IoCart className={styles["header-icon"]} />
        <span>0 Cart</span>
      </div>
    </div>
  );
}

export default Header;
