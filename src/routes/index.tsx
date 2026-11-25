import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bright Eduful — Co-Founder of Synthxos & Cybersecurity Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Bright Eduful — Co-Founder of Synthxos and Cybersecurity Analyst specializing in threat analysis, vulnerability management, and incident response.",
      },
      { property: "og:title", content: "Bright Eduful — Co-Founder of Synthxos & Cybersecurity Analyst" },
      {
        property: "og:description",
        content:
          "Co-Founder of Synthxos and Cybersecurity Analyst safeguarding digital assets through threat hunting, cloud security, and resilient engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
