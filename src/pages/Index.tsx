import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { SkillsShowcaseSection } from "@/components/sections/skills-showcase";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SkillsShowcaseSection />
      <HowItWorksSection />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">SkillSwap</span>
              </div>
              <p className="text-background/70 text-sm mb-4">
                The world's leading skill exchange platform. Learn any skill, teach your talent.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            {/* Learn */}
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Browse Skills</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Find Teachers</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Online Sessions</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Group Classes</a></li>
              </ul>
            </div>

            {/* Teach */}
            <div>
              <h4 className="font-semibold mb-4">Teach</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Become a Teacher</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Teacher Resources</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Earn Credits</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  help@skillswap.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm">
              © 2024 SkillSwap. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-background/70 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
