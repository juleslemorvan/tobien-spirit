"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { I18nextProvider } from "react-i18next";
import {theme} from '../src/theme'
import i18n from "./i18n";


export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ChakraProvider>
  );
}
