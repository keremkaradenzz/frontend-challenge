import "../styles/globals.css";
import Header from "../components/Header/Header"
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Component {...pageProps} />
      </Header>
    </>
  );
}

export default MyApp;
