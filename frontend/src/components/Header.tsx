'use client';

import {
  Box,
  Flex,
  Link,
  Image,
  Group,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Search, Menu, ShoppingCart, PersonStanding } from 'lucide-react';

const Header = () => {
  return (
    <Box as="header" bg="brand.background" color="brand.text" py={10}>
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Fragrance Planet Logo"
            w="60px"
            h="auto"
            borderRadius="16px"
          />
        </Link>

        {/* Navigation */}
        <MenuRoot>
          <MenuTrigger asChild>
            <Button
              variant="surface"
              colorPalette="brand.primary"
              p={3}
              size="md"
            >
              <Menu />
              Filters
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuItem value="new-txt-a">
              <PersonStanding />
              <Box flex="1">Women</Box>
            </MenuItem>
            <MenuItem value="new-file-a">
              <PersonStanding />
              <Box flex="1">Men</Box>
            </MenuItem>
            <MenuItem value="new-win-a">
              <PersonStanding />
              <Box flex="1">Unisex</Box>
            </MenuItem>
            <MenuItem value="open-file-a">
              <PersonStanding />
              <Box flex="1">Best Sellers</Box>
            </MenuItem>
            <MenuItem value="export-a">
              <PersonStanding />
              <Box flex="1">Recommended</Box>
            </MenuItem>
            <MenuItem value="export-b">
              <PersonStanding />
              <Box flex="1">Body Mists</Box>
            </MenuItem>
            <MenuItem value="export-c">
              <PersonStanding />
              <Box flex="1">Celebrity</Box>
            </MenuItem>
            <MenuItem value="export-d">
              <PersonStanding />
              <Box flex="1">Miniatures</Box>
            </MenuItem>
            <MenuItem value="export-e">
              <PersonStanding />
              <Box flex="1">Gift sets</Box>
            </MenuItem>
            <MenuItem value="export-f">
              <PersonStanding />
              <Box flex="1">Perfume oil</Box>
            </MenuItem>
          </MenuContent>
        </MenuRoot>

        {/* Search and Sign in */}
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

            <Button variant="solid" p={3} colorPalette="yellow" size="md">
              Search
            </Button>
          </Group>

          <Button colorPalette="gray" size="md" variant="solid" p={3}>
            Sign in
          </Button>
        </Flex>

        <Flex gap={9} justify="space-between" align="center">
          <Link href="/products" _hover={{ textDecoration: 'underline' }}>
            <Group attached className="ml-4 md:ml-0">
              <Button variant="outline" colorPalette="brand.primary" size="md">
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
