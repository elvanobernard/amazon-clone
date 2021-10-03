import React from "react";
import styles from "./AddToCart.module.css";
import { IoLocationOutline, IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";

function AddToCart() {
  return (
    <div>
      <div className={styles["share-social-media"]}>Share </div>
      <div className={styles["add-to-cart-container"]}>
        <span className={styles["product-price"]}>$49.99</span>
        <span className={styles["shipping-info"]}>
          $42.15 Shipping & Import Fees
        </span>
        <span className={styles["shipping-info"]}>Deposit to Indonesia</span>
        <span className={styles["arrival-estimation"]}>
          Arrives: <strong>Thursday, Oct 14</strong>
        </span>
        <div>
          <IoLocationOutline />
          <span
            className={`${styles["delivery-country"]} ${styles["link-text"]}`}
          >
            Deliver to Indonesia
          </span>
        </div>

        <span className={styles.availability}>In Stock.</span>

        <select className={styles["quantity-select"]}>
          <option value="1">Qty: 1</option>
          <option value="2">Qty: 2</option>
          <option value="3">Qty: 3</option>
        </select>

        <button className={`${styles["add-cart-btn"]} ${styles["card-btn"]}`}>
          Add to Cart
        </button>
        <button className={`${styles["buy-now-btn"]} ${styles["card-btn"]}`}>
          Buy Now
        </button>

        <div>
          <IoLockClosed />{" "}
          <Link to="#" className={styles["link-text"]}>
            Secure transaction
          </Link>
        </div>
        <table className={styles["table"]}>
          <tr>
            <td className={styles["table-first-column"]}>Ships from</td>
            <td>Amazon.com Services LLC</td>
          </tr>
          <tr>
            <td className={styles["table-first-column"]}>Sold by</td>
            <td>Amazon.com Services LLC</td>
          </tr>
          <tr>
            <td>Packaging</td>
            <td>Shows what’s inside. To hide…</td>
          </tr>
        </table>
        <span className={styles["additional-info"]}>
          Return policy:{" "}
          <Link to={"#"} className={styles["link-text"]}>
            Eligible for Return, Refund or Replacement{" "}
          </Link>
        </span>
        <span className={styles["additional-info"]}>
          Support:{" "}
          <Link to={"#"} className={styles["link-text"]}>
            Free Amazon product support included{" "}
          </Link>
        </span>
        <hr className={styles["break-line"]} />
        <button className={styles["add-to-list-btn"]}>
          <div className={styles["inner-button"]}>Add to List</div>
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
