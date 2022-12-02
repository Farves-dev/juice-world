import React from "react";
import css from "../styles/Footer.module.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>All Right Reserved</span>
      <div className={css.socials}>
        <a href="https://www.instagram.com/" target="_blank" title="Instagram">
          <RiInstagramFill />
        </a>
        <a href="https://www.twitter.com/" target="_blank" title="Twitter">
          <FaTwitterSquare />
        </a>
        <a href="https://www.facebook.com/" target="_blank" title="Facebook">
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
