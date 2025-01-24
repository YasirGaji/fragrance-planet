"use client";

import Header from "@/components/Header";
import HeroProducts from "@/components/Products/HeroProducts";
import ReviewsSection from "@/components/Testimonials/ReviewSection";
import { Box } from "@chakra-ui/react";

const reviewsData = [
  {
    id: "1",
    author: {
      name: "Pamela brown",
      image: "/images/pamela.jpg",
    },
    rating: 5,
    review:
      "Simply the best perfume that I have bought so far. Super clean and nice fragrance, intuitive documentations, and most important of all the best product.",
  },
  {
    id: "2",
    author: {
      name: "Jaydeen green",
      image: "/images/pamela.jpg",
    },
    rating: 3,
    review:
      "Simply the best perfume that I have bought so far. Super clean and nice fragrance, intuitive documentations, and most important of all the best product.",
  },
  {
    id: "3",
    author: {
      name: "Jaydeen green",
      image: "/images/pamela.jpg",
    },
    rating: 5,
    review:
      "Simply the best perfume that I have bought so far. Super clean and nice fragrance, intuitive documentations, and most important of all the best product.",
  },
];

export default function HomePage() {
  return (
    <Box p={0}>
      <Header />
      <HeroProducts />
      <ReviewsSection reviews={reviewsData} />
    </Box>
  );
}
