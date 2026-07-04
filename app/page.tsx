import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AppsSection from "./components/AppsSection";
import ProjectsSection from "./components/ProjectsSection";
import PlansSection from "./components/PlansSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#E2FF3E] min-h-screen relative overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AppsSection />
      <ProjectsSection />
      <PlansSection />
      <Footer />
    </main>
  );
}
