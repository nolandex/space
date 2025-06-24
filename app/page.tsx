// 1. Impor untuk Skills, Projects, dan Encription dihapus karena tidak lagi digunakan
import { Hero } from "@/components/main/Hero";
// import { Projects } from "@/components/main/Projects";
// import Skills from "@/components/main/Skills";

const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* 2. Komponen <Skills />, <Projects />, dan <Encription /> telah dihapus dari sini */}
      </div>
    </main>
  );
};

export default Home;
