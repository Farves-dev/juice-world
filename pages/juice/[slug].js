import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Juice.module.css";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

const Juice = ({ juice }) => {
  const [quantity, setQuantity] = useState(1);
  const addJuice = useStore((state) => state.addJuice);

  const handleQuan = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const addToCart = () => {
    addJuice({ ...juice, price: juice.price, quantity: quantity });
    toast.success("Added to Cart");
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.juiceDetails}>
          <h2>{juice.name}</h2>
          <p>{juice.benefit}</p>

          <div className={css.priceWrapper}>
            <div className={css.juicePrice}>
              <span>$</span>
              <span>{juice.price}</span>
            </div>

            <p>Quantity</p>
            <div className={css.quantity}>
              <div className={css.numbers}>
                <AiFillMinusCircle
                  className={css.minus}
                  onClick={() => handleQuan("dec")}
                />
                <span>{quantity}</span>
                <AiFillPlusCircle
                  className={css.plus}
                  onClick={() => handleQuan("inc")}
                />
              </div>
            </div>
          </div>

          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Add to Cart
          </div>
        </div>

        <div className={css.juiceImg}>
          <img src={urlFor(juice.image)} alt="" />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Juice;

export async function getStaticProps({ params }) {
  const query = `*[_type == "juice" && slug.current == $slug]`;

  const options = { slug: params.slug };

  const juice = await client.fetch(query, options);

  return {
    props: { juice: juice[0] },
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "juice"]{ 'slug': slug.current }`;

  const juices = await client.fetch(query);

  const paths =
    juices?.map((juice) => ({
      params: {
        slug: juice.slug,
      },
    })) || [];

  return {
    paths,
    fallback: false,
  };
}
