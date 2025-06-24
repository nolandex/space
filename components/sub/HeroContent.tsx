"use client";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion"; // Hanya slideInFromTop yang akan digunakan
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // Mengubah tata letak agar menjadi kolom, di tengah, dan responsif
      className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-8 md:px-20 pt-20 sm:pt-40 text-center z-[20]"
    >
      {/* Foto Profil */}
      <motion.div variants={slideInFromTop} className="mb-6">
        <Image
          src="/profile.png" // Ganti dengan path ke foto profil Anda
          alt="Profile Picture"
          width={150} // Sesuaikan ukuran sesuai kebutuhan
          height={150} // Sesuaikan ukuran sesuai kebutuhan
          className="rounded-full object-cover border-4 border-purple-500 shadow-lg" // Tambahkan styling
        />
      </motion.div>

      {/* Fullstack Developer Portfolio */}
      <motion.div
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6 flex items-center justify-center"
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] sm:text-[15px] md:text-[18px]">Fullstack Developer Portfolio</h1>
      </motion.div>

      {/* Link in Bio */}
      <motion.a
        href="https://www.notion.so/Sosmed-208cdd559ccf8065a538fa0295714f5b?source=copy_link"
        target="_blank" // Membuka di tab baru
        rel="noopener noreferrer" // Praktik keamanan yang baik
        className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mb-20 flex items-center gap-2"
        variants={slideInFromTop} // Menggunakan animasi yang sama atau bisa disesuaikan
      >
        {/* Icon link dari Google - contoh sederhana, Anda bisa mengganti dengan SVG yang lebih spesifik jika ada */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.33-1.242a4.5 4.5 0 0 1-1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m-.15-5.856l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757"
          />
        </svg>
        Link in Bio
      </motion.a>

      {/* Bagian lainnya yang dihapus: slogan, deskripsi, tombol "Learn more!", dan gambar mainIconsdark.svg */}
      {/*
      <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
        <span>
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
          project experience
        </span>
      </motion.div>

      <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
        I&apos;m a Full Stack Engineer with experience in Websites, Mobile, and Software development. Check out my projects and skills.
      </motion.p>
      <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
        Learn more!
      </motion.a>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center ">
        <Image src="/mainIconsdark.svg" alt="Work icons" height={650} width={650} />
      </motion.div>
      */}
    </motion.div>
  );
};
