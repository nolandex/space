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
      className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-8 md:px-20 pt-20 sm:pt-40 text-center z-[20]"
    >
      {/* Foto Profil */}
      <motion.div variants={slideInFromTop} className="mb-6">
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
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6 flex items-center justify-center"
        variants={slideInFromTop}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] sm:text-[15px] md:text-[18px]">Fullstack Developer Portfolio</h1>
      </motion.div>

      {/* Bagian Media Sosial */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-20 max-w-lg mx-auto" // flex-wrap untuk responsif, max-w-lg untuk lebar terbatas
        variants={slideInFromTop} // Animasi untuk seluruh grup link
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/bisnovo"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="Instagram"
        >
          <InstagramIcon className="w-6 h-6 text-white group-hover:text-pink-400" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@bisnovo"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="TikTok"
        >
          <TikTokIcon className="w-6 h-6 text-white group-hover:text-blue-400" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1H87XB9aw7/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="Facebook"
        >
          <FacebookIcon className="w-6 h-6 text-white group-hover:text-blue-500" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send/?phone=6285156779923&text&type=phone_number&app_absent=0&wame_ctl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 text-white group-hover:text-green-500" />
        </a>

        {/* Email */}
        <a
          href="mailto:bisnovohq@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary p-3 rounded-full flex items-center justify-center group transform transition duration-300 hover:scale-110"
          title="Email"
        >
          <EmailIcon className="w-6 h-6 text-white group-hover:text-yellow-400" />
        </a>
      </motion.div>
    </motion.div>
  );
};

// --- Komponen SVG untuk Ikon Media Sosial ---
// Anda bisa memindahkan ini ke file terpisah (misalnya icons/SocialIcons.tsx) jika ingin lebih rapi

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M224.1 12.5C100.3 12.5 0 112.9 0 236.8S100.3 461 224.1 461s224.1-100.4 224.1-224.2S347.9 12.5 224.1 12.5zm105.7 348.7c-5.7 13.9-20.5 23.3-37.1 23.3-33.5 0-66.2-28.5-70.3-64.4s11.5-70.8 44.9-70.8c16.6 0 31.4 9.4 37.1 23.3s5.7 35.1-5.7 49c-11.4 13.9-34.2 13.9-45.6 0-11.4-13.9-11.4-35.1 0-49s34.2-13.9 45.6 0zm-27.4-162.2c-23.7 0-43.1-19.4-43.1-43.1S257.2 88 280.9 88s43.1 19.4 43.1 43.1-19.4 43.1-43.1 43.1zm118.8 84.7c-3.1 4.7-7.8 7.8-13.1 7.8s-9.9-3.1-13.1-7.8l-1.5-2.2c-5.9-8.8-14.7-14.4-24.5-16.7-9.8-2.3-19.9-1.2-28.8 3.1-8.9 4.3-15.6 11.2-19.9 20.1-4.3 8.9-5.4 19.1-3.1 28.9s9.4 18.9 20.3 25.1c10.9 6.2 24 9.5 37.3 9.5 13.3 0 26.4-3.3 37.3-9.5s18.9-14.2 20.3-25.1c2.3-9.8 1.2-19.9-3.1-28.8-4.3-8.9-11.2-15.6-20.1-19.9-8.9-4.3-19.1-5.4-28.9-3.1-9.8 2.3-18.6 8-24.5 16.7l-1.5 2.2zM224.1 461C100.3 461 0 360.6 0 236.8S100.3 12.5 224.1 12.5 448.2 112.9 448.2 236.8 347.9 461 224.1 461zM224.1 461c-123.8 0-224.1-100.4-224.1-224.2S100.3 12.5 224.1 12.5s224.1 100.4 224.1 224.2S347.9 461 224.1 461z" />
  </svg>
);


const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V176.47A119.99 119.99 0 0 0 318.15 0H210.66a5.53 5.53 0 0 0 -5.53 5.53v271.85a5.53 5.53 0 0 0 5.53 5.53h145.47V375.9c-27.11 0-54.21-.49-81.3-.49-65.41 0-118.89 25.26-118.89 104.59 0 79.33 53.48 104.59 118.89 104.59 27.09 0 54.21-.49 81.3-.49V512H199.11C89.37 512 0 422.37 0 293.44v-96.11A97.23 97.23 0 0 1 97.23 100.1H293.9V5.53a5.53 5.53 0 0 0 -5.53-5.53H97.23C43.51 0 0 43.51 0 97.23v96.11C0 307.63 89.37 422 199.11 422c50.31 0 97.22-19.14 118.89-61.94V293.44a5.53 5.53 0 0 0 5.53-5.53h118.89v22.08z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M504 256C504 119 392.3 8 256 8S8 119 8 256c0 123.78 90.69 226.63 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V501.69C413.31 482.63 504 379.78 504 256z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M380.9 97.1C339.4 55.8 283.5 32 224.1 32 112.5 32 17 122.2 17 234.8c0 37.8 9.2 73.7 26.4 104.1L17.7 483.9l115-30.1c28.7 15.7 61.2 24.2 95.4 24.2 111.6 0 207-90.2 207-202.8 0-58.4-23.7-111.4-62.1-152.7zM224.1 432c-29.3 0-58-7.9-83.3-23.6l-5.6-3.3-58.7 15.4 15.6-57.2-3.7-5.9c-20-32-30.7-68.5-30.7-106.9 0-90.5 74.4-164.2 165.7-164.2 46.1 0 88.9 19 120.3 50.4 31.4 31.4 50.4 74.2 50.4 120.3 0 91.3-74.4 165.7-165.7 165.7zm116.1-118.8c-2.8-1.4-16.7-8.2-19.3-9.2-2.7-1-4.6-1.4-6.5 1.4-1.9 2.8-7.5 9.2-9.2 11-1.8 2.1-3.7 2.3-6.5.6-3.2-1.7-13.4-4.9-25.5-15.3-9.4-8.1-16.7-18.1-18.7-21.6-2-3.5-.2-5.4 1.7-7.2s3.8-4.6 5.6-6.9c1.8-2.3 2.4-3.9 3.7-6.5 1.4-2.7.7-5.1-.4-7.2-1.1-2.1-6.5-15.6-8.9-21.3-2.4-5.7-4.8-4.9-6.5-5.1-1.7-.2-3.7-.2-5.6-.2-1.9 0-5.1.7-7.8 3.5s-10.4 10.4-10.4 25.3c0 14.9 10.7 29.3 12.2 31.3 1.5 2 20.2 30.7 49 43.8 28.7 13 54.4 10.9 64.1 8.9 9.8-2 16.7-8.1 19-14.8 2.3-6.6 2.3-12.2 1.6-13.4-.6-1.4-2.8-2.2-5.9-3.7z" />
  </svg>
);

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M498.1 5.6C502.8 14 505 23.3 504.6 32.7V464c.4 9.4-1.8 18.7-6.5 27.1-4.7 8.4-11.5 15-19.8 19.8-8.4 4.7-17.7 6.9-27.1 6.5H48c-9.4-.4-18.7-2.6-27.1-6.5-8.4-4.7-15-11.5-19.8-19.8-4.7-8.4-6.9-17.7-6.5-27.1V32.7C.6 23.3 2.8 14 7.5 5.6 12.2-2.8 19-9.4 27.4-14.2c8.4-4.7 17.7-6.9 27.1-6.5h416c9.4.4 18.7 2.6 27.1 6.5 8.4 4.7 15 11.5 19.8 19.8zM464 128H48v256l176-144c11.9-9.2 28.3-9.2 40.2 0L464 384V128zm-32-64L256 269.4 48 64h416z" />
  </svg>
);
