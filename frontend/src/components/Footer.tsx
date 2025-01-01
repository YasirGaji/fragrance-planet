import { Box, Text, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4}>
      <Flex justify="center" align="center">
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Fragrance Planet. All rights reserved.
        </Text>
        <Link href="/privacy" ml={4} _hover={{ textDecoration: "underline" }}>
          Privacy Policy
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;