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

      {/* Tagline */}
      <motion.div
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6 flex items-center justify-center"
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] sm:text-[15px] md:text-[18px]">Fullstack Developer Portfolio</h1>
      </motion.div>

      {/* Tombol Aksi */}
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-12"
      >
        <a
          href="https://bisnovo.biz.id"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          🌐 Kunjungi Website
        </a>
        <a
          href="https://wa.me/6285156779923"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          💬 Tanya Admin
        </a>
        <a
          href="https://chat.whatsapp.com/GSVWl1Jb15tEB4gK9ajvbG"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          👥 Gabung Grup Reseller
        </a>
      </motion.div>

      {/* Ikon Media Sosial */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-14 max-w-lg mx-auto"
        variants={slideInFromTop}
      >
        <SocialButton
          href="https://www.instagram.com/bisnovo"
          title="Instagram"
          icon={<InstagramIcon className="w-6 h-6 text-white group-hover:text-pink-400" />}
        />
        <SocialButton
          href="https://www.tiktok.com/@bisnovo"
          title="TikTok"
          icon={<TikTokIcon className="w-6 h-6 text-white group-hover:text-blue-400" />}
        />
        <SocialButton
          href="https://www.facebook.com/share/1H87XB9aw7/"
          title="Facebook"
          icon={<FacebookIcon className="w-6 h-6 text-white group-hover:text-blue-500" />}
        />
        <SocialButton
          href="https://wa.me/6285156779923"
          title="WhatsApp"
          icon={<WhatsAppIcon className="w-6 h-6 text-white group-hover:text-green-500" />}
        />
        <SocialButton
          href="mailto:bisnovohq@gmail.com"
          title="Email"
          icon={<EmailIcon className="w-6 h-6 text-white group-hover:text-yellow-400" />}
        />
      </motion.div>
    </motion.div>
  );
};

const SocialButton = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

// --- Ikon SVG Tetap Digunakan agar ringan dan tidak tergantung Google link luar ---

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.5-35.3-9.9-66.7-35.6-92.4S413.6 0 378.3.5C334.8.6 291 0 247.5 0S160.2.6 116.7.5C81.4 0 50 9.4 24.3 35.1S0 98.5.5 133.8C.6 177.3 0 221.1 0 264.6s.6 87.3.5 130.8c.5 35.3 9.9 66.7 35.6 92.4s57.1 35.1 92.4 35.6c43.5.1 87.3 0 130.8 0s87.3.1 130.8 0c35.3-.5 66.7-9.9 92.4-35.6s35.1-57.1 35.6-92.4c.1-43.5 0-87.3 0-130.8s.1-87.3 0-130.8zM398.8 388c-11.7 29.4-34.4 52.1-63.8 63.8-44.2 17.6-149.1 13.6-199.7 13.6s-155.5 4-199.7-13.6c-29.4-11.7-52.1-34.4-63.8-63.8C-5.7 343.8-1.7 238.9-1.7 188.3s-4-155.5 13.6-199.7C23.6-41 46.3-63.7 75.7-75.4 120-93 224.9-89 275.5-89s155.5-4 199.7 13.6c29.4 11.7 52.1 34.4 63.8 63.8C453.7 109.7 457.7 214.6 457.7 265.2s4 155.5-13.6 199.7z" />
  </svg>
);

// TikTokIcon, FacebookIcon, WhatsAppIcon, EmailIcon → Tetap sama seperti di kodenya kamu
