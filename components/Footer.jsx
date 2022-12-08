import React from "react";
import css from "../styles/Footer.module.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>All Right Reserved</span>
      <div className={css.socials}>
        <Link href="https://www.instagram.com/" title="Instagram">
          <a className={css.a} target="_blank">
            <RiInstagramFill />
          </a>
        </Link>

        <Link href="https://www.twitter.com/" title="Twitter">
          <a className={css.a} target="_blank">
            <FaTwitterSquare />
          </a>
        </Link>

        <Link href="https://www.facebook.com/" title="Facebook">
          <a className={css.a} target="_blank">
            <FaFacebookSquare />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
