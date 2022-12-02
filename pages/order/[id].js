import React, { useEffect } from "react";
import { client } from "../../lib/client";
import css from "../../styles/Order.module.css";
import { IoReceipt } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";
import projuice from "../../assets/projuice.png";
import probox from "../../assets/probox.png";
import prosplash from "../../assets/prosplash.png";
import Image from "next/image";

const Orders = ({ order }) => {
  useEffect(() => {
    if (order.status > 3) {
      localStorage.clear();
    }
  }, [order]);
  return (
    <div className={css.container}>
      <h3 className={css.heading}>Order in Process</h3>

      <div className={css.details}>
        <div>
          <span>Order ID</span>
          <span>{order._id}</span>
        </div>

        <div>
          <span>Customer Name</span>
          <span>{order.name}</span>
        </div>

        <div>
          <span>Mobile Number</span>
          <span>{order.phone}</span>
        </div>

        <div>
          <span>Payment Method</span>
          <span>
            {order.method === 0 ? "Online Payment(Paid)" : "Cash on Delivery"}
          </span>
        </div>

        <div>
          <span>Total Amount</span>
          <span>${order.total}</span>
        </div>
      </div>

      <div className={css.statusContainer}>
        <div className={css.status}>
          <IoReceipt title="Payment" className={css.receipt} />
          <span>Payment</span>
          {order.method === 1 ? (
            <span className={`btn ${css.pending}`}>On Delivery</span>
          ) : (
            <span className={`btn ${css.pending}`}>Completed</span>
          )}
        </div>

        <div
          className={css.status}
          style={
            order.status > 1 ? { marginTop: "5rem" } : { marginTop: ".7rem" }
          }
        >
          <div className={css.juice}>
            <Image src={projuice} alt="Preparing" title="Preparing" />
          </div>
          <span>Preparing</span>
          {order.status === 1 && (
            <div className={css.spinner}>
              <Image src={prosplash} alt="Processing" />
            </div>
          )}

          {order.status > 1 && (
            <span
              className={`btn ${css.completed}`}
              style={{ marginTop: ".5rem" }}
            >
              Completed
            </span>
          )}
        </div>

        <div
          className={css.status}
          style={
            order.status > 2 ? { marginTop: "5rem" } : { marginTop: ".7rem" }
          }
        >
          <RiEBikeFill title="On the way" className={css.bike} />
          <span>On the way</span>
          {order.status === 2 && (
            <div className={css.spinner}>
              <Image src={prosplash} alt="Processing" />
            </div>
          )}

          {order.status > 2 && (
            <span className={`btn ${css.completed}`}>Completed</span>
          )}
        </div>

        <div
          className={css.status}
          style={
            order.status > 3 ? { marginTop: "5rem" } : { marginTop: ".7rem" }
          }
        >
          <div className={css.box}>
            <Image src={probox} alt="delivered" title="Delivered" />
          </div>
          <span className={css.delSpan}>Delivered</span>
          {order.status === 3 && (
            <div className={css.spinner}>
              <Image src={prosplash} alt="Processing" />
            </div>
          )}

          {order.status > 3 && (
            <span className={`btn ${css.completed}`}>Completed</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);

  return {
    props: {
      order: order[0],
    },
  };
};
