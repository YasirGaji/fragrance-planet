import Header from '@/components/Header';
// import './globals.css';
import Footer from '@/components/Footer';
import { Provider } from '@/components/ui/provider';
import { ColorModeProvider } from '@/components/ui/color-mode';

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
        <body>
          <Provider>
            <ColorModeProvider>
              <Header />
              <main className="main-content" style={{ minHeight: '90vh' }}>
                {children}
              </main>
              <Footer />
            </ColorModeProvider>
          </Provider>
        </body>
    </html>
  );
}
