import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import markHero from "@/assets/mark-hero.jpg";
import markHeroWebp from "@/assets/mark-hero.webp";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-muted-foreground text-lg mb-4 tracking-wide uppercase">
              IT-Berater & Entwickler
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Mark Baumann
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Professionelle IT-Beratung, Webentwicklung und technischer Support. 
              Individuelle Lösungen für Ihr digitales Wachstum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#kontakt">Kontakt aufnehmen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#leistungen">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-border to-transparent rounded-full blur-2xl opacity-50" />
              <picture>
                <source srcSet={markHeroWebp} type="image/webp" />
                <img
                  src={markHero}
                  alt="Mark Baumann - IT-Berater und Webentwickler aus Deutschland"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-border shadow-2xl"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#leistungen" aria-label="Zu Leistungen scrollen">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
