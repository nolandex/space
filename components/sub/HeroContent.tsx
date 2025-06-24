"use client";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Head from "next/head";

export const HeroContent = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-8 md:px-20 pt-20 sm:pt-36 text-center z-[20]"
      >
        {/* Foto Profil */}
        <motion.div variants={slideInFromTop} className="mb-6">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
        </motion.div>

        {/* Judul */}
        <motion.div
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] mb-6 flex items-center justify-center"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[14px] sm:text-[16px] md:text-[18px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Tombol Aksi */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8 max-w-lg mx-auto"
          variants={slideInFromTop}
        >
          {/* Website */}
          <a
            href="https://bisnovo.biz.id"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary py-2 px-4 rounded-full text-sm sm:text-base font-semibold transition hover:scale-105"
          >
            🌐 Visit Bisnovo Website
          </a>

          {/* Tanya Admin */}
          <a
            href="https://wa.me/6285156779923"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary py-2 px-4 rounded-full text-sm sm:text-base font-semibold transition hover:scale-105"
          >
            💬 Chat Admin via WhatsApp
          </a>

          {/* Gabung Reseller */}
          <a
            href="https://chat.whatsapp.com/GSVWl1Jb15tEB4gK9ajvbG"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary py-2 px-4 rounded-full text-sm sm:text-base font-semibold transition hover:scale-105"
          >
            🤝 Join Reseller Group
          </a>
        </motion.div>

        {/* Ikon Sosial Media */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20 max-w-lg mx-auto"
          variants={slideInFromTop}
        >
          {[
            {
              href: "https://www.instagram.com/bisnovo",
              title: "Instagram",
              icon: "apps", // kamu bisa ganti jadi: 'photo_camera' dll
              color: "text-pink-500",
            },
            {
              href: "https://www.tiktok.com/@bisnovo",
              title: "TikTok",
              icon: "music_note",
              color: "text-blue-400",
            },
            {
              href: "https://www.facebook.com/share/1H87XB9aw7/",
              title: "Facebook",
              icon: "thumb_up",
              color: "text-blue-500",
            },
            {
              href: "https://wa.me/6285156779923",
              title: "WhatsApp",
              icon: "chat",
              color: "text-green-500",
            },
            {
              href: "mailto:bisnovohq@gmail.com",
              title: "Email",
              icon: "mail",
              color: "text-yellow-400",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="button-primary p-3 rounded-full flex items-center justify-center group hover:scale-110 transition"
            >
              <span
                className={`material-symbols-outlined text-white group-hover:${item.color} text-[24px]`}
              >
                {item.icon}
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
