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
import { Zap, Code, Copy, RotateCcw, Activity, Crosshair, Sparkles, Check, CheckCircle2, X } from 'lucide-react';

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

const LOADING_STEPS = [
  "Reading your interests...",
  "Matching to project ideas...",
  "Building your tech stack...",
  "Crafting your suggested role...",
  "Writing your 30-second pitch...",
];

function LoadingState() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < LOADING_STEPS.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      className="w-full max-w-md mx-auto text-center py-16 px-6"
    >
      {/* Spinner */}
      <div className="flex justify-center mb-8">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
          <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-display font-bold text-foreground mb-6">Finding your matches...</h2>

      {/* Step list */}
      <div className="space-y-3 text-left">
        {LOADING_STEPS.map((step, idx) => {
          const isDone = idx < currentStep;
          const isActive = idx === currentStep;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: isDone || isActive ? 1 : 0.3, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-3"
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                isDone ? 'bg-primary/20' : isActive ? 'bg-primary/10' : 'bg-muted'
              }`}>
                {isDone ? (
                  <Check className="w-3 h-3 text-primary" />
                ) : isActive ? (
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                )}
              </div>
              <span className={`text-sm transition-colors ${
                isDone ? 'text-muted-foreground line-through' : isActive ? 'text-foreground font-medium' : 'text-muted-foreground/50'
              }`}>
                {step}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

interface FieldErrors {
  name?: string;
  interests?: string;
}

export default function Home() {
  const [step, setStep] = useState<"form" | "loading" | "results">("form");

  const [name, setName] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [customInterest, setCustomInterest] = useState("");
  const [skillLevel, setSkillLevel] = useState<string>("Beginner");
  const [theme, setTheme] = useState<string>("Open Innovation");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [copied, setCopied] = useState(false);

  const [results, setResults] = useState<Omit<Recommendation, 'themes' | 'interests'>[]>([]);
  const { toast } = useToast();

  const toggleInterest = (i: string) => {
    const next = interests.includes(i) ? interests.filter(x => x !== i) : [...interests, i];
    setInterests(next);
    if (next.length > 0 && errors.interests) {
      setErrors(prev => ({ ...prev, interests: undefined }));
    }
  };

  const addCustomInterest = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && customInterest.trim()) {
      e.preventDefault();
      const clean = customInterest.trim();
      if (!interests.includes(clean)) {
        const next = [...interests, clean];
        setInterests(next);
        if (errors.interests) setErrors(prev => ({ ...prev, interests: undefined }));
      }
      setCustomInterest("");
    }
  };

  const handleGenerate = () => {
    const newErrors: FieldErrors = {};
    if (!name.trim()) newErrors.name = "Please enter your name to personalise the results.";
    if (interests.length === 0) newErrors.interests = "Pick at least one interest so we can match you.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      setTimeout(() => {
        document.getElementById('field-name')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }

    setErrors({});
    setStep("loading");

    setTimeout(() => {
      const recs = generateRecommendations(name.trim(), interests, skillLevel, theme);
      setResults(recs);
      setStep("results");
    }, 2800);
  };

  const handleCopy = () => {
    const text = results.map((r, i) =>
      `#${i + 1} ${r.title}\nProblem: ${r.problemStatement}\nYour Role: ${r.suggestedRole}\nDifficulty: ${r.difficulty}\nTech Stack: ${r.techStack.join(', ')}\nPitch: "${r.thirtySecondPitch}"`
    ).join('\n\n---\n\n');
    navigator.clipboard.writeText(text.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleReset = () => {
    setStep("form");
    setResults([]);
    setErrors({});
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden flex flex-col items-center py-12 px-4 sm:px-6">
      {/* Background */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[400px] w-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[300px] w-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="w-full max-w-3xl mx-auto z-10">
        {/* Hero */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beginner-friendly hackathon tool</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl font-display font-black tracking-tight text-foreground mb-4"
          >
            Find your next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Big Idea
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Tell us your interests and skill level — we'll match you with 3 hackathon project ideas and a role built for you.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {/* ── FORM ── */}
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-6 sm:p-8 space-y-7"
            >
              {/* Name */}
              <div id="field-name" className="space-y-2">
                <Label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  Your name
                </Label>
                <Input
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.trim() && errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                  className={`bg-background/60 text-base h-11 ${errors.name ? 'border-destructive focus-visible:ring-destructive/40' : 'border-border focus:border-primary'}`}
                />
                {errors.name && (
                  <p className="text-destructive text-xs flex items-center gap-1 mt-1">
                    <X className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Crosshair className="w-4 h-4 text-secondary" />
                  Interests
                  <span className="text-muted-foreground font-normal">(pick one or more)</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {PRESET_INTERESTS.map(interest => {
                    const active = interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border ${
                          active
                            ? 'bg-primary border-primary text-white shadow-[0_0_12px_rgba(168,85,247,0.35)]'
                            : 'bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                        }`}
                      >
                        {active && <Check className="w-3 h-3 inline mr-1 -mt-0.5" />}
                        {interest}
                      </button>
                    );
                  })}
                  {/* Custom interests */}
                  {interests.filter(i => !PRESET_INTERESTS.includes(i)).map(custom => (
                    <button
                      key={custom}
                      type="button"
                      onClick={() => toggleInterest(custom)}
                      className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border bg-primary border-primary text-white shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                    >
                      {custom}
                      <X className="w-3 h-3 inline ml-1.5 -mt-0.5 opacity-70" />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Add a custom interest, then press Enter"
                    value={customInterest}
                    onChange={(e) => setCustomInterest(e.target.value)}
                    onKeyDown={addCustomInterest}
                    className="bg-background/60 border-border max-w-xs text-sm h-9"
                  />
                </div>
                {errors.interests && (
                  <p className="text-destructive text-xs flex items-center gap-1">
                    <X className="w-3 h-3" /> {errors.interests}
                  </p>
                )}
              </div>

              {/* Skill Level */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Activity className="w-4 h-4 text-accent" />
                  Skill level
                </Label>
                <RadioGroup value={skillLevel} onValueChange={setSkillLevel} className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Beginner", desc: "Just starting out" },
                    { label: "Intermediate", desc: "Some experience" },
                    { label: "Advanced", desc: "Confident builder" },
                  ].map(({ label, desc }) => (
                    <Label
                      key={label}
                      className={`cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all text-center ${
                        skillLevel === label
                          ? 'border-accent bg-accent/10'
                          : 'border-border hover:border-accent/40 bg-background/40'
                      }`}
                    >
                      <RadioGroupItem value={label} className="sr-only" />
                      <span className="font-semibold text-sm sm:text-base">{label}</span>
                      <span className="text-xs text-muted-foreground mt-0.5 hidden sm:block">{desc}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              {/* Theme */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <Code className="w-4 h-4 text-primary" />
                  Hackathon theme
                </Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-full bg-background/60 border-border h-11 text-sm">
                    <SelectValue placeholder="Select a theme..." />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {HACKATHON_THEMES.map((t) => (
                      <SelectItem key={t} value={t} className="focus:bg-primary/20 cursor-pointer">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Button
                  onClick={handleGenerate}
                  size="lg"
                  className="w-full h-12 text-base font-bold tracking-wide bg-primary hover:bg-primary/90 text-white shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] transition-all"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate My Matches
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  No sign-up needed — results appear instantly.
                </p>
              </div>
            </motion.div>
          )}

          {/* ── LOADING ── */}
          {step === "loading" && (
            <motion.div key="loading">
              <LoadingState />
            </motion.div>
          )}

          {/* ── RESULTS ── */}
          {step === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Results header */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Your 3 matches, {name}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">Tap any card to read the full pitch.</p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 gap-5 sm:gap-6">
                {results.map((r, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors shadow-lg"
                  >
                    {/* Card header */}
                    <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-border/60">
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-xl text-foreground leading-tight">{r.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{r.problemStatement}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`flex-shrink-0 text-xs font-semibold mt-0.5 ${
                          r.difficulty === 'Beginner' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
                          r.difficulty === 'Intermediate' ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10' :
                          'border-red-500/50 text-red-400 bg-red-500/10'
                        }`}
                      >
                        {r.difficulty}
                      </Badge>
                    </div>

                    {/* Card body */}
                    <div className="px-5 sm:px-6 py-4 space-y-4">
                      {/* Role */}
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary/70 w-20 flex-shrink-0 pt-0.5">Role</span>
                        <span className="text-sm font-semibold text-foreground">{r.suggestedRole}</span>
                      </div>

                      {/* Tech stack */}
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-secondary/70 w-20 flex-shrink-0 pt-1">Stack</span>
                        <div className="flex flex-wrap gap-1.5">
                          {r.techStack.map(tech => (
                            <span key={tech} className="px-2 py-0.5 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pitch */}
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent/70 w-20 flex-shrink-0 pt-1">Pitch</span>
                        <p className="text-sm text-foreground/85 leading-relaxed italic">"{r.thirtySecondPitch}"</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <Button
                  onClick={handleCopy}
                  size="lg"
                  className="flex-1 h-11 font-semibold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all"
                >
                  {copied ? (
                    <><CheckCircle2 className="w-4 h-4 mr-2" /> Copied!</>
                  ) : (
                    <><Copy className="w-4 h-4 mr-2" /> Copy All Results</>
                  )}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="flex-1 h-11 font-semibold border-border hover:bg-muted text-foreground"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start Over
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
