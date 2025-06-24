// ...import lainnya
// import { StarsCanvas } from "@/components/main/StarBackground"; // Hapus baris ini

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {/* <StarsCanvas /> // Hapus atau komentari baris ini */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
