import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/eco/Navbar";
import { Hero } from "@/components/eco/Hero";
import { CrisisSection } from "@/components/eco/CrisisSection";
import { ModelSection } from "@/components/eco/ModelSection";
import { FacilityBlueprint } from "@/components/eco/FacilityBlueprint";
import { ClimateActions } from "@/components/eco/ClimateActions";
import { PillarsSection } from "@/components/eco/PillarsSection";
import { ImpactStories } from "@/components/eco/ImpactStories";
import { TyciaFoundation } from "@/components/eco/TyciaFoundation";
import { PartnersSection } from "@/components/eco/PartnersSection";
import { DonateSection } from "@/components/eco/DonateSection";
import { Footer } from "@/components/eco/Footer";

const title = "Eco-Reform — Climate-Resilient Adaptive Prisons | TYCIA Foundation";
const description =
  "TYCIA Foundation's flagship climate-resilience programme transforming prisons into climate-adaptive, sustainable and rehabilitative spaces. Piloted at Nuh District Jail, Haryana.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1C19] antialiased selection:bg-[#B9F079]/40 selection:text-[#12560E] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CrisisSection />
        <ModelSection />
        <FacilityBlueprint />
        <ClimateActions />
        <PillarsSection />
        <ImpactStories />
        <TyciaFoundation />
        <PartnersSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
