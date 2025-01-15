import { Box, Container } from "@chakra-ui/react";
import ProductSection from "./ProductSection";

const HeroProducts = () => {
  const productData = [
    {
      id: "1",
      image: "/images/product1.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "2",
      image: "/images/product2.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "3",
      image: "/images/product3.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "4",
      image: "/images/product4.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "5",
      image: "/images/product5.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
  ];

  return (
    <Box py={10} bg={"brand.HeroProducts"}>
      <Container maxW="container.xl">
        <ProductSection
          title="Perfume Set"
          discount="30% discount off!"
          products={productData}
          displayMode="carousel"
        />

        <ProductSection
          title="Designers"
          discount="30% discount off!"
          products={productData}
          displayMode="carousel"
        />
      </Container>
    </Box>
  );
};

export default HeroProducts;
