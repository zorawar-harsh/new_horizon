import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/nh/Navbar";
import { Hero } from "@/components/nh/Hero";
import { About } from "@/components/nh/About";
import { Programs } from "@/components/nh/Programs";
import { HowItWorks } from "@/components/nh/HowItWorks";
import { Impact } from "@/components/nh/Impact";
import { GetInvolved } from "@/components/nh/GetInvolved";
import { Donate } from "@/components/nh/Donate";
import { Footer } from "@/components/nh/Footer";

const title = "New Horizons — Everyone Deserves a Second Chance";
const description =
  "New Horizons provides legal aid, reintegration support, and family assistance for people leaving prison. 500+ prisoners assisted since 2015.";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <HowItWorks />
        <Impact />
        <GetInvolved />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}
