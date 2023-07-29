import './globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { Providers } from '../providers';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick and Morty App',
  description: 'Rick and Morty App made with Next.js 13',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
