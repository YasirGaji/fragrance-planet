"use client";

import { Box, Image } from "@chakra-ui/react";

interface SalesCardProps {
  image: string;
  title: string;
  price: number;
  currency?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  description?: string;
}

const SalesCard: React.FC<SalesCardProps> = ({ image, title }) => {
  return (
    <Box
      rounded="4xl"
      overflow="hidden"
      bg="brand.navbar"
      shadow="lg"
      transition="all 0.3s"
      width="234px"
      height="293px"
      mb={5}
      _hover={{ transform: "translateY(-4px)" }}
    >
      <Box position="relative" cursor="pointer">
        {/* Product Image */}
        <Image
          src={image}
          alt={title}
          width="234px"
          height="293px"
          objectFit="cover"
        />

        {/* Product Info */}
        <Box
          position="absolute"
          top={0}
          right={0}
          bg="#27272A"
          color="white"
          p={2}
          roundedBottomLeft="4xl"
        >
          Sales
        </Box>
      </Box>
    </Box>
  );
};

export default SalesCard;
