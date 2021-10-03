import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  return (
    <div>
      <h2 className={styles["product-title"]}>
        All-new Echo Dot (4th generation) International Version | Smart speaker
        with Alexa | Charcoal
      </h2>
      <Link to="/product" className={styles["product-brand"]}>
        Brand: Amazon
      </Link>
      <hr />
      <p className={styles["product-price"]}>
        Price: <span className={styles["product-price-num"]}>$49.99</span>
      </p>
      <div className={styles["notification-box"]}>
        <p className={styles["notification-box-header"]}>
          <strong>
            Important information about Echo Dot International Version:
          </strong>
        </p>
        <p className={styles["notification-box-text"]}>
          Certain Alexa Skills and features may not be available in all
          countries and languages and are subject to change at any time.
        </p>
      </div>
      <ul className={styles["product-features"]}>
        <li className={styles["product-feature"]}>
          Meet Echo Dot — Echo Dot (4th generation) connects to Alexa, a
          cloud-based voice service, to play music, set timers and alarms,
          control compatible smart home devices, and more.
        </li>
        <li>
          Recommended language — English United States or Español Estados Unidos
          is the recommended language to access Skills, Features and an optimal
          music experience.
        </li>
        <li>
          Voice control your entertainment — stream songs from Amazon Music
          Unlimited (unavailable in ID and KR) , Spotify (Free Tier not
          available in KR) and TuneIn. Pair with another Echo Dot (4th gen) for
          stereo sound or stream music from other popular audio services via
          Bluetooth with your smartphone or tablet (requires a Bluetooth
          connection from a compatible device, voice control not supported).
        </li>
        <li>
          Ready to help — ask Alexa to play music, answer questions, play the
          news, check the weather, set alarms and more.
        </li>
        <li>
          Control your smart home — use your voice to turn on lights and plugs
          with compatible devices.
        </li>
        <li>
          Designed to protect your privacy — built with multiple layers of
          privacy protection and control, including a Microphone Off button that
          disables the microphones.
        </li>
        <li>
          Listen to the news- Ask "Alexa, what’s in the news" and she will
          provide access to local and international news.
        </li>
        <li>
          Feature availability – some Alexa features may not be supported in
          your country including Alexa Guard, Amazon Kids, and In-skill
          Purchases.
        </li>
      </ul>
    </div>
  );
}

export default ProductDetail;
