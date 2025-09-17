"use client";

import React from "react";
import { Box, Flex, Heading, Image, SimpleGrid, Stack, Text, SlideFade } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";


const Product = () => {

  const observeRef = useRef(null);
  const { inViewport, enterCount } = useInViewport(observeRef);
  const isVisible = inViewport || enterCount > 0;

  return (
    <Flex height="100vh" width="100%" bg="#1E4457" direction="column" >
      <Flex p="30px">
        <Heading as="h1" color="#EAD372" fontWeight="light" fontFamily="var(--font-pasito)">
          Our Product
        </Heading>
      </Flex>
      <Flex direction={{ base: "column", lg: "row" }} pt="30px">
        
        <Flex w="65%" align="center" justifyContent="center">
          <Flex color="white" direction="column" gap={10}>
            <Heading as="h2" color='#D8E6EB' fontFamily="var(--font-pasito)" spacing={75} fontSize="3xl">TEQUILA BLANCO</Heading>
            
              <Text fontFamily="var(--font-pasito)" fontSize="2xl">
                Our white tequila is the purest expression of blue agave.
              </Text>
              
              <Text fontFamily="var(--font-pasito)" fontSize="2xl">
                Crystalline and vibrant, with herbal notes and a soft, clean
                finish.
              </Text>
           

            <Flex>
              <Flex>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacingY={2}
                  spacingX={14}
                  alignItems="center"
                >
                  <Stack spacing={5} fontFamily="var(--font-Guida)" fontSize="xl">
                    <Text >
                      <Text as="span" fontWeight="bold">
                        Agave:
                      </Text >
                      100% Azul Tequilana Weber
                    </Text>
                    <Text>
                      <Text as="span" fontWeight="bold">
                        Origen:
                      </Text>
                      Hecho en México
                    </Text>
                  </Stack>

                  {/* Colonne droite */}
                  <Stack spacing={5} fontFamily="var(--font-Guida)" fontSize="xl">
                    <Text>
                      <Text as="span" fontWeight="bold">
                        Graduación:
                      </Text>{" "}
                      35% Vol.
                    </Text>
                    <Text>
                      <Text as="span" fontWeight="bold">
                        Contenido:
                      </Text>{" "}
                      70 CL
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="35%" align="center" justifyContent="center">
          <Box ref={observeRef}>
          <SlideFade
        in={isVisible}
        offsetX="60px" 
        transition={{ enter: { duration: 0.6, delay: 0.2 } }}
      >
          <Image src="/img/Tobien-bottle.png" w={{ base: "150px", lg: "130px" }} />
          </SlideFade>
          </Box>
        </Flex>
      </Flex>
      
    </Flex>
  );
};

export default Product;
