import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import Card from "../components/UI/Card";
import GridContainer from "../components/UI/GridContainer";

import banner from "./61CiqVTRBEL._SX3000_.jpg";
import styles from "./MainPages.module.css";

import img1 from "../image-resource/card-image-laptop-cable.jpg";
import img2 from "../image-resource/card-image-echo-dot.jpg";
import img3 from "../image-resource/card-image-camera.jpg";
import img4 from "../image-resource/card-image-occulus.jpg";
import img5 from "../image-resource/card-image-echo.jpg";

const DUMMY_PRODUCT_DATA = [
  {
    title: "AmazonBasics",
    img: img1,
    link: "See more",
  },
  {
    title: '"Alexa, play music."',
    img: img2,
    link: "Shop Echo Dot",
  },
  {
    title: "Electronics",
    img: img3,
    link: "See more",
  },
  {
    title: "Oculus",
    img: img4,
    link: "Shop now",
  },
  {
    title: "AmazonBasics",
    img: img5,
    link: "See more",
  },
];

function MainPages() {
  return (
    <Fragment>
      <section className={styles["banner-section"]}>
        <img
          className={styles["main-banner"]}
          src={banner}
          alt="Essentials for Gamers"
        />
        <section className={styles["grid-section"]}>
          <GridContainer>
            <Card object={DUMMY_PRODUCT_DATA[0]} />
            <Card object={DUMMY_PRODUCT_DATA[1]} />
            <Card object={DUMMY_PRODUCT_DATA[2]} />
            <Card object={DUMMY_PRODUCT_DATA[3]} />
          </GridContainer>
        </section>
      </section>
    </Fragment>
  );
}

export default MainPages;
