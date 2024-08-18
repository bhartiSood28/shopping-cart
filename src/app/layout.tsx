'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { CartItemsProvider } from "./context/CartContext";
import Header from "./_components/Header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Toaster />
        <CartItemsProvider>
          <Header />{children}</CartItemsProvider>
      </body>
    </html>
  );
}
