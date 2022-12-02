import React from "react";
import css from "../styles/Services.module.css";
import mobile from "../assets/mobile.png";
import lemonade from "../assets/lemonade.png";
import scooter from "../assets/scooter.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className={css.container}>
      <h2 className={css.serviceHeading}>
        What we serve to our <br /> <span>lovable customers</span>
      </h2>

      <div className={css.services}>
        <div className={css.service}>
          <div className={css.greenBlur} />

          <div className={css.mobile}>
            <Image
              src={mobile}
              alt="User Friendly Order"
              title="User Friendly Order"
            ></Image>
          </div>

          <div className={css.serviceText}>
            <h4>User friendly Order </h4>
            <p>
              We provide user friendly order service to drink our delicious
              drink
            </p>
          </div>
        </div>

        <div className={css.service}>
          <div className={css.greenBlur} />

          <div className={css.scooter}>
            <Image
              src={scooter}
              alt="Instant Delivery"
              title="Instant Delivery"
            ></Image>
          </div>

          <div className={css.serviceText}>
            <h4>Instant Delivery</h4>
            <p>Drinks will be delivered instantly to our customers</p>
          </div>
        </div>

        <div className={css.service}>
          <div className={css.greenBlur} />
          <div className={css.lemonade}>
            <Image
              src={lemonade}
              alt="Tasty Drinks"
              title="Tasty Drinks"
            ></Image>
          </div>

          <div className={css.serviceText}>
            <h4>Tasty Drinks</h4>
            <p>Not only tasty drinks, we also provide healthy drinks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
