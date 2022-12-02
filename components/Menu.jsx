import React from "react";
import { urlFor } from "../lib/client";
import css from "../styles/Menu.module.css";
import blueberry from "../assets/blueberry.png";
import Image from "next/image";
import Link from "next/link";

const Menu = ({ juices }) => {
  return (
    <div className={css.container} id="menu">
      <div className={css.heading}>
        <div className={css.headingText}>
          <h2>OUR MENU </h2>

          <p>That always make you feel fresh and energy all day</p>
        </div>

        <div className={css.headingImg}>
          <Image src={blueberry} alt="Blueberry" layout="intrinsic"></Image>
        </div>
      </div>

      <div className={css.juices}>
        {juices?.map((juice, i) => (
          <div className={css.juice} key={i}>
            <Link href={`/juice/${juice.slug.current}`}>
              <img
                src={urlFor(juice.image)}
                alt={juice.name}
                title={juice.name}
              />
            </Link>

            <p className={css.juiceName}>{juice.name}</p>

            <p className={css.juicePrice}>
              <span>$</span>
              {juice.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
