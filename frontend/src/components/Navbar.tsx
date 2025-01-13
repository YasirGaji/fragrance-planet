"use client";

import {
  Box,
  Flex,
  Link,
  Image,
  Input,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Search, ShoppingCart, GiftIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorModeButton } from "./ui/color-mode";
import { InputGroup } from "./ui/input-group";
import WomenIcon from "./icons/womenIcon";
import MenIcon from "./icons/menIcon";
import UnisexIcon from "./icons/unisexIcon";
import BestsellerIcon from "./icons/bestsellerIcon";
import FilterMenuIcon from "./icons/filtermenuIcon";

const Navbar = () => {
  return (
    <Box
      as="nav"
      borderBottom="1px solid"
      borderColor="brand.navbar"
      py={3}
      px={4}
      position="sticky"
      top={0}
      bg="brand.navbar"
      zIndex={4}
      shadow="2xl"
    >
      {/* Desktop */}

      <Box hideBelow="md">
        <Flex
          justify="space-between"
          align="center"
          maxW="6xl"
          mx="auto"
          px={4}
        >
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
              <Button
                variant="outline"
                borderColor="brand.text"
                p={3}
                size="xs"
              >
                <FilterMenuIcon />
                Filters
              </Button>
            </MenuTrigger>

            <MenuContent>
              <MenuItem value="new-txt-a">
                <Link href="/women">
                  <WomenIcon />
                  <Box flex="1">Women</Box>
                </Link>
              </MenuItem>

              <MenuItem value="new-file-a">
                <Link href="/men">
                  <MenIcon />
                  <Box flex="1">Men</Box>
                </Link>
              </MenuItem>

              <MenuItem value="new-win-a">
                <Link href="/unisex">
                  <UnisexIcon />
                  <Box flex="1">Unisex</Box>
                </Link>
              </MenuItem>

              <MenuItem value="open-file-a">
                <Link href="/bestsellers">
                  <BestsellerIcon />
                  <Box flex="1">Best Sellers</Box>
                </Link>
              </MenuItem>

              <MenuItem value="export-a">
                <Link href="/recommended">
                  <BestsellerIcon />
                  <Box flex="1">Recommended</Box>
                </Link>
              </MenuItem>

              <MenuItem value="export-b">
                <Link href="/bodymists">
                  <UnisexIcon />
                  <Box flex="1">Body Mists</Box>
                </Link>
              </MenuItem>

              <MenuItem value="export-c">
                <Link href="/celebrity">
                  <UnisexIcon />
                  <Box flex="1">Celebrity</Box>
                </Link>
              </MenuItem>

              <MenuItem value="export-d">
                <Link href="/miniatures">
                  <UnisexIcon />
                  <Box flex="1">Miniatures</Box>
                </Link>
              </MenuItem>

              <MenuItem value="export-e">
                <Link href="/giftsets">
                  <GiftIcon />
                  <Box flex="1">Gift sets</Box>
                </Link>
              </MenuItem>

              <MenuItem value="export-f">
                <Link href="/perfumeoil">
                  <UnisexIcon />
                  <Box flex="1">Perfume oil</Box>
                </Link>
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
                  borderColor: "brand.primary",
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
            <Link href="/cart" _hover={{ textDecoration: "underline" }}>
              Cart
              <ShoppingCart size="17px" />
            </Link>

            <Link href="/about" _hover={{ textDecoration: "underline" }}>
              About us
            </Link>
          </Flex>

          {/* Color mode switch */}
          <ColorModeButton ml={12} />
        </Flex>
      </Box>

      {/* Mobile */}

      <Box hideFrom="md">
        <Flex justify="space-between" align="center" w="full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.jpeg"
              alt="Fragrance Planet Logo"
              w={16}
              h={16}
              borderRadius="xl"
            />
          </Link>

          {/* Cart and Menu Icons */}
          <Flex gap={4} align="center">
            <Link href="/cart" _hover={{ textDecoration: "underline" }}>
              <ShoppingCart size={24} />
            </Link>

            <DrawerRoot>
              <DrawerBackdrop />

              <DrawerTrigger asChild>
                <Box as="button" aria-label="menu">
                  <Menu size={24} />
                </Box>
              </DrawerTrigger>

              <DrawerContent bg="brand.navbar" maxW="320px">
                <DrawerHeader>
                  <DrawerTitle>
                    <ColorModeButton />
                  </DrawerTitle>
                </DrawerHeader>

                <DrawerBody p={0}>
                  <VStack align="stretch" color="brand.text">
                    {/* Navigation Menu Items */}
                    <VStack align="stretch" p={4}>
                      {/* Categories */}
                      <Link
                        href="/women"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <WomenIcon />
                        <Text>Women</Text>
                      </Link>

                      <Link
                        href="/men"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <MenIcon />
                        Men
                      </Link>

                      <Link
                        href="/unisex"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <UnisexIcon />
                        <Text>Unisex</Text>
                      </Link>

                      <Link
                        href="/bestsellers"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <BestsellerIcon />
                        <Text>Best Sellers</Text>
                      </Link>

                      <Link
                        href="/recommended"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <BestsellerIcon />
                        <Text>Recommended</Text>
                      </Link>

                      <Link
                        href="/bodymists"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <UnisexIcon />
                        <Text>Body mists</Text>
                      </Link>

                      <Link
                        href="/celebrity"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <UnisexIcon />
                        <Text>Celebrity</Text>
                      </Link>

                      <Link
                        href="/miniatures"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <UnisexIcon />
                        <Text>Miniatures</Text>
                      </Link>

                      <Link
                        href="/giftsets"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <GiftIcon />
                        <Text>Gift sets</Text>
                      </Link>

                      <Link
                        href="/perfumeoil"
                        display="flex"
                        alignItems="center"
                        gap={3}
                      >
                        <UnisexIcon />
                        <Text>Perfume oil</Text>
                      </Link>
                    </VStack>

                    {/* Services Section */}
                    <Box p={4}>
                      <Text color="brand.text" mb={4}>
                        OUR SERVICES
                      </Text>
                      <VStack align="stretch">
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/about">About Us</Link>
                      </VStack>
                    </Box>

                    {/* Sign In Button - Fixed at bottom */}
                    <Box p={4} mt="auto">
                      <Button
                        w="100%"
                        variant="solid"
                        bg="brand.secondary"
                        color="white"
                        size="lg"
                        onClick={() => {
                          /* handle sign in */
                        }}
                      >
                        Sign In
                      </Button>
                    </Box>
                  </VStack>
                </DrawerBody>

                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
          </Flex>
        </Flex>

        {/* Mobile Search Bar */}
        <Box mt={4} mx={-4} px={4}>
          <HStack gap="3">
            <InputGroup flex="1" width="263px">
              <Input
                placeholder="Search"
                borderRadius="md"
                borderColor="brand.text"
                _focus={{
                  borderColor: "brand.primary",
                }}
              />
            </InputGroup>

            <Search size={24} />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
