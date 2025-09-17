import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Star, 
  Shield, 
  Zap,
  MessageCircle,
  CreditCard,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Matching",
    description: "Our AI-powered system connects you with the perfect skill matches based on your interests, location, and availability.",
    badge: "AI Powered",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule. Online or in-person, 1-on-1 or group sessions - you choose what works best.",
    badge: "24/7 Booking",
    color: "text-success"
  },
  {
    icon: CreditCard,
    title: "Credit System",
    description: "Earn credits by teaching your skills, spend them to learn new ones. A fair exchange system that values everyone's time.",
    badge: "Fair Exchange",
    color: "text-warning"
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "All users go through identity verification. Read reviews and ratings from real learners and teachers.",
    badge: "Secure",
    color: "text-destructive"
  },
  {
    icon: MessageCircle,
    title: "Built-in Messaging",
    description: "Connect with your matches through our secure messaging system. Plan sessions and share resources easily.",
    badge: "Real-time",
    color: "text-accent-foreground"
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Learn from experts worldwide. Break geographical barriers and access skills from diverse cultures and backgrounds.",
    badge: "Worldwide",
    color: "text-primary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Platform Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learn & Teach
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools you need for successful skill exchange,
            from discovery to completion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-background-secondary/50 border border-border/30 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-border/50">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                K
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-success flex items-center justify-center text-white font-semibold">
                M
              </div>
              <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center text-white font-semibold">
                S
              </div>
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold">
                +
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Join 10,000+ learners</p>
              <p className="text-sm text-muted-foreground">Start your skill journey today</p>
            </div>
            <div className="flex items-center text-warning">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium text-foreground">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};