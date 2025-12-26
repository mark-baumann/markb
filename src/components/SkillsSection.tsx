const skillCategories = [
  {
    category: "Programmierung",
    skills: ["Python", "TypeScript", "JavaScript", "React", "Node.js"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "Linux", "n8n", "CI/CD"]
  },
  {
    category: "Weitere",
    skills: ["REST APIs", "Datenbanken", "Webentwicklung", "IT-Beratung"]
  }
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

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
