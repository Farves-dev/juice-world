import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
