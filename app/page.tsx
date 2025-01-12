import Image from "next/image";
import Hero from "@/components/main/HeroMain";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
