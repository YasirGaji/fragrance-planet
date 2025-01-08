'use client';

import { Box, Flex, Link, Image, Input, HStack } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Search, ShoppingCart, GiftIcon } from 'lucide-react';
import { ColorModeButton } from './ui/color-mode';
import { InputGroup } from './ui/input-group';
import WomenIcon from './icons/womenIcon';
import MenIcon from './icons/menIcon';
import UnisexIcon from './icons/unisexIcon';
import BestsellerIcon from './icons/bestsellerIcon';
import FilterMenuIcon from './icons/filtermenuIcon';

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom="1px solid"
      borderColor="brand.navbar"
      py={3}
      px={4}
      position="sticky"
      top={0}
      bg="brand.navbar"
      zIndex={4}
      boxShadow="lg"
    >
      <Flex justify="space-between" align="center" maxW="6xl" mx="auto" px={4}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Fragrance Planet Logo"
            w={12}
            h="auto"
            borderRadius="xl"
          />
        </Link>

        {/* Navigation */}
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" borderColor="brand.text" p={3} size="xs">
              <FilterMenuIcon />
              Filters
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuItem value="new-txt-a">
              <WomenIcon />
              <Box flex="1">Women</Box>
            </MenuItem>

            <MenuItem value="new-file-a">
              <MenIcon />
              <Box flex="1">Men</Box>
            </MenuItem>

            <MenuItem value="new-win-a">
              <UnisexIcon />
              <Box flex="1">Unisex</Box>
            </MenuItem>

            <MenuItem value="open-file-a">
              <BestsellerIcon />
              <Box flex="1">Best Sellers</Box>
            </MenuItem>

            <MenuItem value="export-a">
              <BestsellerIcon />
              <Box flex="1">Recommended</Box>
            </MenuItem>

            <MenuItem value="export-b">
              <UnisexIcon />
              <Box flex="1">Body Mists</Box>
            </MenuItem>

            <MenuItem value="export-c">
              <UnisexIcon />
              <Box flex="1">Celebrity</Box>
            </MenuItem>

            <MenuItem value="export-d">
              <UnisexIcon />
              <Box flex="1">Miniatures</Box>
            </MenuItem>

            <MenuItem value="export-e">
              <GiftIcon />
              <Box flex="1">Gift sets</Box>
            </MenuItem>

            <MenuItem value="export-f">
              <UnisexIcon />
              <Box flex="1">Perfume oil</Box>
            </MenuItem>
          </MenuContent>
        </MenuRoot>

        {/* Search and Sign in */}
        <HStack mr={9} gap="3">
          <InputGroup
            flex="1"
            startElement={<Search size="17px" />}
            width="450px"
          >
            <Input
              placeholder="Search"
              borderRadius="md"
              borderColor="brand.text"
              _focus={{
                borderColor: 'brand.primary',
              }}
            />
          </InputGroup>

          <Button
            variant="solid"
            p={3}
            color="white"
            background="brand.primary"
            size="sm"
          >
            Search
          </Button>

          <Link href="/login">
            <Button
              background="brand.secondary"
              color="white"
              size="sm"
              variant="solid"
              p={3}
            >
              Sign in
            </Button>
          </Link>
        </HStack>

        {/* Cart and About */}
        <Flex pl={12} gap={4} justify="space-between" align="center">
          <Link href="/cart" _hover={{ textDecoration: 'underline' }}>
            Cart
            <ShoppingCart size="17px" />
          </Link>

          <Link href="/about" _hover={{ textDecoration: 'underline' }}>
            About us
          </Link>
        </Flex>

        {/* Color mode switch */}
        <ColorModeButton ml={12} />
      </Flex>
    </Box>
  );
};

export default Header;
