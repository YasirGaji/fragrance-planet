import { ChakraProvider } from "@chakra-ui/react";
import { render } from "../utils/test-utils";
import Page from "@/app/page";
import { system } from "@/styles/theme";

// Wrapper component to provide ChakraProvider
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <TestWrapper>
        <Page />
      </TestWrapper>
    );
  });
});
