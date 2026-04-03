import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import Project from "./components/Project";
import ResumePanel from "./components/ResumePanel";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <ExperienceSection />
      <Project compact />
      <Skills />
      <ResumePanel />
      <Footer />
    </div>
  );
}
