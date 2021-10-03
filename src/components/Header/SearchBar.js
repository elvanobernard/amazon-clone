import React from "react";

import styles from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className={styles["searchBar"]}>
      <select className={styles["search-bar-select"]}>
        <option value="">All</option>
        <option value="">Arts & Cratfs</option>
        <option value="">Automotive</option>
        <option value="">Baby</option>
      </select>
      <input className={styles["search-bar-input"]} type="text" />
      <button className={styles["search-bar-button"]}>
        <IoSearch className={styles["search-bar-icon"]} />
      </button>
    </div>
  );
}

export default SearchBar;
