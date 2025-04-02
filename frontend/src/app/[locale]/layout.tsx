import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css';
import { locales } from '@/lib/i18n';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export type Locale = (typeof locales)[number];

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My professional portfolio website',
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // パラメータを非同期で使用
  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header locale={locale} />
            <main className="flex-grow">{children}</main>
            <Footer locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
