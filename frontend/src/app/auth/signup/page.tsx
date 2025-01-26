"use client";

import {
  Box,
  Container,
  VStack,
  Input,
  Button,
  Text,
  Link as ChakraLink,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <Container maxW="container.xl" py={20}>
      <Box
        mx="auto"
        maxH="593px"
        maxW="608px"
        borderWidth="1px"
        borderRadius="2xl"
        p={16}
        bg="brand.navbar"
        shadow="lg"
      >
        <VStack gap={6} align="stretch">
          {/* Header */}
          <Heading textAlign="center" fontSize="2xl" fontWeight="bold" mb={2}>
            Welcome to Fragrance Planet
          </Heading>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                borderRadius="md"
              />

              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                borderRadius="md"
              />

              {/* hr */}
              <HStack my={4}>
                <hr style={{ marginBottom: "2.5rem" }} />
                <Text fontSize="sm" color="brand.text" whiteSpace="nowrap">
                  Or
                </Text>
                <hr style={{ marginBottom: "2.5rem" }} />
              </HStack>

              {/* Google Sign In */}
              <Button
                width="full"
                variant="outline"
                size="lg"
                onClick={() => {
                  /* Handle Google sign in */
                }}
              >
                Continue With Google
              </Button>

              {/* Sign Up Button */}
              <Button
                type="submit"
                width="full"
                bg="brand.primary"
                color="white"
                size="lg"
                _hover={{
                  bg: "brand.primary",
                  opacity: 0.9,
                }}
              >
                Sign Up
              </Button>
            </VStack>
          </form>

          {/* Terms Text */}
          <Text fontSize="sm" color="brand.text" textAlign="center">
            Terms of{" "}
            <ChakraLink
              color="brand.primary"
              href="/terms"
              textDecoration="none"
            >
              service and privacy policy
            </ChakraLink>{" "}
            applied
          </Text>
        </VStack>
      </Box>

      {/* Sign In Link */}
      <Text textAlign="center" mt={14}>
        Already have an account?{" "}
        <Link href="/auth/login" passHref>
          <ChakraLink color="brand.primary">Sign In</ChakraLink>
        </Link>
      </Text>
    </Container>
  );
};

export default SignUp;
