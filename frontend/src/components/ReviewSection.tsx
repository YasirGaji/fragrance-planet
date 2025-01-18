import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";

interface Review {
  id: string;
  author: {
    name: string;
    image: string;
  };
  rating: number;
  review: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <Box
      py={20}
      px={4}
      position="relative"
      bg="brand.primary"
      overflow="hidden"
      maxHeight={{ base: "", md: "888px" }}
    >
      {/* Background Gradient Effect */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at center, yellow.300 0%, orange.400 40%, brand.primary 100%)"
        opacity={0.8}
        zIndex={1}
      >
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Section Header */}
        <VStack gap={3} mb={16} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
          >
            Our reviews
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.700">
            What our customers say about us.
          </Text>
        </VStack>

        {/* Reviews Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
          autoFlow="dense"
        >
          {reviews.map((review) => (
            <GridItem key={review.id}>
              <ReviewCard {...review} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewsSection;
