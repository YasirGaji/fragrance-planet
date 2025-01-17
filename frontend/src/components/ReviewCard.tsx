import { Box, HStack, Text } from "@chakra-ui/react";
import { Star } from "lucide-react";
import { Avatar } from "./ui/avatar";

interface ReviewCardProps {
  author: {
    name: string;
    image: string;
  };
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, rating, review }) => {
  return (
    <Box
      bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200"
      backdropFilter="blur(12px)"
      p={6}
      borderRadius="xl"
      boxShadow="lg"
      position="relative"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-4px)" }}
    >
      {/* Star Rating */}
      <HStack gap={1} mb={4}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            color={index < rating ? "yellow" : "gray"}
            fill={index < rating ? "white" : "none"}
          />
        ))}
      </HStack>

      {/* Review Text */}
      <Text color="#333333" mb={4}>
        {review}
      </Text>

      {/* Author Section */}
      <HStack gap={3}>
        <Avatar src={author.image} name={author.name} size="sm" />
        <Text fontWeight="medium" color="#333333">
          {author.name}
        </Text>
      </HStack>
    </Box>
  );
};

export default ReviewCard;
