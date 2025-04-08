import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/hero_headphones.png";


function Hero() {
  return (
    <div className={styles.hero}>
      <div className="text-4xl font-bold gap-4 flex flex-col justify-center items-center">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
      <img src={headphones} width={212} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
