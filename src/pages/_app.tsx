import theme from "@/styles/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box position='absolute' top={0} left={0} right={0} zIndex={1}>
          <Navbar />
        </Box>
        <Box pt="64px">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}
