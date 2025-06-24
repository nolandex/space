"use client";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaEnvelope, FaGlobe, FaUserTie, FaUsers } from "react-icons/fa";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // PERUBAHAN: Padding atas dikurangi lagi (pt-20 -> pt-12) agar lebih ke atas
      className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-8 md:px-20 pt-12 text-center z-[20]"
    >
      {/* Foto Profil */}
      <motion.div variants={slideInFromTop} className="mb-5">
        <Image
          src="/profile.png" // Ganti dengan path ke foto profil Anda
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />
      </motion.div>

      {/* Fullstack Developer Portfolio */}
      <motion.div
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-5 flex items-center justify-center"
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] sm:text-[15px] md:text-[18px]">
          Fullstack Developer Portfolio
        </h1>
      </motion.div>

      {/* Bagian Media Sosial */}
      <motion.div
        className="flex flex-wrap justify-center gap-5 mb-8"
        variants={slideInFromTop}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/bisnovo"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="Instagram"
        >
          <FaInstagram className="w-6 h-6 text-white group-hover:text-pink-400" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@bisnovo"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="TikTok"
        >
          <FaTiktok className="w-6 h-6 text-white group-hover:text-blue-400" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1H87XB9aw7/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="Facebook"
        >
          <FaFacebook className="w-6 h-6 text-white group-hover:text-blue-500" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send/?phone=6285156779923"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 text-white group-hover:text-green-500" />
        </a>

        {/* Email */}
        <a
          href="mailto:bisnovohq@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="Email"
        >
          <FaEnvelope className="w-6 h-6 text-white group-hover:text-yellow-400" />
        </a>
      </motion.div>

      {/* --- Tombol Aksi (Gaya Link In Bio) --- */}
      <motion.div
        className="flex flex-col items-center gap-4 mt-4 w-full max-w-sm px-4 sm:px-0"
        variants={slideInFromTop}
      >
        {/* Tombol Website */}
        <a
          href="https://bisnovo.biz.id"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary w-full text-lg font-bold text-white py-3 px-6 rounded-full flex items-center justify-center gap-3 transform transition duration-300 hover:scale-105"
        >
          <FaGlobe/>
          Website
        </a>

        {/* Tombol Tanya Admin */}
        <a
          href="https://wa.me/6285156779923"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary w-full text-lg font-bold text-white py-3 px-6 rounded-full flex items-center justify-center gap-3 transform transition duration-300 hover:scale-105"
        >
            <FaUserTie />
          Tanya Admin
        </a>
        
        {/* Tombol Gabung Grup Reseller */}
        <a
          href="https://chat.whatsapp.com/GSVWl1Jb15tEB4gK9ajvbG"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary w-full text-lg font-bold text-white py-3 px-6 rounded-full flex items-center justify-center gap-3 transform transition duration-300 hover:scale-105"
        >
            <FaUsers />
          Gabung Grup Reseller
        </a>
      </motion.div>
    </motion.div>
  );
};
