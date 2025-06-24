// 1. Impor untuk Skills dan Projects dihapus karena tidak lagi digunakan
import Encription from "@/components/main/Encription";
import { Hero } from "@/components/main/Hero";
// import { Projects } from "@/components/main/Projects";
// import Skills from "@/components/main/Skills";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Encription />
        {/* 2. Komponen <Skills /> dan <Projects /> telah dihapus dari sini */}
      </div>
    </main>
  );
};

export default Home;
