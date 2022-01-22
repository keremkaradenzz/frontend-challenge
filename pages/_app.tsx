import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../components/Header/Header";
import Titles from "../components/Titles/Titles";
import Footer from "../components/Footer/Footer";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Titles />
      <main style={{ overflowY: "hidden",minHeight: "58.2vh",height: "100%"}}>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </QueryClientProvider>
  );
}

export default MyApp;
