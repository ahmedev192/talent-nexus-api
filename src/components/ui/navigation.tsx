import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AuthModal } from "@/components/ui/auth-modal";
import { Bell, Search, Menu, X, BookOpen, Users, Calendar, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    creditBalance?: number;
    unreadNotifications?: number;
  };
  className?: string;
}

export const Navigation = ({ isAuthenticated = false, user, className }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <nav className={cn("border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SkillSwap
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Search className="h-4 w-4 mr-2" />
                  Discover Skills
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  My Matches
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Sessions
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Messages
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  How it Works
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  Browse Skills
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  For Teachers
                </Button>
              </>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Credit Balance */}
                <Badge variant="secondary" className="bg-success-light text-success-foreground border-success/20">
                  {user?.creditBalance || 0} Credits
                </Badge>
                
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  {user?.unreadNotifications && user.unreadNotifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-warning">
                      {user.unreadNotifications}
                    </Badge>
                  )}
                </Button>

                {/* User Avatar */}
                <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setAuthMode('signin');
                    setAuthModalOpen(true);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gradient-primary hover:shadow-card-hover transition-all duration-300" 
                  onClick={() => {
                    setAuthMode('signup');
                    setAuthModalOpen(true);
                  }}
                >
                  Get Started
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" className="justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Discover Skills
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    My Matches
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Sessions
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Messages
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="justify-start">
                    How it Works
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Browse Skills
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    For Teachers
                  </Button>
                  <div className="pt-3 border-t border-border/50">
                    <Button 
                      variant="ghost" 
                      className="justify-start w-full mb-2" 
                      onClick={() => {
                        setAuthMode('signin');
                        setAuthModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="w-full bg-gradient-primary" 
                      onClick={() => {
                        setAuthMode('signup');
                        setAuthModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </nav>
  );
};