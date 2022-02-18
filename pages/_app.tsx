// import "../styles/globals.css";
// import "../style.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, global state
  //Layout
  // props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
