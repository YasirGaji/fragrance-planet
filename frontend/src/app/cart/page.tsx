"use client";

import SalesSection from "@/components/Products/SalesSection";
import { CartsData } from "@/datas/CartsData";
import { SalesData } from "@/datas/SalesData";
import {
  Box,
  VStack,
  Text,
  Image,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

// Define types for our cart items
interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  weight: number;
  inStock: boolean;
  brandLogo: string;
  brandLogoTitle: string;
  quantity: number;
}

const Cart = () => {
  const cartItems: CartItem[] = CartsData;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 1) {
    return (
      <Container maxW="container.xl" py="20" px="14">
        <Box
          borderWidth="1px"
          borderRadius="xl"
          bg="brand.navbar"
          shadow="xl"
          p={10}
        >
          <VStack gap={8} align="center">
            <Box
              p={8}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/images/Cart.png"
                alt="Empty Shopping Cart"
                width={182}
                height={151}
                objectFit="contain"
              />
            </Box>

            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="brand.text"
            >
              Your cart is empty.
            </Text>

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
  }

  return (
    <Container maxW="container.xl" py="20" px="">
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
        {/* Cart Items Section */}
        <Box
          shadow="xl"
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          bg="brand.navbar"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={6}>
            Cart ({cartItems.length})
          </Text>

          <hr style={{ marginBottom: "1.5rem" }} />

          <VStack gap={4} align="stretch">
            {cartItems.map((item) => (
              <Box key={item.id}>
                <Flex gap={4}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Box flex="1">
                    <Text fontSize="lg" fontWeight="bold">
                      {item.name} ({item.quantity})
                    </Text>
                    <Text color="brand.text" mb={2}>
                      Weight(kg) {item.weight}
                    </Text>
                    <Text color="green.500" fontWeight="medium">
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </Text>
                    <Image
                      src={item.brandLogo}
                      alt={item.brandLogoTitle}
                      width={50}
                      height={90}
                      objectFit="cover"
                      borderRadius="md"
                    />
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Cart Summary Section */}
        <Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            bg="brand.navbar"
            position="sticky"
            top={4}
            shadow="xl"
          >
            <Text fontSize="xl" fontWeight="bold" mb={6}>
              CART SUMMARY
            </Text>
            <hr style={{ marginBottom: "1.5rem" }} />

            <HStack justify="space-between" mb={4}>
              <Text>Subtotal</Text>
              <Text fontWeight="bold">₦{subtotal.toLocaleString()}</Text>
            </HStack>

            <Text color="brand.text" fontSize="sm" mb={6}>
              Delivery fee/weight not added yet.
            </Text>

            <Button
              w="100%"
              size="lg"
              bg="brand.primary"
              color="white"
              _hover={{ opacity: 0.9 }}
            >
              CHECKOUT (₦{subtotal.toLocaleString()})
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* Sales Section */}
      <Box>
        <Box pt={10}>
          <Text fontSize="xl" fontWeight="bold" mb={6}></Text>
          <hr style={{ marginBottom: "1.5rem" }} />
          <SalesSection
            title="HOT SALES"
            discount=""
            products={SalesData}
            displayMode="grid"
            itemsPerRow={4}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
