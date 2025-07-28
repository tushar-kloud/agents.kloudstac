import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Send, BarChart3, Users, Clock, Zap, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import { agentsData as aiAgents } from '@/constants/agentData';

import { Video as VideoIcon } from 'lucide-react';

// This would typically come from an API or database
const getAgentById = (id: string) => {
  const agents = aiAgents

  return agents.find(agent => agent.id === parseInt(id));
};

const AgentDetail = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [showIframe, setShowIframe] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    {
      role: 'agent',
      content: 'Hello! I\'m ready to help you with your coding needs. What would you like me to work on today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const agent = getAgentById(id!);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Agent Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      role: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setChatMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = {
        role: 'agent',
        content: `I understand you want help with: "${message}". Let me analyze this and provide you with a comprehensive solution. This is a simulated response - in the actual implementation, this would connect to the real AI agent.`,
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen mb-10 bg-background text-foreground">
      <AnimatedBackground />
      <Navigation />

      <div className="pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Agents
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg`}>
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gradient">{agent.name}</h1>
                    <p className="text-xl text-muted-foreground">{agent.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                    {agent.status}
                  </Badge>
                  <Badge variant="secondary">{agent.category}</Badge>
                </div>
              </div>

              {/* Stats */}
              {/* <div className="flex gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{(agent.interactions / 1000).toFixed(1)}k</div>
                  <div className="text-sm text-muted-foreground">Interactions</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-400">{agent.accuracy}%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
              </div> */}
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agent Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {agent.capabilities?.map((capability, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {agent.features.map((feature, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 rounded-lg bg-secondary/30 text-sm text-center"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Demo Video Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <Card className="overflow-hidden border lg:w-[850px] border-border/50 bg-card/40 backdrop-blur-md shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <VideoIcon className="w-5 h-5 text-primary" />
                    Agent Demo Walkthrough
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Watch a short video demo to understand how {agent.name} works in real scenarios.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative w-full h-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-b-2xl aspect-video">
                    <video
                      controls
                      className="w-full h-full object-center rounded-b-2xl"
                    >
                      <source src={agent.demoVideoUrl || "/placeholder-demo.mp4"} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Chat Interface */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-[600px] flex flex-col">
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Chat with {agent.name}
                  </CardTitle>
                  <CardDescription>
                    Interact directly with the AI agent. Ask questions, request code, or get help with your projects.
                  </CardDescription>
                </CardHeader>
                
               
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-secondary/50 text-foreground'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>

                <div className="p-4 border-t border-border/50">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type your message or request..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-none bg-secondary/50 border-border/50"
                      rows={2}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="gradient-primary text-white self-end"
                      disabled={!message.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div> */}
          </div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          > */}

          <div>
          </div>
          {/* </motion.div> */}
        </div>
        <div className="w-full min-h-[50px] flex items-center justify-center p-4">
          {!showIframe ? (
            <Button
              onClick={() => setShowIframe(true)}
              className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-md scale-100 hover:scale-105 transition-transform duration-300"
              style={{
                background: 'linear-gradient(to right, #58ba48, #6ad85c)',
              }}
            >
              Launch Agent
            </Button>
          ) : (
            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }} className="w-full border border-border/50 shadow-lg rounded-2xl">
              <CardContent className='w-full'>
                <div className="w-full h-[650px] overflow-hidden relative">
                  <iframe src={agent.url && agent.url} className="w-full h-full border-0" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
