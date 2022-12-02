import { Modal } from "@mantine/core";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createOrder } from "../lib/orderHandler";
import { useStore } from "../store/store";
import css from "../styles/OrderModal.module.css";
import { useRouter } from "next/router";

const OrderModal = ({ opened, setOpened, paymentMethod }) => {
  const total = typeof window !== "undefined" && localStorage.getItem("total");
  const [formData, setFormData] = useState({});
  const resetCart = useStore((state) => state.resetCart);
  const router = useRouter();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({ ...formData, total, paymentMethod });
    toast.success("Order placed");
    resetCart();
    {
      typeof window !== "undefined" && localStorage.setItem("order", id);
    }

    router.push(`/order/${id}`);
  };

  return (
    <Modal opened={opened} onClose={() => setOpened(null)}>
      <form action="" className={css.formContainer} onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          onChange={handleInput}
          type="text"
          name="phone"
          required
          placeholder="Phone Number"
        />

        <textarea
          name="address"
          placeholder="Address"
          cols={8}
          rows={3}
          onChange={handleInput}
        ></textarea>

        <span>
          You will pay <span>$ {total}</span> on delivery
        </span>

        <button className={`btn ${css.btn}`} type="submit">
          Place Order
        </button>
      </form>
      <Toaster />
    </Modal>
  );
};

export default OrderModal;
