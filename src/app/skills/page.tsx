import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import ResumePanel from "../components/ResumePanel";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Skills />
      <ResumePanel />
      <Footer />
    </div>
  );
}
