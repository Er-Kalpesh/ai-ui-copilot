"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  BrainCircuit, 
  Database, 
  GitMerge, 
  Network, 
  Sparkles, 
  Terminal, 
  ArrowRight,
  Code2,
  Lock,
  Workflow,
  Loader2
} from "lucide-react";

const roles = ["Senior AI Developer", "AI Engineering Manager", "LLM Architect", "Machine Learning Lead"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [prompt, setPrompt] = useState("You are a senior AI engineering manager interviewing a candidate. Ask one highly technical question about vector database scaling.");
  const [output, setOutput] = useState("Waiting for command...");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInference = async () => {
    setIsLoading(true);
    setOutput("Executing inference sequence...");
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      if (res.ok) {
        setOutput(data.response || "No response received.");
      } else {
        setOutput(`Error: ${data.error || 'Failed to fetch response'}`);
      }
    } catch {
      setOutput("Error connecting to the inference engine.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg tracking-tight">AI<span className="text-primary text-gradient">Copilot</span></span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#expertise" className="transition-colors hover:text-foreground/80 text-foreground/60">Expertise</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
            <a href="#demo" className="transition-colors hover:text-foreground/80 text-foreground/60">Live Demo</a>
            <a href="#contact" className="transition-colors text-primary border border-primary/50 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full">Contact Me</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          
          <div className="container relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Available for Leadership Opportunities</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl"
            >
              Building the Future with <br className="hidden md:block"/>
              <span className="text-gradient">Applied Artificial Intelligence</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground h-8"
            >
              I am a <span className="font-semibold text-foreground">{roles[roleIndex]}</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8"
            >
              Bridging the gap between cutting-edge LLM research and production-grade enterprise software. I lead teams to build scalable, secure, and highly performant AI agents and copilot experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex gap-4"
            >
              <a href="#projects" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8 glow-primary">
                View AI Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-8">
                Live Demo
              </a>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Core AI Engineering Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">From fundamental ML ops to advanced Agentic workflows, I bring comprehensive experience across the modern AI stack.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Network, title: "LLM Orchestration", desc: "Designing complex multi-agent architectures using LangChain, AutoGen, and custom framework integrations for autonomous task execution." },
                { icon: Database, title: "RAG & Vector Search", desc: "Building scalable retrieval-augmented generation pipelines using Pinecone, Milvus, and custom reranking models for enterprise knowledge." },
                { icon: BrainCircuit, title: "Fine-Tuning & Evaluation", desc: "Optimizing foundational models (Llama, Mistral) with PEFT/LoRA and establishing rigorous CI/CD evaluations for model performance." },
                { icon: Workflow, title: "AI System Architecture", desc: "Designing resilient cloud architectures (AWS/GCP) for high-throughput, low-latency LLM inference and streaming responses." },
                { icon: Lock, title: "AI Security & Governance", desc: "Implementing guardrails, PII redaction, prompt injection defense, and compliance frameworks for enterprise AI deployments." },
                { icon: GitMerge, title: "MLOps & Delivery", desc: "Leading cross-functional teams to integrate AI models into legacy systems with continuous monitoring and automated drift detection." }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-24 relative">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Production Projects</h2>
                <p className="text-muted-foreground max-w-2xl">A selection of AI systems I&apos;ve architected and deployed to production.</p>
              </div>
            </div>
            
            <div className="space-y-12">
              {/* Project 1 */}
              <div className="flex flex-col lg:flex-row gap-8 items-center rounded-2xl border bg-card/50 p-6 sm:p-8 backdrop-blur-sm">
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Enterprise Copilot
                  </div>
                  <h3 className="text-2xl font-bold">Financial Analysis Agent System</h3>
                  <p className="text-muted-foreground">
                    Architected a multi-agent system for a Tier-1 bank that automates 10-K report analysis. The system uses a hierarchical agent structure where a planner agent delegates specific financial extraction tasks to specialized worker agents, reducing analysis time by 85%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Python", "LangChain", "Gemini Pro", "Pinecone", "GCP"].map((tag) => (
                      <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-primary font-medium hover:underline text-sm mt-4">
                    View Architecture <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
                <div className="w-full lg:w-1/2 aspect-video rounded-lg border bg-muted flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                  <Network className="h-24 w-24 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center rounded-2xl border bg-card/50 p-6 sm:p-8 backdrop-blur-sm">
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                    RAG Infrastructure
                  </div>
                  <h3 className="text-2xl font-bold">Semantic Support Deflection</h3>
                  <p className="text-muted-foreground">
                    Built a low-latency RAG pipeline handling 50k+ daily queries for customer support. Implemented hybrid search (keyword + dense vector), query rewriting, and LLM-as-a-judge for automated evaluation. Achieved a 42% ticket deflection rate while maintaining 95% response accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "FastAPI", "Llama 3", "Qdrant", "Redis", "AWS"].map((tag) => (
                      <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 aspect-video rounded-lg border bg-muted flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-600/20"></div>
                  <Database className="h-24 w-24 text-purple-500/40 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive AI Demo Section */}
        <section id="demo" className="py-24 bg-muted/20 border-y border-border/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Experience the AI</h2>
                <p className="text-muted-foreground">This portfolio itself integrates a demonstration of the Gemini API.</p>
              </div>
              
              <div className="rounded-xl border bg-card shadow-2xl overflow-hidden flex flex-col">
                <div className="border-b bg-muted/50 p-3 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">system-prompt-tester.tsx</span>
                </div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">System Prompt</label>
                      <textarea 
                        className="w-full min-h-[100px] rounded-md border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary font-mono text-xs"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </div>
                    <button 
                      onClick={handleInference}
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />} 
                      {isLoading ? 'Processing...' : 'Run Inference'}
                    </button>
                  </div>
                  <div className="flex-1 rounded-md border bg-muted/30 p-4 font-mono text-sm max-h-[300px] overflow-y-auto">
                    <div className="text-muted-foreground mb-2">{"// Output will stream here..."}</div>
                    <div className="text-primary/90 whitespace-pre-wrap">
                      {output}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t py-12 md:py-16">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg tracking-tight">AI<span className="text-primary">Copilot</span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Senior AI Developer Portfolio. Architected for scale.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Terminal className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Code2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
