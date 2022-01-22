import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Header from "../components/Header/Header";
import Titles from "../components/Titles/Titles";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
           <Header />
           <Titles />
           <div style={{overflowY:'hidden',width:"100%"}}>
           <Component {...pageProps} />
           </div>
      </QueryClientProvider>
   
  );
}


export default MyApp;
