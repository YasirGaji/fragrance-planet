import Header from '@/components/Header';
import { ChakraProviderWrapper } from './chakra-provider';
import './globals.css';
import Footer from '@/components/Footer';
import { Provider } from '@/components/ui/provider';

export const metadata = {
  title: 'Fragrance Planet',
  description: 'A perfume e-commerce platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ChakraProviderWrapper>
        <body>
          <Provider>
            <Header />
            <main className="main-content" style={{ minHeight: '90vh' }}>{children}</main>
            <Footer />
          </Provider>
        </body>
      </ChakraProviderWrapper>
    </html>
  );
}
