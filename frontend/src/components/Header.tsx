import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="brand.500" color="white" py={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
        <Text fontSize="xl" fontWeight="bold">Fragrance Planet</Text>
        <Flex gap={4}>
          <Link href="/" _hover={{ textDecoration: "underline" }}>Home</Link>
          <Link href="/products" _hover={{ textDecoration: "underline" }}>Products</Link>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>About</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;