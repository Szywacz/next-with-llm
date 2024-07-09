import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider/ThemeProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StoreProvider from '@/lib/StoreProvider';
import Nav from '@/components/Nav/Nav';
import Toolbar from '@/components/Toolbar/Toolbar';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '@/lib/features/api/apiSlice';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Szywacz's Portfolio Website",
  description: 'Portfolio website with chatbot'
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ThemeProvider attribute="class" defaultTheme="system">
              <main className="flex min-h-screen flex-col items-center">
                <Nav />
                <Toolbar />
                {children}
              </main>
            </ThemeProvider>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
