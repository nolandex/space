import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { StarsCanvas } from "@/components/main/StarBackground";
import { Footer } from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head> {/* Tambahkan tag <head> jika belum ada */}
        {/* Ini adalah link untuk Material Symbols dari Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
