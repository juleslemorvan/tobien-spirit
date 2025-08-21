"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


export function Providers({ children }) {
  return (
    <ChakraProvider >
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ChakraProvider>
  );
}
