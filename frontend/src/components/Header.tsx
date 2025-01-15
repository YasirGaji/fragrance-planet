"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import FreeShippingIcon from "./icons/freeShippingIcon";
import PaymentIcon from "./icons/paymentIcon";
import OnlineSupportIcon from "./icons/onlineSupportIcon";
import FastDeliveryIcon from "./icons/fastDeliveryIcon";

const Header = () => {
  const sliderImages = [
    "/images/perfume1.jpg",
    "/images/perfume2.jpg",
    "/images/perfume3.jpg",
    "/images/perfume4.jpg",
  ];

  const features = [
    {
      icon: FreeShippingIcon,
      title: "Free Shipping",
    },
    {
      icon: PaymentIcon,
      title: "Payment Method",
    },
    {
      icon: OnlineSupportIcon,
      title: "Online Support",
    },
    {
      icon: FastDeliveryIcon,
      title: "Fast Delivery",
    },
  ];

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: 8, lg: 16 }}
          alignItems="center"
        >
          {/* Text Content */}
          <GridItem>
            <Box maxW="600px">
              <Heading
                fontSize={{ base: "32px", md: "56px" }}
                lineHeight={{ base: "35px", md: "64px" }}
                mb={4}
                mt={{ base: "-40px", md: "4px" }}
                fontWeight="700"
              >
                Where Fragrance Speaks Louder <br /> Than{" "}
                <Text as="span" color="brand.primary">
                  Words!
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "sm", md: "lg" }}
                color="brand.text"
                mt={12}
                mb={12}
              >
                Elevate Your Aroma Game and Wrap Yourself in Elegance!
              </Text>

              {/* Features */}
              <Grid
                templateColumns={{ base: "1fr, 1fr", md: "repeat(4, 1fr)" }}
                gap={4}
                p={6}
                mt={52}
                bg="brand.navbar"
                rounded="xl"
                shadow="2xl"
                display={{ base: "none", md: "flex" }}
                alignItems="center"
                justifyContent="center"
              >
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    textAlign="left"
                    justifyItems="space-between"
                  >
                    <Box as={feature.icon} />
                    <Text fontSize="sm" width="81px" pl={3} fontWeight="bold">
                      {feature.title}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </GridItem>

          {/* Decorative Arrow */}
          <Box
            position="absolute"
            left={{ base: "20%", md: "40%" }}
            top={{ base: "34%", md: "20%" }}
            zIndex={-2}
            transform={{
              base: "rotate(15deg) skew(-10deg)",
              md: "rotate(2deg) skew(-1deg)",
            }}
            transition="transform 0.3s ease"
          >
            <Image
              src="/images/Hand-drawn-arrow.png"
              alt="Decorative arrow"
              w={{ base: "150px", md: "450px" }}
              h={{ base: "100px", md: "auto" }}
              transition="transform 0.2s ease"
            />
          </Box>

          {/* Image Slider */}
          <GridItem
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            rounded="xl"
            mt={{ base: 8, md: 0 }}
          >
            <Box
              position="absolute"
              rounded="full"
              overflow="hidden"
              bg="brand.primary"
              opacity="10%"
              width={{ base: "296px", md: "600px" }}
              height={{ base: "296px", md: "600px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              filter="blur(50px)"
            />
            <Box
              position="absolute"
              rounded="full"
              overflow="hidden"
              bg="brand.primary"
              opacity="20%"
              width={{ base: "260px", md: "550px" }}
              height={{ base: "260px", md: "550px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              filter="blur(30px)"
            />
            <Box
              position="relative"
              rounded="full"
              overflow="hidden"
              opacity={0.9}
              width={{ base: "230px", md: "448px" }}
              zIndex={1}
            >
              <ImageSlider images={sliderImages} />
            </Box>
          </GridItem>

          {/* Features (Mobile) */}
          <Flex align="center" justifyContent="center">
            <Grid
              templateColumns={{ base: "1fr, 1fr", md: "repeat(4, 1fr)" }}
              p={6}
              bg="brand.navbar"
              rounded="xl"
              shadow="2xl"
              display={{ base: "flex", md: "none" }}
              alignItems="center"
              justifyContent="center"
              maxW="315px"
              overflow="hidden"
            >
              {features.map((feature, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  textAlign="left"
                  justifyItems="space-between"
                >
                  <Box as={feature.icon} />
                  <Text
                    fontSize={{ base: "7px", md: "sm" }}
                    width={{ base: "", md: "41px" }}
                    pl={1}
                    fontWeight="bold"
                  >
                    {feature.title}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
