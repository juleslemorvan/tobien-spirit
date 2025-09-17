"use client";

import React, { useRef, useState } from "react";
import {
  Stack,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Text,
  Flex,
  Button,
  Heading,
  Image,
  Box,
  Select,
  useToast,
  Hide,
} from "@chakra-ui/react";



const Form = () => {

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

 const form = useRef(null);



  return (
    <section
      
      style={{
        
        display: "flex",
        flexDirection: "column",
        margin: "0px 20px 10px 20px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "Figtree, sans-serif;",
      }}
      id="contact"
    >
      <Box
        position="absolute"
        bottom={{ base: "8", md: "5" }}
        right={{ base: "2", md: "6" }}
      >
    
      </Box>

      <Flex
        py={2}
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h2"
          fontWeight="bold"
          textAlign="center"
          fontFamily="Figtree, sans-serif;"
          my="20px"
          
        >
          Contact
        </Heading>
      </Flex>

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        w="100%"
      >
        

        <form ref={form} >
          
          <Stack spacing={5} w={{ base: "300px", md: "500px" }}>
            <FormLabel htmlFor="identity" fontFamily="Figtree, sans-serif;" id="identity">
              identité
              <Select
                name="identity"
                isRequired
                placeholder="identity"
                aria-label="identity"
                style={{ borderColor: "#355995" }}
              >
                <option>option1</option>
                <option>option2</option>
                
              </Select>
            </FormLabel>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name" fontFamily="Figtree, sans-serif;" id="first-name">
                first-name
              </FormLabel>
              <Input
                type="text"
                id="first-name"
                placeholder="first-name"
                aria-label="first-name"
                name="first-name"
                style={{ borderColor: "#355995" }}
                autoComplete="off"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="mail" fontFamily="Figtree, sans-serif;" id="mail">
                mail
              </FormLabel>
              <Input
                type="email"
                id="mail"
                placeholder="mail"
                aria-label="email"
                name="mail"
                style={{ borderColor: "#355995" }}
                autoComplete="off"
              />
            </FormControl>

            <FormControl isRequired>
              <Text mb="8px" fontFamily="Figtree, sans-serif;">
               message
              </Text>
              <FormLabel htmlFor="message">
              <Textarea 
                placeholder="message"
                name="message"
                id="message"
                style={{ borderColor: "#355995" }}
                autoComplete="off"
                minHeight="125px"
              />
              </FormLabel>
            </FormControl>

            <Button
              type="submit"
              variant="outline"
              borderColor="#355995"
              fontFamily="Figtree, sans-serif;"
            >
              submit
            </Button>
          </Stack>
        </form>
        
      </Flex>
      
      
    </section>
  );
};

export default Form;

