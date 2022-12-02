import React from "react";
import css from "../styles/Hero.module.css";
import pomegranate from "../assets/pomegranate.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.heading}>
          <span>Drink Everyday</span>
          <span>Feel Fresh &</span>
          <span>
            Be
            <span className={css.healthy}> Healthy</span>
          </span>
        </div>

        <div className={css.description}>
          Our goal is to feel fresh you all the day with our tasty healthy
          drink.
        </div>
        <a href="#menu">
          <button className={`btn ${css.btn}`}>Let's Drink</button>
        </a>
      </div>

      <div className={css.right}>
        <Image src={pomegranate} layout={"intrinsic"}></Image>
      </div>
    </div>
  );
};

export default Hero;
