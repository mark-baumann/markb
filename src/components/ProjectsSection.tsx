import { useEffect, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
}

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/mark-baumann/repos?sort=updated&per_page=100"
        );
        if (!response.ok) throw new Error("Fehler beim Laden der Projekte");
        const data = await response.json();
        setRepos(data.filter((repo: GitHubRepo) => !repo.name.includes(".github")));
      } catch (err) {
        setError("Projekte konnten nicht geladen werden");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projekte" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meine Projekte
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Eine Auswahl meiner aktuellen Open-Source-Projekte auf GitHub
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(12)].map((_, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-muted-foreground">{error}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                className="bg-card border-border hover:border-foreground/20 transition-all duration-300 group flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <Folder className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                    {repo.description || "Keine Beschreibung verfügbar"}
                  </p>
                  
                  {repo.language && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{repo.language}</span>
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/mark-baumann" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Alle Projekte auf GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
