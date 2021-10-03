import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles["footer-container"]}>
          <span className={styles["footer-header"]}>Get to Know Us</span>
          <Link className={styles["footer-nav-item"]} to="/">
            Careers
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Blog
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            About Amazon
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Investor Relations
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Amazon Devices
          </Link>
        </nav>{" "}
        <nav className={styles["footer-container"]}>
          <span className={styles["footer-header"]}>Make Money with Us</span>
          <Link className={styles["footer-nav-item"]} to="/">
            Sell products on Amazon
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Sell on Amazon Business
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Sell apps on Amazon
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Become an Affiliate
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Advertise Your Products
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Self-Publish with Us
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Host an Amazon Hub
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            ›See More Make Money with Us
          </Link>
        </nav>
        <nav className={styles["footer-container"]}>
          <span className={styles["footer-header"]}>
            Amazon Payment Products
          </span>
          <Link className={styles["footer-nav-item"]} to="/">
            Amazon Business Card
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Shop with Points
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Reload Your Balance
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Amazon Currency Converter
          </Link>
        </nav>
        <nav className={styles["footer-container"]}>
          <span className={styles["footer-header"]}>Let Us Help You</span>
          <Link className={styles["footer-nav-item"]} to="/">
            Amazon and COVID-19
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Your Account
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Your Orders
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Shipping Rates & Policies
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Returns & Replacements
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Manage Your Content and Devices
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Amazon Assistant
          </Link>
          <Link className={styles["footer-nav-item"]} to="/">
            Help
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
