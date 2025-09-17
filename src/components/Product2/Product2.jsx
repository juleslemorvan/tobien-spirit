"use client";

import { Flex, Image,Box, SlideFade } from '@chakra-ui/react'
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

const Product2 = () => {

    const observeRef = useRef(null);
  const { inViewport, enterCount } = useInViewport(observeRef);
  const isVisible = inViewport || enterCount > 0;
  return (
    <Flex height="100vh" width="100%" bg="#40626F" direction={{ base: "column", lg: "row" }}>
        <Flex w="35%" align="center" justifyContent="center">
          <Box ref={observeRef}>
          <SlideFade
        in={isVisible}
        offsetX="-60px" 
        transition={{ enter: { duration: 0.6, delay: 0.2 } }}
      >
            <Image src="/img/tobienboxblue1.webp" w={{ base: "150px", lg: "300px" }} />
            </SlideFade>
            </Box>
        </Flex>
        <Flex w="65%" align="center" justifyContent="center"></Flex>
    </Flex>
  )
}

export default Product2