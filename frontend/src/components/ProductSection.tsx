import { Box, Text, Container, Flex, Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description?: string;
}

interface ProductSectionProps {
  title: string;
  discount?: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  discount,
  products,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Box px={4} paddingBottom={32}>
      <Container maxW="container.xl">
        {/* Section Header */}

        {/* Discount Tag */}
        {discount && (
          <Text
            color="red.500"
            fontSize="24px"
            fontWeight="medium"
            display={{ base: "none", md: "block" }}
          >
            {discount}
          </Text>
        )}

        {/* Title */}
        <Flex align="center" justifyContent="center" mb={10}>
          <Box>
            <Box
              px={6}
              py={2}
              rounded="lg"
              borderColor="brand.HeroProductsTitle"
              borderWidth="2px"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="brand.HeroProductsTitle"
              >
                {title}
              </Text>
            </Box>
            {discount && (
              <Text
                display={{ base: "block", md: "none" }}
                color="red.500"
                fontSize="16px"
                fontWeight="medium"
                mt={2}
                textAlign="center"
              >
                {discount}
              </Text>
            )}
          </Box>
        </Flex>

        {/* Products Grid */}
        <Flex align="center" justifyContent="center">
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isExpanded={expandedId === product.id}
                onToggle={() => {
                  setExpandedId(expandedId === product.id ? null : product.id);
                }}
              />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductSection;
