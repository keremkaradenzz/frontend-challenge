import "../styles/globals.css";
import Header from "../components/Header/Header"
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
      <Header>
        <Component {...pageProps} />
      </Header>
      </QueryClientProvider>
   
  );
}


export default MyApp;
