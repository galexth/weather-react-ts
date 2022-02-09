import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "app/store";
import ModalError from "@components/modal/ModalError";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalError />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
