import React from "react";
import AddToCart from "../components/DetailPage/AddToCart/AddToCart";
import ProductDetail from "../components/DetailPage/ProductDetail/ProductDetail";
import ProductImages from "../components/DetailPage/ProductImage/ProductImages";
import styles from "./DetailPages.module.css";

function DetailPages() {
  return (
    <div className={styles["detail-page"]}>
      <ProductImages />
      <ProductDetail />
      <AddToCart />
    </div>
  );
}

export default DetailPages;
