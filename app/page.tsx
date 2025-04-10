import Hero from "@/components/main/HeroMain";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col px-5 sm:px-10 md:px-20 min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
      </div>
    </main>
  );
}
