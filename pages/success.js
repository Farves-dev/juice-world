import React from "react";
import OrderModal from "../components/OrderModal";

const success = () => {
  return (
    <div>
      <OrderModal opened={true} paymentMethod={0} />
    </div>
  );
};

export default success;
