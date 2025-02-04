"use client";

import Header from "@/components/Header";
import HeroProducts from "@/components/Products/HeroProducts";
import ReviewsSection from "@/components/Testimonials/ReviewSection";
import { ReviewsData } from "@/.data/ReviewsData";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box p={0}>
      <Header />
      <HeroProducts />
      <ReviewsSection reviews={ReviewsData} />
    </Box>
  );
}
