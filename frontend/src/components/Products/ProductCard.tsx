"use client";

import { Box, Text, Image, VStack, Flex } from "@chakra-ui/react";
import { Collapsible } from "@chakra-ui/react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  currency?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  currency = "₦",
  description,
}) => {
  return (
    <Box
      rounded="4xl"
      overflow="hidden"
      bg="brand.navbar"
      shadow="lg"
      transition="all 0.3s"
      width="256px"
      height="426px"
      mb={5}
      _hover={{ transform: "translateY(-4px)" }}
    >
      <Box position="relative" cursor="pointer">
        {/* Product Image */}
        <Image
          src={image}
          alt={title}
          width="full"
          height="280px"
          objectFit="cover"
          roundedBottomLeft="4xl"
        />

        {/* Product Info */}
        {/* <Box
          position="absolute"
          top={0}
          right={0}
          bg="brand.primary"
          color="white"
          p={2}
          roundedBottomLeft="4xl"
        >
          New
        </Box> */}

        {/* Product Details */}
        <Box position="absolute" bottom="-123px" left="0" right="0">
          <VStack
            roundedTopRight="4xl"
            gap={2}
            p={4}
            align="start"
            bg="brand.navbar"
          >
            <Collapsible.Root>
              <Collapsible.Trigger>
                <Text cursor="pointer" fontSize="lg" fontWeight="medium">
                  {title}
                </Text>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box p={4}>
                  <Text color="brand.text">{description}</Text>
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>

            <Text
              fontSize="xl"
              fontWeight="bold"
              color="brand.HeroProductsTitle"
            >
              {currency} {price.toLocaleString()}
            </Text>
          </VStack>

          {/* Buy now / add to cart Content */}
          <Flex align="center" justify="space-between" px={9}>
            <Box color="brand.text" fontWeight="bold" cursor="pointer">
              Buy Now
            </Box>
            <Box color="brand.primary" fontWeight="bold" cursor="pointer">
              Add to Cart
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
