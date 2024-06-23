import theme from "@/styles/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box} from '@chakra-ui/react'
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box position='absolute' bg="rgba(5, 3, 43, 0.88)"></Box>
        <Navbar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}