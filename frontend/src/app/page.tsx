"use client";

import Header from "@/components/Header";
import HeroProducts from "@/components/HeroProducts";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box p={0}>
      <Header />
      <HeroProducts />
    </Box>
  );
}
