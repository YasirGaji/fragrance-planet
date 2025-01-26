import { Box, Container } from "@chakra-ui/react";
import ProductSection from "./ProductSection";
import SalesSection from "./SalesSection";
import { ProductsData } from "@/datas/ProductsData";
import { SalesData } from "@/datas/SalesData";

const HeroProducts = () => {
  return (
    <Box>
      <Container pt={10} bg={"brand.HeroProducts"} maxW="full">
        <ProductSection
          title="Perfume Set"
          discount="30% discount off!"
          products={ProductsData}
          displayMode="carousel"
        />

        <ProductSection
          title="Designers"
          discount="30% discount off!"
          products={ProductsData}
          displayMode="carousel"
        />
      </Container>

      <Container pt={10} maxW="container.xl">
        <SalesSection
          title="Sales"
          discount="50% discount off!"
          products={SalesData}
          displayMode="grid"
          itemsPerRow={4}
        />
      </Container>
    </Box>
  );
};

export default HeroProducts;
