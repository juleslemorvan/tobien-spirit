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
import { useEffect } from "react";
import { useParams } from "next/navigation";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();

  useEffect(() => {
    onClose();
  }, [params]);

  return (
    <HStack
      justify="space-between"
      align="center"
      p={{ base: "30px", xl: "20px" }}
      h={{ base: "16vh", md: "15vh" }}
      bg="red.100"
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
          icon={<GiHamburgerMenu size={20} color="#db9d73" />}
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
      >
        <DrawerOverlay />
        <DrawerContent justifyContent="space-evenly" fontSize="30px">
          <DrawerCloseButton margin="30px" padding="15px" size="lg" />
          <NavBar />
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};