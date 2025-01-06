'use client';

import {
  Box,
  Flex,
  Link,
  Image,
  Button,
  useDisclosure,
  Group,
  IconButton,
  Input,
} from '@chakra-ui/react';
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

        <Group attached className="ml-4 md:ml-0">
          <IconButton variant="outline" size="sm">
            <Menu />
          </IconButton>
          <Button
            variant="outline"
            onClick={onToggle}
            colorPalette="brand.primary"
            size="md"
          >
            Filters
          </Button>
        </Group>

        <Flex align="center" gap={9}>
          <Group attached>
            <Flex flex={1} maxW="800px" mx={4} className="relative">
              <Input
                placeholder="search"
                size="lg"
                borderRadius="md"
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </Flex>

            <Button
              variant="outline"
              onClick={onToggle}
              colorPalette="brand.primary"
              size="md"
            >
              Search
            </Button>
          </Group>

          <Button
            onClick={onToggle}
            colorPalette="brand.secondary"
            size="md"
            variant="outline"
          >
            Sign in
          </Button>
        </Flex>

        <Flex gap={9} justify="space-between" align="center">
          <Link href="/products" _hover={{ textDecoration: 'underline' }}>
            <Group attached className="ml-4 md:ml-0">
              <Button
                variant="outline"
                onClick={onToggle}
                colorPalette="brand.primary"
                size="md"
              >
                Cart
              </Button>
              <IconButton variant="outline" size="sm">
                <ShoppingCart />
              </IconButton>
            </Group>
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
