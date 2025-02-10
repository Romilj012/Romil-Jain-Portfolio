"use client"

import { useUnlock } from "@/contexts/UnlockContext"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import FinalLevel from "@/components/FinalLevel"
import Contact from "@/components/Contact"
import ParticleBackground from "@/components/ParticleBackground"
import { ModeToggle } from "@/components/mode-toggle"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const { unlockedSections, setUnlockedSections } = useUnlock();
  const [allUnlocked, setAllUnlocked] = useState(false);
  const [showUnlockButton, setShowUnlockButton] = useState(false);
  const skillsRef = useRef(null);
  const heroRef = useRef(null);

  const unlockAllSections = () => {
    setUnlockedSections(["skills", "experience", "projects", "final"]);
    setAllUnlocked(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === skillsRef.current && entry.isIntersecting) {
            setShowUnlockButton(true);
          } else if (entry.target === heroRef.current && entry.isIntersecting) {
            setShowUnlockButton(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <main className="bg-black text-white relative">
      <ParticleBackground />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div className="relative">
        <div ref={skillsRef}>
          <Skills />
        </div>
        {unlockedSections.includes("skills") && <Experience />}
        {unlockedSections.includes("experience") && <Projects />}
        {unlockedSections.includes("projects") && <FinalLevel />}
        {unlockedSections.includes("final") && <Contact />}
      </div>
      {!allUnlocked && showUnlockButton && (
        <div className="fixed bottom-4 right-4 text-center">
          <div className="mb-2 text-sm text-gray-300">
            Got frustrated? You can unlock all levels at any point
          </div>
          <button
            onClick={unlockAllSections}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Unlock All Levels
          </button>
        </div>
      )}
    </main>
  );
}