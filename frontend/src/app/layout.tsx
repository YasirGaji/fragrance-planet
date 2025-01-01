import Header from '@/components/Header';
import { ChakraProviderWrapper } from './chakra-provider';
import './globals.css';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <ChakraProviderWrapper>
        <body>
          <Header />
          <main style={{ minHeight: '90vh' }}>{children}</main>
          <Footer />
        </body>
      </ChakraProviderWrapper>
    </html>
  );
}
