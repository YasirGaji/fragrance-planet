import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="brand.background" color="brand.text" py={16}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
        <Image 
          src="/images/logo.jpeg" 
          alt="Fragrance Planet Logo" 
          w="60px" 
          h="auto"
          borderRadius= "16px"
        />

        <Text fontSize="xl" fontWeight="bold">Filters</Text>

        <Text fontSize="xl" fontWeight="bold">Search</Text>

        <Flex gap={4}>
          <Link href="/" _hover={{ textDecoration: "underline" }}>Sign in</Link>
          <Link href="/products" _hover={{ textDecoration: "underline" }}>Cart</Link>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>About us</Link>
        </Flex>
        
      </Flex>
    </Box>
  );
};

export default Header;