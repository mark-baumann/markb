import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Baumann",
    jobTitle: "IT-Berater & Webentwickler",
    url: "https://markbaumann.de",
    sameAs: [
      "https://github.com/mark-baumann",
      "https://linkedin.com/in/mark-baumann"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE"
    },
    knowsAbout: ["Python", "React", "Docker", "n8n", "Web Development", "IT Consulting"],
    description: "Professionelle IT-Beratung, Webentwicklung und technischer Support in Deutschland."
  };

  return (
    <>
      <Helmet>
        <title>Mark Baumann | IT-Berater & Webentwickler aus Deutschland</title>
        <meta
          name="description"
          content="Mark Baumann - Professionelle IT-Beratung, Webentwicklung und technischer Support. Individuelle Lösungen für Computer, Software, Hardware und Webseiten in Deutschland."
        />
        <meta name="keywords" content="Mark Baumann, IT-Berater, Webentwickler, Deutschland, Python, React, Docker, n8n, technischer Support, IT-Beratung" />
        <meta name="author" content="Mark Baumann" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://markbaumann.de" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mark Baumann | IT-Berater & Webentwickler" />
        <meta property="og:description" content="Professionelle IT-Beratung, Webentwicklung und technischer Support in Deutschland." />
        <meta property="og:url" content="https://markbaumann.de" />
        <meta property="og:locale" content="de_DE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mark Baumann | IT-Berater & Webentwickler" />
        <meta name="twitter:description" content="Professionelle IT-Beratung, Webentwicklung und technischer Support in Deutschland." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <CtaSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
