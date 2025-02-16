import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const about = () => {
  return (
    <Container maxW="container.xl" py="20">
      <Box textAlign="center" borderTop="1px"  px="64" >
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          About Us
        </Text>
        <Text>
          Fragrance Planet is your home of affordable premium fragrances and
          perfumes specifically created for your pleasure. We stock a wide
          collection of fragrances created with the finest raw materials,
          natural aroma ingredients by the most experienced experts across
          continents.
        </Text>
      </Box>
    </Container>
  );
};

export default about;
