"use client";

import { Box, VStack, Text, Image, Button, Container } from "@chakra-ui/react";
import Link from "next/link";

const Cart = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Box
        borderWidth="1px"
        borderRadius="xl"
        bg="brand.navbar"
        shadow="xl"
        p={10}
      >
        <VStack gap={8} align="center">
          {/* Cart Image */}
          <Box
            p={8}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/images/cart.png"
              alt="Empty Shopping Cart"
              width={182}
              height={151}
              objectFit="contain"
            />
          </Box>

          {/* Empty Cart Text */}
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="brand.text"
          >
            Your cart is empty.
          </Text>

          {/* Shopping Button */}
          <Link href="/products">
            <Button
              size="lg"
              bg="brand.primary"
              color="white"
              _hover={{
                bg: "brand.primary",
                opacity: 0.9,
              }}
              px={8}
            >
              Start shopping
            </Button>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default Cart;
