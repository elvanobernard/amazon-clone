import React from "react";

import styles from "./Navigation.module.css";
import { IoMdMenu } from "react-icons/io";

function Navigation() {
  return (
    <div className={styles["navigation-bar"]}>
      <span
        className={`${styles["navigation-item"]} ${styles["navigation-item-main"]}`}
      >
        <IoMdMenu className={styles["navigation-icon"]} /> All
      </span>
      <span className={styles["navigation-item"]}>Today's Deals</span>
      <span className={styles["navigation-item"]}>Customer Service</span>
      <span className={styles["navigation-item"]}>Registry</span>
      <span className={styles["navigation-item"]}>Gift Cards</span>
      <span className={styles["navigation-item"]}>Sell</span>
    </div>
  );
}

export default Navigation;
