import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>{props.object.title}</h2>
      <div className={styles["card-img"]}>
        <Link to="/product">
          <img src={props.object.img} alt="laptop and cable" />
        </Link>
      </div>
      <Link className={styles["card-link"]} to="/product">
        {props.object.link}
      </Link>
    </div>
  );
}

export default Card;
