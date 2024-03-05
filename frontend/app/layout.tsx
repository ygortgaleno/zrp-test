import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zrp Poke",
  description: "Zrp poke test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
