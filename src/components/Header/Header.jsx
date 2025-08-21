"use client";

import {
  HStack,
  Show,
  Hide,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { NavBar } from "../NavBar/NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();

  useEffect(() => {
    onClose();
  }, [params]);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scroll vers le bas
      } else {
        setShowNavbar(true); // Scroll vers le haut
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <HStack
     position="fixed"
      w="100%"
      p={{ base: "30px", xl: "20px" }}
      h={{ base: "16vh", md: "12vh" }}
      bg="#DDE0D7"
      backdropFilter="saturate(180%) blur(10px)" // flou derrière
        zIndex={1000}
        transition="transform 0.4s ease-in-out, background-color 0.3s ease"
        transform={showNavbar ? "translateY(0)" : "translateY(-100%)"}
        justify="space-between" 
    >
      {/* Logo visible sur desktop et mobile */}
      <Link href="/">
        <Image
          src="/img/logo-tobien.png"
          alt="logo de Tobien Spirits"
          h={{ base: "60px", md: "90px" }} // taille responsive
          w="auto"
          loading="lazy"
        />
      </Link>

      {/* Menu desktop */}
      <Hide below="md">
        <NavBar />
      </Hide>

      {/* Burger menu mobile */}
      <Show below="md">
        <IconButton
          aria-label="open mobile menu"
          onClick={onOpen}
          icon={<GiHamburgerMenu size={20} color="#1F4458" />}
          style={{ backgroundColor: "transparent" }}
        />
      </Show>

      {/* Drawer mobile */}
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        bg="#1F4458"
      >
        <DrawerOverlay />
        <DrawerContent justifyContent="space-evenly" fontSize="30px" bg="#EBEEE5">
          <DrawerCloseButton margin="30px" padding="15px" size="lg" />
          <NavBar />
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};