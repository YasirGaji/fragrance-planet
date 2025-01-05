'use client'


import { Box, Flex, Text, Link, Image, Button, useDisclosure } from '@chakra-ui/react';
import { Search, Menu, ShoppingCart } from 'lucide-react';


const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  
  return (
    <Box as="header" bg="brand.background" color="brand.text" py={16}>
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Image
          src="/images/logo.jpeg"
          alt="Fragrance Planet Logo"
          w="60px"
          h="auto"
          borderRadius="16px"
        />

        <Button
          leftIcon={<Menu />}
          variant="outline"
          onClick={onToggle}
          className="ml-4 md:ml-0"
        >
          Filters
        </Button>

        <Text fontSize="xl" fontWeight="bold">
          Search
        </Text>

        <Flex gap={4}>
          <Link href="/" _hover={{ textDecoration: 'underline' }}>
            Sign in
          </Link>
          <Link href="/products" _hover={{ textDecoration: 'underline' }}>
            Cart
          </Link>
          <Link href="/about" _hover={{ textDecoration: 'underline' }}>
            About us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
