import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { StarsCanvas } from "@/components/main/StarBackground"; // Baris ini telah dihapus atau dikomentari
import { Footer } from "@/components/main/Footer"; // Pastikan baris ini ada dan benar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {/* <StarsCanvas /> */} {/* Komponen StarsCanvas telah dihapus dari sini */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
