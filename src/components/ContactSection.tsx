import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import markContact from "@/assets/mark-contact.jpg";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Standort Deutschland</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ich arbeite mit Kunden in ganz Deutschland und international zusammen. 
                  Egal ob remote oder vor Ort – ich finde die beste Lösung für Ihr Projekt.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:kontakt@markbaumann.de">
                  <Mail className="h-5 w-5 mr-2" />
                  E-Mail schreiben
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/mark-baumann" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/mark-baumann" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={markContact}
              alt="Mark Baumann - IT-Berater in Berlin, Deutschland"
              className="w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-2xl border-4 border-border shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
