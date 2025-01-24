import {
  Box,
  Text,
  Container,
  Flex,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SalesCard from "./SalesCard";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  description?: string;
}

interface SalesSectionProps {
  title: string;
  discount?: string;
  products: Product[];
  displayMode: "carousel" | "grid";
  itemsPerRow?: number;
}

const SalesSection: React.FC<SalesSectionProps> = ({
  title,
  discount,
  products,
  displayMode = "grid",
  itemsPerRow = 4,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Determine items to show based on display mode and screen size
  const itemsToShow =
    useBreakpointValue({
      base: 1,
      md: displayMode === "carousel" ? 2 : itemsPerRow / 2,
      lg: displayMode === "carousel" ? 4 : itemsPerRow,
    }) || 1;

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight =
    displayMode === "carousel" &&
    scrollPosition < products.length - itemsToShow;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current && displayMode === "carousel") {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth / itemsToShow;

      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - 1)
          : Math.min(products.length - itemsToShow, scrollPosition + 1);

      setScrollPosition(newPosition);

      container.scrollTo({
        left: newPosition * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Render the products based on display mode
  const renderProducts = () => {
    if (displayMode === "carousel") {
      return (
        <Box position="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <Box
              aria-label="Previous"
              position="absolute"
              left="-5"
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              onClick={() => scroll("left")}
              bg="white"
              shadow="lg"
              rounded="full"
              width="50px"
              height="50px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ bg: "gray.100" }}
            >
              <ChevronLeft size={24} color="black" />
            </Box>
          )}

          {canScrollRight && (
            <Box
              aria-label="Next"
              position="absolute"
              right="-5"
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              onClick={() => scroll("right")}
              bg="white"
              shadow="lg"
              rounded="full"
              width="50px"
              height="50px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{ bg: "gray.100" }}
            >
              <ChevronRight size={24} color="black" />
            </Box>
          )}

          <Flex
            width={{ base: "250px", md: "1120px" }}
            ref={scrollContainerRef}
            overflowX="hidden"
            gap={6}
            px={2}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                flex={`0 0 ${85 / itemsToShow}%`}
                transition="transform 0.3s ease"
              >
                <SalesCard
                  {...product}
                  isExpanded={expandedId === product.id}
                  onToggle={() =>
                    setExpandedId(expandedId === product.id ? null : product.id)
                  }
                />
              </Box>
            ))}
          </Flex>
        </Box>
      );
    }

    return (
      <Grid
        templateColumns={{
          base: "1fr",
          md: `repeat(${itemsPerRow / 2}, 1fr)`,
          lg: `repeat(${itemsPerRow}, 1fr)`,
        }}
        gap={6}
      >
        {products.map((product) => (
          <SalesCard
            key={product.id}
            {...product}
            isExpanded={expandedId === product.id}
            onToggle={() =>
              setExpandedId(expandedId === product.id ? null : product.id)
            }
          />
        ))}
      </Grid>
    );
  };

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
        <Flex align="center" justifyContent="center" mb={20}>
          <Box>
            <Box
              px={6}
              py={2}
              rounded="lg"
              borderColor="brand.primary"
              borderWidth="2px"
            >
              <Text fontSize="2xl" fontWeight="bold" color="brand.primary">
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

        <Box bg="#FEE6A6" rounded="xl" overflow="hidden" shadow="4xl" py={20}>
          <Flex align="center" justifyContent="center">
            {renderProducts()}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default SalesSection;
