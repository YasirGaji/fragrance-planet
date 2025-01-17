import { Box, Container } from "@chakra-ui/react";
import ProductSection from "./ProductSection";
import SalesSection from "./SalesSection";

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

  const salesData = [
    {
      id: "1",
      image: "/images/sales1.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "2",
      image: "/images/sales2.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "3",
      image: "/images/sales3.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
    {
      id: "4",
      image: "/images/sales4.jpeg",
      title: "Body Spray Lotion",
      price: 18500,
      description: "A luxurious body spray with lasting fragrance...",
    },
  ];

  return (
    <Box>
      <Container pt={10} bg={"brand.HeroProducts"} maxW="full">
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

      <Container pt={10} maxW="container.xl">
        <SalesSection
          title="Sales"
          discount="50% discount off!"
          products={salesData}
          displayMode="grid"
          itemsPerRow={4}
        />
      </Container>
    </Box>
  );
};

export default HeroProducts;
