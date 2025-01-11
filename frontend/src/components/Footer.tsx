/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Link,
  Fieldset,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface NewsletterFormData {
  email: string;
}

const Footer = () => {
  // State for form handling
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  // Responsive column count for the grid
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  // Newsletter submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setIsError(true);
      return;
    }
    // Handle the newsletter subscription logic here
    console.log("Newsletter subscription:", email);
    setEmail("");
    setIsError(false);
  };

  return (
    <Box bg="brand.footer" color="white" pt={20} pb={10}>
      {/* Newsletter Section */}
      <Container maxW="1119px" maxH="250px" mb={32}>
        <Box
          bg="brand.newsletter"
          rounded="xl"
          p={{ base: 6, md: 8 }}
          mx={{ base: 4, md: 0 }}
        >
          <SimpleGrid
            maxW="1119px"
            columns={{ base: 1, md: 2 }}
            gap={1}
            alignItems="center"
          >
            <Text
              color="brand.text"
              fontSize={{ base: "xl", md: "lg" }}
              fontWeight="medium"
              maxW="349px"
            >
              Subscribe to our newsletter now so you don&apos;t miss our new
              products.
            </Text>

            <form onSubmit={handleSubmit}>
              <Fieldset.Root
                maxW="646px"
                borderRadius="md"
                p={3}
                h="70px"
                background={{ base: "", md: "gray.200" }}
              >
                <Box hideBelow="md">
                  <HStack gap={4}>
                    <Input
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      bg="white"
                      color="gray.800"
                      _placeholder={{ color: "gray.500" }}
                      size="lg"
                      borderRadius="md"
                    />
                    <Button
                      type="submit"
                      bg="brand.primary"
                      size="md"
                      px={10}
                      _hover={{ bg: "brand.primary" }}
                      w="114px"
                    >
                      <Text fontSize={14} color="white">
                        Subscribe Now
                      </Text>
                    </Button>
                  </HStack>
                </Box>

                <Box hideFrom="md">
                  <VStack gap={3}>
                    <Input
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      bg="white"
                      color="gray.800"
                      _placeholder={{ color: "gray.500" }}
                      size="lg"
                      borderRadius="md"
                    />
                    <Button
                      type="submit"
                      bg="brand.primary"
                      size="md"
                      my={5}
                      px={10}
                      _hover={{ bg: "brand.primary" }}
                      w="114px"
                    >
                      <Text fontSize={14} color="white">
                        Subscribe Now
                      </Text>
                    </Button>
                  </VStack>
                </Box>

                {isError && (
                  <Fieldset.ErrorText>
                    Please enter a valid email
                  </Fieldset.ErrorText>
                )}
              </Fieldset.Root>
            </form>
          </SimpleGrid>
        </Box>
      </Container>

      {/* Main Footer Content */}
      <Container maxW="1119px">
        <SimpleGrid columns={columnCount} gap={8} px={{ base: 4, md: 0 }}>
          {/* About Us Section */}
          <VStack align="flex-start" gap={4}>
            <Text fontSize="2xl" fontWeight="bold">
              About Us
            </Text>
            <Text>
              Fragrance Planet is your home of affordable premium fragrances and
              perfumes specifically created for your pleasure. We stock a wide
              collection of fragrances created with the finest raw materials,
              natural aroma ingredients by the most experienced experts across
              continents.
            </Text>
          </VStack>

          {/* Quick Links Section */}
          <VStack align="flex-start" gap={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Quick Links
            </Text>
            <Link color="white" href="/account">
              My account
            </Link>
            <Link color="white" href="/cart">
              Cart
            </Link>
            <Link color="white" href="/checkout">
              Checkout
            </Link>
            <Link color="white" href="/policy">
              Exchange Policy
            </Link>
          </VStack>

          {/* Contact Us Section */}
          <VStack align="flex-start" gap={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Contact Us
            </Text>
            <Text fontWeight="bold">Lekki Store</Text>
            <Text>
              Address: 33, Iconic Mall Adebayo Doherty, off admiralty lekki
              phase1.
            </Text>
            <Text>Tel: (+234) 813-977-7929</Text>
            <Text>Tel: (+234) 813-977-7929</Text>
            <Text>Email: sales@fragranceplanet.com.ng</Text>

            {/* Social Media Links */}
            <HStack gap={4} pt={4}>
              <Link
                href="https://www.facebook.com/yasirgaji/"
                aria-label="Facebook"
              >
                <Facebook color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/yasirgaji/"
                aria-label="Instagram"
              >
                <Instagram color="white" />
              </Link>
              <Link href="https://x.com/YasirGaji" aria-label="Twitter">
                <Twitter color="white" />
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Copyright */}
        <Text
          textAlign="center"
          borderTop="1px"
          borderColor="gray.700"
          mt={12}
          pt={8}
          px={4}
        >
          © Copyright Fragrance Planet {new Date().getFullYear()} By{" "}
          <Link href="https://www.yasirgaji.com" color="brand.primary">
            Yasir Gaji
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
