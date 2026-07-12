import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateRecommendations, Recommendation } from '../lib/recommendations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Terminal, Zap, Code, Copy, RotateCcw, Activity, Crosshair, Sparkles } from 'lucide-react';

const PRESET_INTERESTS = [
  "AI/ML", "Web Dev", "Mobile Apps", "Gaming", "Climate Tech", 
  "Health Tech", "Education", "Finance", "Social Impact", 
  "AR/VR", "Blockchain", "Cybersecurity"
];

const HACKATHON_THEMES = [
  "Open Innovation", "Climate & Sustainability", "Health & Wellness", 
  "Education & Learning", "FinTech", "Social Good", "Gaming & Entertainment", 
  "Future of Work", "Smart Cities", "Web3"
];

function LoadingTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const sequence = [
      "Initializing Matchmaker Protocol...",
      "Analyzing skill graph...",
      "Searching domain intersections...",
      "Synthesizing project specs...",
      "Compiling tech stacks...",
      "Matches found. Finalizing pitch generation..."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        setLines(prev => [...prev, sequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-2xl mx-auto bg-black/80 border border-primary/30 rounded-xl p-6 font-mono text-sm shadow-[0_0_40px_rgba(168,85,247,0.2)]"
    >
      <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-4">
        <Terminal className="w-5 h-5 text-primary" />
        <span className="text-primary font-semibold tracking-wider">SYSTEM.EXEC()</span>
      </div>
      <div className="space-y-2 text-green-400">
        {lines.map((line, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="opacity-50 mr-2">{'>'}</span> {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [step, setStep] = useState<"form" | "loading" | "results">("form");
  
  const [name, setName] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [customInterest, setCustomInterest] = useState("");
  const [skillLevel, setSkillLevel] = useState<string>("Beginner");
  const [theme, setTheme] = useState<string>("Open Innovation");
  
  const [results, setResults] = useState<Omit<Recommendation, 'themes' | 'interests'>[]>([]);
  const { toast } = useToast();

  const toggleInterest = (i: string) => {
    if (interests.includes(i)) setInterests(interests.filter(x => x !== i));
    else setInterests([...interests, i]);
  };

  const addCustomInterest = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customInterest.trim()) {
      e.preventDefault();
      const clean = customInterest.trim();
      if (!interests.includes(clean)) {
        setInterests([...interests, clean]);
      }
      setCustomInterest("");
    }
  };

  const handleGenerate = () => {
    if (!name.trim()) {
      toast({ title: "Whoops!", description: "Please enter your name.", variant: "destructive" });
      return;
    }
    if (interests.length === 0) {
      toast({ title: "Hold up!", description: "Select at least one interest.", variant: "destructive" });
      return;
    }

    setStep("loading");
    
    setTimeout(() => {
      const recs = generateRecommendations(name.trim(), interests, skillLevel, theme);
      setResults(recs);
      setStep("results");
    }, 2800);
  };

  const handleCopy = () => {
    const text = results.map(r => `\n🔥 ${r.title}\nRole: ${r.suggestedRole} | Difficulty: ${r.difficulty}\nStack: ${r.techStack.join(', ')}\nPitch: ${r.thirtySecondPitch}`).join('\n\n');
    navigator.clipboard.writeText(text.trim());
    toast({ title: "Copied to clipboard!", description: "Ready to share with your new team." });
  };

  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Neon Cyber Background Elements */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute left-0 right-0 top-[-20%] -z-10 m-auto h-[500px] w-[500px] rounded-full bg-primary/20 opacity-40 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-secondary/20 opacity-40 blur-[100px] pointer-events-none"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto z-10">
        {/* Header section */}
        <div className="text-center space-y-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Your Beginner's Compass for Hackathons</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter text-foreground"
          >
            Find your next <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">
              Big Idea
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Never built anything before? Perfect. Tell us what you like, and we'll hand you a custom project idea, role, and pitch in 60 seconds.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-6 md:p-8 space-y-8"
            >
              {/* Name */}
              <div className="space-y-4">
                <Label className="text-lg font-display flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" /> What's your name, hacker?
                </Label>
                <Input 
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background/80 border-border focus:border-primary text-lg py-6 shadow-inner"
                />
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <Label className="text-lg font-display flex items-center gap-2">
                  <Crosshair className="w-5 h-5 text-secondary" /> What are you into?
                </Label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_INTERESTS.map(interest => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${ 
                        interests.includes(interest) 
                        ? 'bg-primary/20 border-primary text-primary-foreground shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                        : 'bg-background hover:bg-muted border-border text-muted-foreground'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                  {interests.filter(i => !PRESET_INTERESTS.includes(i)).map(custom => (
                    <button
                      key={custom}
                      onClick={() => toggleInterest(custom)}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border bg-primary/20 border-primary text-primary-foreground shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    >
                      {custom} ×
                    </button>
                  ))}
                </div>
                <div className="pt-2">
                  <Input 
                    placeholder="+ Add custom interest and press Enter"
                    value={customInterest}
                    onChange={(e) => setCustomInterest(e.target.value)}
                    onKeyDown={addCustomInterest}
                    className="bg-background/80 border-border max-w-sm"
                  />
                </div>
              </div>

              {/* Skill Level */}
              <div className="space-y-4">
                <Label className="text-lg font-display flex items-center gap-2">
                  <Activity className="w-5 h-5 text-accent" /> Skill Level
                </Label>
                <RadioGroup value={skillLevel} onValueChange={setSkillLevel} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                     <Label key={level} className={`cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${ 
                       skillLevel === level 
                       ? 'border-accent bg-accent/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]' 
                       : 'border-border hover:border-muted bg-background/50'
                     }`}>
                       <RadioGroupItem value={level} className="sr-only" />
                       <span className="font-semibold text-lg">{level}</span>
                     </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Theme */}
              <div className="space-y-4">
                <Label className="text-lg font-display flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" /> Hackathon Theme
                </Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-full bg-background/80 border-border py-6 text-lg">
                    <SelectValue placeholder="Select a theme..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {HACKATHON_THEMES.map((t) => (
                      <SelectItem key={t} value={t} className="focus:bg-primary/20 cursor-pointer">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGenerate}
                className="w-full py-8 mt-4 text-xl font-bold font-display uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] border-none"
              >
                Generate Matches
              </Button>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div key="loading" className="py-12">
              <LoadingTerminal />
            </motion.div>
          )}

          {step === "results" && (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((r, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-col bg-card/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-xl group"
                  >
                    <div className="p-6 border-b border-border bg-background/40">
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
                        <Badge variant="outline" className={`shrink-0
                          ${r.difficulty === 'Beginner' ? 'border-green-500/50 text-green-400 bg-green-500/10' : ''}
                          ${r.difficulty === 'Intermediate' ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10' : ''}
                          ${r.difficulty === 'Advanced' ? 'border-red-500/50 text-red-400 bg-red-500/10' : ''}
                        `}>
                          {r.difficulty}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{r.problemStatement}</p>
                    </div>
                    
                    <div className="p-6 space-y-6 flex-1 flex flex-col">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary/80 mb-2 block">Suggested Role</span>
                        <div className="font-medium text-lg text-foreground">{r.suggestedRole}</div>
                      </div>
                      
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-secondary/80 mb-2 block">Tech Stack</span>
                        <div className="flex flex-wrap gap-2">
                          {r.techStack.map(tech => (
                            <Badge key={tech} variant="secondary" className="bg-secondary/10 text-secondary border border-secondary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="bg-muted/30 p-4 rounded-xl border border-border/50 relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/50 rounded-l-xl"></div>
                          <span className="text-xs font-bold uppercase tracking-wider text-accent/80 mb-2 block pl-2">30-Second Pitch</span>
                          <p className="text-sm italic leading-relaxed text-foreground/90 pl-2\">"{r.thirtySecondPitch}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto pt-4"
              >
                <Button onClick={handleCopy} size="lg" className="flex-1 bg-foreground text-background hover:bg-foreground/90 font-bold">
                  <Copy className="w-5 h-5 mr-2" /> Copy Matches
                </Button>
                <Button onClick={() => setStep("form")} variant="outline" size="lg" className="flex-1 border-border hover:bg-muted text-foreground">
                  <RotateCcw className="w-5 h-5 mr-2" /> Start Over
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
