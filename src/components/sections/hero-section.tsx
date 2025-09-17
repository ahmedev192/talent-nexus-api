import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
              <Zap className="h-3 w-3 mr-1" />
              Skill Exchange Platform
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Learn Any Skill,{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Teach Your Talent
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect with skilled individuals, exchange knowledge, and grow together. 
              Turn your expertise into credits and learn from the best.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">10K+</div>
                  <div className="text-sm text-white/70">Active Users</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-sm text-white/70">Skills Available</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">4.9</div>
                  <div className="text-sm text-white/70">Average Rating</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 group"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Become a Teacher
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm mb-4">Trusted by learners worldwide</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                <div className="text-white font-semibold">Google</div>
                <div className="text-white font-semibold">Microsoft</div>
                <div className="text-white font-semibold">Adobe</div>
                <div className="text-white font-semibold">Netflix</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img
                src={heroImage}
                alt="People learning and teaching skills together"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Web Development</div>
                    <div className="text-xs text-muted-foreground">5 credits/hr</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-pulse delay-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-success rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Guitar Lessons</div>
                    <div className="text-xs text-muted-foreground">3 credits/hr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};