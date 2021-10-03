import React, { useState } from "react";
import styles from "./ProductImages.module.css";

import { DUMMY_DETAIL_IMAGES } from "../../../image-resource/Product-Detail/image-detail";
import { DUMMY_THUMBNAIL_IMAGES } from "../../../image-resource/Product-Detail/image-thumbnail";

function ProductImages() {
  const [imageDisplayedIndex, setImageDisplayedIndex] = useState(0);

  const mouseEnterHandler = (event) => {
    const imgThumbnail = event.target;
    const index = imgThumbnail.dataset.index;
    setImageDisplayedIndex(index);
  };

  return (
    <div className={styles["img-container"]}>
      <div className={styles["img-thumbnail-container"]}>
        {DUMMY_THUMBNAIL_IMAGES.map((img, i) => (
          <img
            key={i}
            data-index={i}
            onMouseEnter={mouseEnterHandler}
            className={`${styles["img-thumbnail"]} ${
              imageDisplayedIndex === i ? styles["img-thumbnail--active"] : ""
            }`}
            src={img}
            alt="Product Thumbnail"
          />
        ))}
      </div>
      <img
        src={DUMMY_DETAIL_IMAGES[imageDisplayedIndex]}
        className={styles["img-product-detail"]}
        alt="Product Large"
      />
    </div>
  );
}

export default ProductImages;
