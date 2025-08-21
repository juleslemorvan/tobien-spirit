"use client";
// import { Link } from "@chakra-ui/next-js";
import Link from "next/link"
// import NextLink from "next/link";
import { Image, Stack, Box, Flex, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setselectedLanguage] = useState("EN");

  useEffect(() => {
    if (selectedLanguage === "EN") {
      i18n.changeLanguage("en");
    } else if (selectedLanguage === "PT") {
      i18n.changeLanguage("pt");
    } 
  }, [selectedLanguage]);

  return (
    <Stack
      as="nav"
      flex="1"
      direction={{ base: "column", md: "row" }}
      align="center"
      justifyContent={{ base: "space-around", md: "flex-end" }}
      
    >
      <Flex>
        
      </Flex>
      <Stack
        textAlign={{ base: "center" }}
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        gap={20}
        mr={{ base: "0", lg: "175px" }}
        fontFamily="Figtree, sans-serif;"
      >
        <Link href="/#cocktails" passHref>
          <Box
            letterSpacing={{ base: "0px", md: "1px" }}
           
            color="#1F4458"
          >
            
            {t("navbar.brands")}
          </Box>
        </Link>

        <Link href="/news" passHref>
          <Box
            letterSpacing={{ base: "0px", md: "1px" }}
            color="#1F4458"
          >
            
            {t("news")}
          </Box>
        </Link>

       <Link href="/#contact" passHref>
          <Box
            letterSpacing={{ base: "0px", md: "1px" }}
             color="#1F4458"
          >
            
            {t("contact")}
          </Box>
        </Link>
      </Stack>
      

      <Flex display="flex" mr={{ base: "0px", md: "60px" }}>
        <Select
          value={selectedLanguage}
          onChange={(e) => setselectedLanguage(e.target.value)}
          color="#1F4458"
          fontWeight="bolder"
          boxShadow="10%"
          border="1px solid black"
        >
          <option value="EN" onSelect={() => i18n.changeLanguage("en")} id="EN">
            EN
          </option>
          <option value="PT" onSelect={() => i18n.changeLanguage("pt")} id="PT">
            PT
          </option>
          
        </Select>
      </Flex>
    </Stack>
  );
};
