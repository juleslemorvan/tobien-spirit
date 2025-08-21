"use client"

import { Flex, Image } from '@chakra-ui/react'
import { keyframes } from "@emotion/react";
import React from 'react'

const Hero = () => {

  const fadeIn = keyframes
  `
  from {
    opacity: 0;
    
  }
  to {
    opacity: 1;
   
  }
`;
const images = [
  { src: "/img/hero1.webp", alt: "hero1", delay: 0.5 }, // 1s de délai
  { src: "/img/hero2.webp", alt: "hero2", delay: 0.6 }, // 0.3s de délai (apparaît avant)
  { src: "/img/hero3.webp", alt: "hero3", delay: 0.8 }, // 0.7s de délai
];
  return (
    <Flex height="100vh" width="100%" bg="#EBEEE5" justify={"center"}pt={{ base: "16vh", md: "12vh" }} align="center" direction="column" >
      {images.map(({ src, alt, delay }) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width="300px"
          objectFit="cover"
          mb={4}
          animation={`${fadeIn} 1s ease ${delay}s forwards`}
          opacity="0"
        />
      ))}
    </Flex>
  )
}

export default Hero