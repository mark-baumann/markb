import { Monitor, Settings, Globe, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Computer & Software Support",
    description: "Professionelle Unterstützung bei Ihren Anliegen rund um Computer, Smartphones, Software und Hardware.",
  },
  {
    icon: Settings,
    title: "IT-Beratung & Implementierung",
    description: "Persönliche Beratung, Planung und Implementierung von IT-Systemen für Ihr Unternehmen.",
  },
  {
    icon: Globe,
    title: "Webseite Entwicklung",
    description: "Moderne, responsive Webseiten und Webanwendungen nach Ihren individuellen Anforderungen.",
  },
  {
    icon: Headphones,
    title: "Technischer Support",
    description: "Zuverlässiger technischer Support vor Ort und remote – schnell und kompetent.",
  },
];

const ServicesSection = () => {
  return (
    <section id="leistungen" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meine Leistungen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Umfassende IT-Dienstleistungen für Privatpersonen und Unternehmen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-foreground/20 transition-all duration-300 group"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
