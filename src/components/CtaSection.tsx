import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import markCta from "@/assets/mark-cta.jpg";
import markCtaWebp from "@/assets/mark-cta.webp";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <picture>
              <source srcSet={markCtaWebp} type="image/webp" />
              <img
                src={markCta}
                alt="Mark Baumann - Bereit für Ihr nächstes Projekt"
                className="w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-2xl border-4 border-border shadow-xl"
                loading="lazy"
              />
            </picture>
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. 
              Ich freue mich darauf, von Ihrem Projekt zu hören und die beste 
              Lösung für Ihre Anforderungen zu entwickeln.
            </p>
            <Button size="lg" asChild>
              <a href="#kontakt">
                Projekt besprechen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
