import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Bot, Users, TrendingUp, Globe, Shield, ArrowDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import AgentCard from '@/components/AgentCard';
import StatsSection from '@/components/StatsSection';
import { agentsData as aiAgents } from '@/constants/agentData';
import { useRef } from 'react';

// Sample AI agents data
// const aiAgents = [
//   {
//     id: 1,
//     name: "Software Testing Copilot",
//     description: "Automates test case creation, generates Selenium scripts, and transforms test documentation into a smart, searchable knowledge base for faster and more reliable software testing.",
//     category: "Software Testing",
//     status: "Coming Soon",
//     interactions: 0,
//     accuracy: 0,
//     features: ["Test Case Generation", "Selenium Script Creation", "Smart Documentation", "Knowledge Base"],
//     gradient: "from-green-500 via-green-600 to-green-700",
//     icon: Bot
//   },
//   {
//     id: 2,
//     name: "Automotive Customer Service Copilot",
//     description: "Streamlines automotive service operations with intelligent automation. Handles appointment booking, conversational service insights, and context-aware support through a smart agent.",
//     category: "Customer Service",
//     status: "Coming Soon",
//     interactions: 0,
//     accuracy: 0,
//     features: ["Calendar Integration", "Conversational Insights", "Contextual Recommendations", "Service Automation"],
//     gradient: "from-green-400 via-green-500 to-green-600",
//     icon: TrendingUp
//   },
//   {
//     id: 3,
//     name: "Accounting Copilot",
//     description: "Automates invoice creation from purchase orders and streamlines reconciliation processes, supporting accounting teams across the entire finance cycle.",
//     category: "Accounting",
//     status: "Coming Soon",
//     interactions: 0,
//     accuracy: 0,
//     features: ["Invoice Generation", "PO Reconciliation", "Accounts Payable Automation", "Month-End Close Support"],
//     gradient: "from-green-600 via-green-700 to-green-800",
//     icon: Shield
//   },
//   {
//     id: 4,
//     name: "Product Discovery Copilot",
//     description: "Helps users quickly discover product details, resolve support queries, and access real-time information using a contextual and searchable AI agent.",
//     category: "Product Discovery",
//     status: "Coming Soon",
//     interactions: 0,
//     accuracy: 0,
//     features: ["Contextual Q&A", "Product Data Search", "Solution Discovery", "Real-Time Assistance"],
//     gradient: "from-green-700 via-green-800 to-green-900",
//     icon: Sparkles
//   },
//   {
//     id: 5,
//     name: "Insurance Copilot",
//     description: "Assists brokers and customers in finding the right insurance products and answering complex queries with accuracy and speed.",
//     category: "Insurance",
//     status: "Coming Soon",
//     interactions: 0,
//     accuracy: 0,
//     features: ["Policy Guidance", "Customer Q&A", "Product Recommendation", "Sales Enablement"],
//     gradient: "from-green-300 via-green-400 to-green-500",
//     icon: Bot
//   },
//   {
//     id: 6,
//     name: "Auditor Copilot",
//     description: "Supports internal audit teams by analyzing data in real-time, flagging anomalies, and ensuring compliance for faster and smarter audits.",
//     category: "Auditing",
//     status: "Coming Soon",
//     interactions: 0,
//     accuracy: 0,
//     features: ["Real-Time Analysis", "Anomaly Detection", "Compliance Monitoring", "Decision Support"],
//     gradient: "from-green-800 via-green-900 to-green-950",
//     icon: TrendingUp
//   }
// ];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const Index = () => {
  const agentsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToAgents = () => {
    agentsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">AI Agents</span>
              <br />
              <span className="text-foreground">That Transform</span>
              <br />
              <span className="text-foreground">Your Workflow</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of intelligent AI agents designed to automate, optimize, and enhance your productivity across various domains.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={handleScrollToAgents}
                size="lg" 
                className="gradient-primary text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 glow-primary"
              >
                Explore Agents
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              {/* <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 rounded-full border-primary/30 hover:bg-primary/10 transition-all duration-300"
              >
                Watch Demo
              </Button> */}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process requests and generate responses in milliseconds with optimized AI models."
              },
              {
                icon: Shield,
                title: "Enterprise Ready",
                description: "Built with security and scalability in mind for enterprise-level deployments."
              },
              {
                icon: Globe,
                title: "Global Access",
                description: "Available 24/7 with multi-language support and worldwide accessibility."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <StatsSection /> */}

      {/* AI Agents Showcase */}
      <section ref={agentsRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">AI Agents</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each agent is specialized for specific tasks and optimized for maximum efficiency and accuracy.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {aiAgents.map((agent, index) => (
              <motion.div key={agent.id} variants={itemVariants}>
                <AgentCard agent={agent} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 rounded-full border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              View All Agents
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our AI agents to boost their productivity and achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                // onClick={()=>navigate('https://www.kloudstac.com/')}
                // href="https://www.kloudstac.com/"
                size="lg" 
                className="gradient-primary text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 glow-primary"
              >
                <a href='https://www.kloudstac.com/' target="_blank">Know More</a>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="px-8 py-3 rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                <a href='https://www.kloudstac.com/contact' target="_blank">Contact Sales</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
