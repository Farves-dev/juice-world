import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>Juice World</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
