import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Search, 
  Calendar, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and add your skills - both what you can teach and what you want to learn. Verify your identity for trust.",
    features: ["Add skills & expertise", "Set your availability", "Get verified"]
  },
  {
    step: "02", 
    icon: Search,
    title: "Discover & Match",
    description: "Browse available skills or let our smart matching system find perfect matches based on your preferences and location.",
    features: ["AI-powered matching", "Filter by location", "Read reviews & ratings"]
  },
  {
    step: "03",
    icon: Calendar,
    title: "Book & Learn",
    description: "Schedule sessions with your matches. Connect via video call or meet in person. Exchange credits for fair compensation.",
    features: ["Flexible scheduling", "Online or in-person", "Secure payments"]
  },
  {
    step: "04",
    icon: Star,
    title: "Review & Grow",
    description: "Leave reviews after sessions to help the community grow. Build your reputation and earn more credits.",
    features: ["Rate your experience", "Build reputation", "Earn rewards"]
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            <CheckCircle className="h-3 w-3 mr-1" />
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              SkillSwap
            </span>{" "}
            Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes. Our streamlined process makes it easy to start learning 
            or teaching any skill.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 h-full">
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="outline" 
                      className="bg-primary/10 text-primary border-primary/30 font-bold px-3"
                    >
                      {step.step}
                    </Badge>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-primary rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90">
              Join thousands of learners and teachers already exchanging skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300"
              >
                Sign Up Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Browse Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};