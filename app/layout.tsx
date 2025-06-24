import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/main/StarBackground";
// 1. Impor untuk Footer dihapus karena komponennya tidak lagi digunakan
// import { Footer } from "@/components/main/Footer";

// 2. Impor untuk "next/head" dihapus karena tidak digunakan di App Router
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* 3. Tag <head> standar digunakan di sini, bukan komponen <Head> dari Next */}
      <head>
        {/* Link untuk font Material Symbols ditempatkan langsung di sini */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        {children}
        {/* 4. Komponen <Footer /> telah dihapus sepenuhnya dari sini */}
      </body>
    </html>
  );
}
