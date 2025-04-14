import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geistInter = Inter({
  variable: "--font-geist-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Portfolio Template",
  description: "React Portfolio Template created by Nicolae-Andrei Cuconoiu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500"
    >
      <body className={`${geistInter.variable} antialiased`}>{children}</body>
    </html>
  );
}
