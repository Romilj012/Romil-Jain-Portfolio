import { useUnlock } from "@/contexts/UnlockContext"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import FinalLevel from "@/components/FinalLevel"
import Contact from "@/components/Contact"
import ParticleBackground from "@/components/ParticleBackground"

/*export default function Home() {
  const { unlockedSections } = useUnlock()

  return (
    <main className="bg-black text-white">
      <ParticleBackground />
      <Hero />
      {unlockedSections.includes("skills") && <Skills />}
      {unlockedSections.includes("experience") && <Experience />}
      {unlockedSections.includes("projects") && <Projects />}
      {unlockedSections.includes("final") && <FinalLevel />}
      <Contact />
    </main>
  )
}*/

export default function Home() {
  const { unlockedSections } = useUnlock();

  return (
    <main className="bg-black text-white">
      <ParticleBackground />
      <Hero />
      <Skills />
      {unlockedSections.includes("skills") && <Experience />}
      {unlockedSections.includes("experience") && <Projects />}
      {unlockedSections.includes("projects") && <FinalLevel />}
      <Contact />
    </main>
  );
}

