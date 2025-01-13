// components/ImageSlider.tsx
"use client";

import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Box position="relative" pb="100%" rounded="full">
      <Box position="absolute" inset={0} overflow="hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} position="relaabtive" pb="100%">
              <Image
                src={image}
                alt={`Perfume ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageSlider;
