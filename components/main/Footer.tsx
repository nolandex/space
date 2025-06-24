// components/main/Footer.tsx

// Impor untuk ikon-ikon telah dihapus karena tidak lagi digunakan
// import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
// import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        
        {/* Judul portfolio tetap ada */}
        <div className="mb-5">
          <p className="font-bold text-lg text-center">
            Fullstack Developer Portfolio
          </p>
        </div>

        {/* =============================================== */}
        {/* Bagian ikon sosial media telah dihapus seluruhnya */}
        {/* =============================================== */}

        {/* Copyright tetap ada */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; All right reserved
        </div>

      </div>
    </footer>
  );
};
