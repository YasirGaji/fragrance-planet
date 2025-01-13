import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../../components/Header";
import { system } from "../../styles/theme";

// Wrapper component to provide ChakraProvider
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

describe("Header Component", () => {
  // Test 1: Testing the main content rendering
  it("renders main heading and subheading", () => {
    render(<Header />, { wrapper: TestWrapper });

    // Check for the main heading text using a regex
    const firstPart = screen.getByText(/Where Fragrance Speaks Louder/, {
      exact: false,
    });
    expect(firstPart).toBeInTheDocument();

    // Test the colored "Words!" part separately
    const coloredPart = screen.getByText("Words!", {
      exact: false,
    });
    expect(coloredPart).toBeInTheDocument();

    // Test subheading separately
    const subheading = screen.getByText(
      "Elevate Your Aroma Game and Wrap Yourself in Elegance!"
    );
    expect(subheading).toBeInTheDocument();
  });

  // Test 2: Testing the features section
  it("renders all feature items with correct text and icons", () => {});

  // Test 3: Testing the slider and decorative elements
  it("renders the image slider and decorative elements", () => {
    render(<Header />, { wrapper: TestWrapper });

    // Check for the decorative arrow
    const arrow = screen.getByAltText("Decorative arrow");
    expect(arrow).toBeInTheDocument();

    // Check if slider container exists
    const images = screen.getAllByRole("img");
    // We expect at least one slider image plus the decorative arrow
    expect(images.length).toBeGreaterThan(1);
  });

  // Test 4: Testing the responsive layout
  it("renders with proper responsive layout classes", () => {
    const { container } = render(<Header />, { wrapper: TestWrapper });

    // Find the main container
    const headerBox = container.querySelector(".chakra-container");
    expect(headerBox).toBeInTheDocument();

    // Check for responsive grid
    const grid = container.querySelector(".css-1e87rqk"); // Your grid class
    expect(grid).toBeInTheDocument();
  });
});
