import React, { useEffect, useState } from "react";
import css from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaBars, FaTimes, FaReceipt } from "react-icons/fa";
import Link from "next/link";
import { useStore } from "../store/store";

const Header = () => {
  const [isMob, setIsMob] = useState(false);
  const [order, setOrder] = useState("");
  const items = useStore((state) => state.cart.juices.length);

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link href="/">
          <a>
            <>
              <Image
                src={logo}
                alt="Juice World"
                title="Juice World"
                width={230}
                height={100}
              />
            </>
          </a>
        </Link>
      </div>

      <ul
        className={isMob ? css.mobMenu : css.menu}
        onClick={() => setIsMob(false)}
      >
        <li>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#menu">
            <a className="link">Menu</a>
          </Link>
        </li>

        <div
          className={`${css.btn} ${css.closeBtn}`}
          onClick={() => setIsMob(!isMob)}
        >
          <FaTimes />
        </div>
      </ul>

      <div className={css.rightSide}>
        <div className={css.btn} onClick={() => setIsMob(!isMob)}>
          <FaBars />
        </div>

        <Link href="/cart">
          <div className={css.cartWrapper}>
            <div className={css.cart}>
              <BsFillHandbagFill />
              <div className={css.badge}>{items}</div>
            </div>
          </div>
        </Link>

        {order && (
          <Link href={`/order/${order}`}>
            <a>
              <div className={css.cart}>
                <FaReceipt />
                {order != "" && <div className={css.badge}>1</div>}
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
