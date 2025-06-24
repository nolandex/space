"use client"; // Pastikan ini ada jika menggunakan Client Component seperti HeroContent dengan framer-motion
import { HeroContent } from "@/components/sub/HeroContent"; // Asumsi HeroContent ada di "@/components/sub/HeroContent"

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/*
        Baris video di bawah ini yang sebelumnya menciptakan efek "bola besar" telah dihapus/dikomentari.
        Jika Anda melihatnya lagi, Anda bisa menghapus seluruh blok <video>...</video> ini.
      */}
      {/*
      <video autoPlay muted loop className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover">
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      */}
      <HeroContent />
    </div>
  );
};
