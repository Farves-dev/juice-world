import React, { useState } from "react";
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import css from "../styles/Cart.module.css";
import { FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";

const Cart = () => {
  const cartData = useStore((state) => state.cart);
  const removeJuice = useStore((state) => state.removeJuice);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const router = useRouter();
  const [order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
  );

  const handleRemove = (i) => {
    removeJuice(i);
    toast.error("Item Removed");
  };

  const total = () =>
    cartData.juices.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleOnDelivery = () => {
    setPaymentMethod(1);
    typeof window !== "undefined" && localStorage.setItem("total", total());
  };

  const handleCheckout = async () => {
    typeof window !== "undefined" && localStorage.setItem("total", total());
    setPaymentMethod(0);
    const response = await fetch("api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData.juices),
    });

    if (response.status === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");
    router.push(data.url);
  };
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Juice</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th> </th>
            </thead>

            <tbody>
              {cartData.juices.length > 0 &&
                cartData.juices.map((juice, i) => {
                  return (
                    <tr key={i} className={css.tr}>
                      <td>
                        <img
                          src={urlFor(juice.image)}
                          alt={juice.name}
                          title={juice.name}
                          className={css.imgTd}
                        />
                      </td>

                      <td>{juice.name}</td>

                      <td>{juice.price}</td>

                      <td>{juice.quantity}</td>

                      <td>{juice.price * juice.quantity}</td>

                      <td className={css.x} onClick={() => handleRemove(i)}>
                        <FaTimes />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className={css.juiceCart}>
          <h3>Juice Cart</h3>

          <div className={css.cart}>
            <div className={css.items}>
              <span>Items</span>
              <span>{cartData.juices.length}</span>
            </div>

            <div className={css.total}>
              <span>Total</span>
              <span>$ {total()}</span>
            </div>

            {!order && cartData.juices.length > 0 ? (
              <div className={css.btns}>
                <div className={`btn ${css.btn1}`} onClick={handleCheckout}>
                  Pay Now
                </div>
                <div className={`btn ${css.btn2}`} onClick={handleOnDelivery}>
                  Pay on Delivery
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Toaster />
      <OrderModal
        opened={paymentMethod === 1}
        setOpened={setPaymentMethod}
        paymentMethod={paymentMethod}
      />
    </div>
  );
};

export default Cart;
