import { Code2, Lightbulb, Rocket, Users, BarChart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "I build structured and maintainable applications using clean and modular architectures, especially in Flutter projects.",
  },
  {
    icon: Rocket,
    title: "Mobile & Frontend Focus",
    description:
      "Strong experience in Flutter for mobile development and growing expertise in React and modern frontend technologies.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description:
      "I transform data into insights using Power BI and SQL, combining analytical thinking with technical execution.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "I enjoy working closely with designers, backend developers, and product teams to build meaningful products.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Curious and proactive, always improving my skills in software development and data analysis.",
  },
];

export const About = () => {
    return (<section id="about" className="py-32 realtive overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future, 
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            one component at a time.
                        </span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I’m a Flutter Developer and Frontend Engineer with a strong interest in Data
                            Analytics. My work focuses on building clean, scalable applications while
                            keeping architecture, performance, and user experience at the center.
                        </p>
                        <p>
                            I have professional experience developing mobile applications with Flutter,
                            working with modular architectures, state management, and REST APIs. At the
                            same time, I’m growing my skills in modern web development using React,
                            JavaScript, and Tailwind CSS.
                        </p>
                        <p>
                            In parallel, I enjoy analyzing data and turning it into meaningful insights
                            using Power BI and SQL. This combination of development and analytics allows
                            me to approach problems from both a technical and analytical perspective.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "I aim to build products that are clean, scalable, and meaningful — where
                            strong architecture meets great user experience and data-driven decisions."
                        </p>
                    </div>
                </div>

                {/* right column */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                    
                </div>
            </div>            
        </div>
    </section>
    );
}