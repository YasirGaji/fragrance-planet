import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/styles/theme";

// Wrapper component to provide ChakraProvider
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

// Mock the current year to make tests consistent
const mockDate = new Date(new Date().getFullYear());
global.Date = jest.fn(() => mockDate) as unknown as DateConstructor;

describe("Footer Component", () => {
  it("renders main sections", () => {
    render(<Footer />, { wrapper: TestWrapper });

    // Check for main section headings
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("displays newsletter subscription form", () => {
    render(<Footer />, { wrapper: TestWrapper });

    // Check for newsletter elements
    expect(
      screen.getByText(/Subscribe to our newsletter/i)
    ).toBeInTheDocument();

    const emailInputs = screen.getAllByPlaceholderText("Enter your Email");
    expect(emailInputs).toHaveLength(2);

    // Verify each email input
    emailInputs.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("placeholder", "Enter your Email");
    });

    const subscribe = screen.getAllByText("Subscribe Now");
    expect(subscribe).toHaveLength(2);
  });

  it("renders all quick links", () => {
    render(<Footer />, { wrapper: TestWrapper });

    const links = ["My account", "Cart", "Checkout", "Exchange Policy"];

    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("renders social media links", () => {
    render(<Footer />, { wrapper: TestWrapper });

    const socialLinks = screen.getAllByRole("link", {
      name: /facebook|instagram|twitter/i,
    });
    expect(socialLinks).toHaveLength(3);
  });

  it("displays copyright with current year", () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(
      screen.getByText(/© Copyright Fragrance Planet/)
    ).toBeInTheDocument();
  });

  it("displays contact information", () => {
    render(<Footer />, { wrapper: TestWrapper });

    expect(screen.getByText("Lekki Store")).toBeInTheDocument();
    expect(screen.getByText(/33, Iconic Mall/)).toBeInTheDocument();
    expect(
      screen.getByText("Email: sales@fragranceplanet.com.ng")
    ).toBeInTheDocument();
  });

  // it('validates email input in newsletter form', async () => {
  //   render(<Footer />)

  //   const emailInput = screen.getByPlaceholderText('Enter your Email')
  //   const submitButton = screen.getByText('Subscribe Now')

  //   // Test invalid email
  //   await userEvent.type(emailInput, 'invalid-email')
  //   fireEvent.click(submitButton)
  //   expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()

  //   // Test valid email
  //   await userEvent.clear(emailInput)
  //   await userEvent.type(emailInput, 'test@example.com')
  //   fireEvent.click(submitButton)
  //   expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  // })

  // // Test form submission
  // it('handles newsletter form submission', async () => {
  //   const consoleSpy = jest.spyOn(console, 'log')
  //   render(<Footer />)

  //   const emailInput = screen.getByPlaceholderText('Enter your Email')
  //   const submitButton = screen.getByText('Subscribe Now')

  //   await userEvent.type(emailInput, 'test@example.com')
  //   fireEvent.click(submitButton)

  //   expect(consoleSpy).toHaveBeenCalledWith('Newsletter subscription:', 'test@example.com')
  //   expect(emailInput).toHaveValue('')
  // })
});
