import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Clock, MapPin, BookOpen, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: {
    id: number;
    name: string;
    description?: string;
    category: string;
    level: "Beginner" | "Intermediate" | "Expert";
    creditsPerHour: number;
    type: "Offered" | "Requested";
    isAvailable?: boolean;
  };
  user: {
    id: string;
    name: string;
    avatar?: string;
    location?: string;
    rating: number;
    reviewCount: number;
  };
  className?: string;
  onBookSession?: () => void;
  onSendMessage?: () => void;
  onViewProfile?: () => void;
}

const levelColors = {
  Beginner: "bg-success-light text-success-foreground border-success/20",
  Intermediate: "bg-warning-light text-warning-foreground border-warning/20",
  Expert: "bg-destructive-light text-destructive-foreground border-destructive/20",
};

const typeColors = {
  Offered: "bg-primary/10 text-primary border-primary/20",
  Requested: "bg-accent text-accent-foreground border-accent/20",
};

export const SkillCard = ({
  skill,
  user,
  className,
  onBookSession,
  onSendMessage,
  onViewProfile,
}: SkillCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={typeColors[skill.type]}>
                {skill.type === "Offered" ? (
                  <BookOpen className="h-3 w-3 mr-1" />
                ) : (
                  <Users className="h-3 w-3 mr-1" />
                )}
                {skill.type}
              </Badge>
              <Badge variant="outline" className={levelColors[skill.level]}>
                {skill.level}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {skill.description || "No description provided"}
            </p>
          </div>
          {skill.type === "Offered" && skill.isAvailable && (
            <div className="flex items-center text-success">
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              <span className="text-xs font-medium">Available</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            <Badge variant="secondary" className="text-xs">
              {skill.category}
            </Badge>
          </div>
          <div className="flex items-center text-primary font-semibold">
            <span className="text-lg">{skill.creditsPerHour}</span>
            <span className="text-sm text-muted-foreground ml-1">credits/hr</span>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-background-secondary/50 border border-border/30">
          <Avatar className="h-10 w-10 ring-2 ring-primary/10" onClick={onViewProfile}>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium text-sm text-foreground cursor-pointer hover:text-primary transition-colors" onClick={onViewProfile}>
              {user.name}
            </p>
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-warning text-warning mr-1" />
                <span>{user.rating.toFixed(1)}</span>
                <span className="ml-1">({user.reviewCount})</span>
              </div>
              {user.location && (
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{user.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          {skill.type === "Offered" ? (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={onSendMessage}
              >
                Message
              </Button>
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={onBookSession}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={onViewProfile}
              >
                View Profile
              </Button>
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={onSendMessage}
              >
                <Users className="h-4 w-4 mr-2" />
                Offer Help
              </Button>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};