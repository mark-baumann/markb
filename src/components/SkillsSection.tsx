const skills = [
  { name: "Python", level: 90 },
  { name: "React", level: 85 },
  { name: "Docker", level: 80 },
  { name: "n8n", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Linux", level: 85 },
  { name: "Git", level: 90 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technische Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meine Kernkompetenzen in der Softwareentwicklung und IT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover:bg-foreground"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
