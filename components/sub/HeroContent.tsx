"use client";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // Mengurangi padding top agar sedikit lebih ke atas
      className="flex flex-col items-center justify-start h-full w-full px-4 sm:px-8 md:px-20 pt-12 sm:pt-20 text-center z-[20]" // pt-12/20 untuk naik ke atas
    >
      {/* Foto Profil */}
      <motion.div variants={slideInFromTop} className="mb-4"> {/* Mengurangi margin bawah */}
        <Image
          src="/profile.png" // Ganti dengan path ke foto profil Anda
          alt="Profile Picture"
          width={120} // Sedikit lebih kecil agar lebih ringkas
          height={120} // Sedikit lebih kecil agar lebih ringkas
          className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
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

      {/* Tiga Tombol Link in Bio Khas */}
      <motion.div
        className="flex flex-col gap-4 w-full max-w-sm mb-8" // Kolom, jarak antar tombol, lebar terbatas, margin bawah
        variants={slideInFromTop} // Animasi untuk seluruh grup tombol
      >
        {/* Tombol 1: Judul Website Bisnovo */}
        <a
          href="https://bisnovo.biz.id"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg flex items-center justify-center gap-2 text-lg font-medium transform transition duration-300 hover:scale-105"
        >
          <span className="material-symbols-outlined">
            language {/* Ikon globe/web */}
          </span>
          Bisnovo Official Website
        </a>

        {/* Tombol 2: Tanya Admin (WhatsApp) */}
        <a
          href="https://api.whatsapp.com/send/?phone=6285156779923&text&type=phone_number&app_absent=0&wame_ctl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg flex items-center justify-center gap-2 text-lg font-medium transform transition duration-300 hover:scale-105"
        >
          <span className="material-symbols-outlined">
            chat {/* Ikon chat/pesan */}
          </span>
          Tanya Admin
        </a>

        {/* Tombol 3: Gabung Grup Reseller (WhatsApp Group) */}
        <a
          href="https://chat.whatsapp.com/GSVWl1Jb15tEB4gK9ajvbG"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg flex items-center justify-center gap-2 text-lg font-medium transform transition duration-300 hover:scale-105"
        >
          <span className="material-symbols-outlined">
            group_add {/* Ikon grup/tambah grup */}
          </span>
          Gabung Grup Reseller
        </a>
      </motion.div>

      {/* Bagian Ikon Media Sosial di bawah tombol link-in-bio */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-20 max-w-lg mx-auto"
        variants={slideInFromTop}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/bisnovo"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110 bg-[#7042f88b]" // Tambahkan bg warna agar konsisten
          title="Instagram"
        >
          <span className="material-symbols-outlined text-white group-hover:text-pink-400">
            photo_camera {/* Ikon kamera, sering digunakan untuk IG */}
          </span>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@bisnovo"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110 bg-[#7042f88b]"
          title="TikTok"
        >
          <span className="material-symbols-outlined text-white group-hover:text-blue-400">
            play_circle {/* Ikon play/video, bisa untuk TikTok */}
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1H87XB9aw7/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110 bg-[#7042f88b]"
          title="Facebook"
        >
          <span className="material-symbols-outlined text-white group-hover:text-blue-500">
            groups {/* Ikon groups, bisa untuk Facebook */}
          </span>
        </a>

        {/* WhatsApp (ikon sudah ada di atas) - ini adalah tombol untuk WA Personal/Chat */}
        <a
          href="https://api.whatsapp.com/send/?phone=6285156779923&text&type=phone_number&app_absent=0&wame_ctl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110 bg-[#7042f88b]"
          title="WhatsApp Chat"
        >
          <span className="material-symbols-outlined text-white group-hover:text-green-500">
            chat_bubble {/* Ikon chat bubble */}
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:bisnovohq@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110 bg-[#7042f88b]"
          title="Email"
        >
          <span className="material-symbols-outlined text-white group-hover:text-yellow-400">
            mail {/* Ikon email */}
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};
