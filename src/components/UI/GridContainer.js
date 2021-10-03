import React from "react";

import styles from "./GridContainer.module.css";

function GridContainer(props) {
  return <div className={styles["grid-4-cols"]}>{props.children}</div>;
}

export default GridContainer;
