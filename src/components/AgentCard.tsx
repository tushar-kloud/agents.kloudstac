
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Agent {
  id: number;
  name: string;
  description: string;
  category: string;
  status: string;
  interactions: number;
  accuracy: number;
  features: string[];
  gradient: string;
  icon: any;
}

interface AgentCardProps {
  agent: Agent;
  index: number;
}

const AgentCard = ({ agent, index }: AgentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = agent.icon;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Beta':
        return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30';
      case 'Coming Soon':
        return 'bg-muted/50 text-muted-foreground border-border';
      default:
        return 'bg-muted/50 text-muted-foreground border-border';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="relative">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            
            <Badge 
              variant="outline" 
              className={`${getStatusColor(agent.status)} font-medium`}
            >
              {agent.status}
            </Badge>
          </div>

          <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
            {agent.name}
          </CardTitle>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <Badge variant="secondary" className="text-xs">
              {agent.category}
            </Badge>
          </div>

          <CardDescription className="text-muted-foreground leading-relaxed">
            {agent.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative space-y-6">
          {/* Stats */}
          {/* {agent.status !== 'Coming Soon' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Interactions</span>
                </div>
                <div className="text-lg font-bold text-primary">
                  {formatNumber(agent.interactions)}
                </div>
              </div>
              
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Accuracy</span>
                </div>
                <div className="text-lg font-bold text-primary">
                  {agent.accuracy}%
                </div>
              </div>
            </div>
          )} */}

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {agent.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-secondary/30 text-muted-foreground text-center truncate"
                  title={feature}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link to={`/agent/${agent.id}`}>
            <Button 
              className="w-full group/btn bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
              variant="secondary"
            >
              <span className="flex items-center justify-center gap-2">
                {agent.status === 'Coming Soon' ? 'Learn More' : 'Interact with Agent'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </CardContent>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 via-transparent to-primary/50 animate-pulse" 
               style={{ padding: '1px', background: 'linear-gradient(45deg, transparent, rgba(90, 186, 71, 0.3), transparent)' }} />
        </div>
      </Card>
    </motion.div>
  );
};

export default AgentCard;
