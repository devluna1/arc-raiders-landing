import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameplayFeatures from "@/components/GameplayFeatures";
import MachineGallery from "@/components/MachineGallery";
import LoreSection from "@/components/LoreSection";
import MapConditions from "@/components/MapConditions";
import SocialCommunity from "@/components/SocialCommunity";
import PlatformFooter from "@/components/PlatformFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      <Particles />
      <Navbar />
      <Hero />
      <GameplayFeatures />
      <MachineGallery />
      <LoreSection />
      <MapConditions />
      <SocialCommunity />
      <PlatformFooter />
    </main>
  );
}
