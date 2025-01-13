import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";
import { system } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

// Wrapper component to provide ChakraProvider
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

describe("Navbar Component", () => {
  describe("Desktop View", () => {
    beforeEach(() => {
      // Mock matchMedia for desktop view
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query !== "(max-width: 48em)",
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }));
    });

    it("renders main navigation elements", () => {
      render(<Navbar />, { wrapper: TestWrapper });

      // Logo
      const logos = screen.getAllByAltText("Fragrance Planet Logo");
      expect(logos.length).toBeGreaterThan(0);

      // Filter button
      expect(screen.getByText("Filters")).toBeInTheDocument();

      // Search elements
      const search = screen.getAllByPlaceholderText("Search");
      expect(search.length).toBeGreaterThan(0);

      expect(
        screen.getByRole("button", { name: /search/i })
      ).toBeInTheDocument();

      // Authentication
      expect(
        screen.getByRole("button", { name: /sign in/i })
      ).toBeInTheDocument();
    });

    it("renders navigation menu items when filter button is clicked", async () => {
      render(<Navbar />, { wrapper: TestWrapper });

      const filterButton = screen.getByText("Filters");
      await userEvent.click(filterButton);

      // Check for menu items
      const menuItems = [
        "Women",
        "Men",
        "Unisex",
        "Best Sellers",
        "Recommended",
      ];
      menuItems.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    // it("handles search interaction", async () => {
    //   render(<Navbar />, { wrapper: TestWrapper });

    //   const searchInput = screen.getByPlaceholderText("Search");
    //   await userEvent.type(searchInput, "perfume");
    //   expect(searchInput).toHaveValue("perfume");
    // });
  });

  it("renders color mode toggle button", () => {
    render(<Navbar />, { wrapper: TestWrapper });

    const colorModeButton = screen.getByRole("button", {
      name: /toggle color mode/i,
    });
    expect(colorModeButton).toBeInTheDocument();
  });
});

describe("Mobile View", () => {
  beforeEach(() => {
    // Mock matchMedia for mobile view
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(max-width: 48em)",
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  it("renders mobile navigation elements", () => {
    render(<Navbar />, { wrapper: TestWrapper });

    const logos = screen.getAllByAltText("Fragrance Planet Logo");
    expect(logos.length).toBeGreaterThan(0);

    // Test mobile-specific elements
    const cartIcon = screen.getByRole("link", { name: /cart/i });
    expect(cartIcon).toHaveAttribute("href", "/cart");
  });
});

it("contains correct navigation links", () => {
  render(<Navbar />, { wrapper: TestWrapper });

  const links = {
    "/cart": /cart/i,
    "/about": /about us/i,
    "/login": /sign in/i,
  };

  Object.entries(links).forEach(([href, textMatch]) => {
    const link = screen.getByRole("link", { name: textMatch });
    expect(link).toHaveAttribute("href", href);
  });
});
