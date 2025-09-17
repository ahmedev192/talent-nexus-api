import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Music, 
  Camera, 
  Languages, 
  ChefHat,
  Dumbbell,
  Briefcase,
  Wrench,
  BookOpen
} from "lucide-react";

const skillCategories = [
  {
    category: "Technology",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    skills: ["Web Development", "Mobile Apps", "Data Science", "AI/ML", "Cybersecurity"],
    count: "120+ skills"
  },
  {
    category: "Design",
    icon: Palette,
    color: "text-warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/20",
    skills: ["UI/UX Design", "Graphic Design", "3D Modeling", "Animation", "Branding"],
    count: "85+ skills"
  },
  {
    category: "Music",
    icon: Music,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    skills: ["Guitar", "Piano", "Singing", "Music Production", "Songwriting"],
    count: "60+ skills"
  },
  {
    category: "Photography",
    icon: Camera,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/20",
    skills: ["Portrait", "Wedding", "Product", "Street", "Photo Editing"],
    count: "45+ skills"
  },
  {
    category: "Languages",
    icon: Languages,
    color: "text-accent-foreground",
    bgColor: "bg-accent",
    borderColor: "border-accent/20",
    skills: ["Spanish", "French", "Mandarin", "Japanese", "German"],
    count: "30+ languages"
  },
  {
    category: "Cooking",
    icon: ChefHat,
    color: "text-warning",
    bgColor: "bg-warning/10", 
    borderColor: "border-warning/20",
    skills: ["Italian", "Asian", "Baking", "Vegan", "Grilling"],
    count: "75+ cuisines"
  },
  {
    category: "Fitness",
    icon: Dumbbell,
    color: "text-success",
    bgColor: "bg-success/10",
    borderColor: "border-success/20",
    skills: ["Personal Training", "Yoga", "CrossFit", "Running", "Nutrition"],
    count: "40+ programs"
  },
  {
    category: "Business",
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    skills: ["Marketing", "Sales", "Finance", "Leadership", "Entrepreneurship"],
    count: "90+ topics"
  }
];

export const SkillsShowcaseSection = () => {
  return (
    <section className="py-20 bg-background-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <BookOpen className="h-3 w-3 mr-1" />
            Skill Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              500+ Skills
            </span>{" "}
            Across All Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From programming to cooking, music to marketing - find the perfect skill 
            to learn or share your expertise with others.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-2xl ${category.bgColor} border ${category.borderColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                
                <Badge variant="secondary" className="mb-4 text-xs">
                  {category.count}
                </Badge>
                
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Skills Bar */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">🔥 Trending Skills This Week</h3>
            <p className="text-muted-foreground text-sm">Most popular skills being learned right now</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React Development",
              "Digital Marketing", 
              "Guitar Lessons",
              "Spanish Tutoring",
              "UI/UX Design",
              "Photography",
              "Yoga Instruction",
              "Public Speaking",
              "Data Analysis",
              "Cooking Classes"
            ].map((skill, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Available Skills</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">10K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-warning mb-2">50K+</div>
            <div className="text-muted-foreground">Sessions Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-destructive mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};