'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Bot,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  Terminal,
  FileText,
  Video,
  DollarSign,
  Lock,
  GitPullRequest,
  CheckCircle2,
  ExternalLink,
  Zap,
  Server,
  Network,
  User,
  Sparkles,
  Search,
  Code
} from 'lucide-react';
import { Button } from '../atoms/Button';
import { Magnetic } from '../atoms/Magnetic';
import { AgentChatPreviewCard } from './AgentChatPreviewCard';

interface WhatsAppCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsAppCaseStudyModal({ isOpen, onClose }: WhatsAppCaseStudyModalProps) {
  // Lock body scroll when modal is open & listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            key="modal-container"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-3 sm:p-6 md:p-10 pointer-events-none"
          >
            <div className="relative w-full max-w-4xl max-h-[90dvh] overflow-y-auto rounded-3xl glass-card border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#08080a]/95 backdrop-blur-2xl shadow-2xl pointer-events-auto flex flex-col text-text-primary">
              
              {/* Floating Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/60 dark:bg-white/10 dark:hover:bg-white/20 border border-white/10 backdrop-blur-md text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Main Content Area */}
              <div className="p-5 sm:p-8 md:p-10 space-y-8 md:space-y-10">

                {/* HERO HEADER & LIVE TERMINAL SHOWCASE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 border-b border-black/5 dark:border-white/10 pb-8 items-start pt-1 sm:pt-0 pr-10 sm:pr-12 lg:pr-0">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase">
                      <Bot className="w-3.5 h-3.5" />
                      Autonomous Multi-Agent System
                    </div>
                    <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary">
                      💬 WhatsApp AI Agent
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
                      A self-hosted, headless AI assistant operating entirely inside WhatsApp. Performs remote server management, financial bill extraction, media processing, and memory search without opening a terminal or app.
                    </p>

                    {/* TECH BADGES */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        'Node.js',
                        'WhatsApp Web (Puppeteer)',
                        'SQLite (WAL)',
                        'Groq (Llama 3.3)',
                        'OpenAI (GPT-4o)',
                        'Gemini 2.5 Flash',
                        'Ollama (Local)',
                        'PM2'
                      ].map((badge) => (
                        <span
                          key={badge}
                          className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-mono text-[0.7rem] sm:text-xs text-text-secondary font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LIVE SIMULATED TERMINAL CARD */}
                  <div className="lg:col-span-5 h-[230px] sm:h-[260px] lg:h-[280px] w-full shrink-0">
                    <AgentChatPreviewCard />
                  </div>
                </div>

                {/* SECTION 1: WHAT IT IS & CORE PROBLEM */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-accent-blue font-mono font-bold text-xs uppercase tracking-widest">
                    <Terminal className="w-4 h-4" />
                    01. Overview & Core Problem Solved
                  </div>
                  <h2 className="text-2xl font-display font-bold text-text-primary">
                    Zero-Friction Remote Server & Life Operations
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-text-secondary leading-relaxed font-light">
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                      <h3 className="font-semibold text-text-primary text-base flex items-center gap-2">
                        <Server className="w-4 h-4 text-emerald-500" />
                        Server Management Over Chat
                      </h3>
                      <p>
                        Managing a Linux server traditionally requires SSH access, terminal expertise, and VPN connectivity. The WhatsApp Agent removes this friction completely: run shell commands, check container logs, restart services, and inspect memory via natural language chat messages.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                      <h3 className="font-semibold text-text-primary text-base flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-accent-blue" />
                        Instant Financial & Life Logging
                      </h3>
                      <p>
                        No need to open financial apps to track bills or type out notes. Simply forward a photo of a receipt or type a bill note directly to the agent in WhatsApp—Gemini vision extracts the biller, due date, and amount automatically into SQLite.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: 5-TIER LANGUAGE MODEL STRATEGY */}
                <div className="space-y-5 border-t border-black/5 dark:border-white/10 pt-8">
                  <div className="flex items-center gap-2 text-accent-blue font-mono font-bold text-xs uppercase tracking-widest">
                    <Layers className="w-4 h-4" />
                    02. 5-Tier Fallback Chain Strategy
                  </div>
                  <h2 className="text-2xl font-display font-bold text-text-primary">
                    Multi-Provider Resilience & Vision Fallback
                  </h2>
                  <p className="text-sm text-text-secondary font-light leading-relaxed max-w-3xl">
                    Relying on a single AI provider creates a single point of failure. The system uses a 5-tier fallback chain with automatic rate-limit retry logic (HTTP 429 backoff) and instant auth failure propagation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-emerald-500">Tier 1 — Cloud</span>
                        <span className="text-[0.65rem] font-mono text-text-muted">GPT-4o</span>
                      </div>
                      <p className="font-semibold text-text-primary text-sm">OpenAI GPT-4o</p>
                      <p className="text-xs text-text-secondary font-light">Highest quality tier for complex multi-step reasoning and long-context processing.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-accent-blue">Tier 2 — Workhorse</span>
                        <span className="text-[0.65rem] font-mono text-text-muted">&lt; 2s Latency</span>
                      </div>
                      <p className="font-semibold text-text-primary text-sm">Groq (Llama 3.3 70B)</p>
                      <p className="text-xs text-text-secondary font-light">Primary engine handling 80%+ of daily traffic with ultra-fast sub-2-second responses.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-purple-400">Tier 3 — Multimodal</span>
                        <span className="text-[0.65rem] font-mono text-text-muted">Vision</span>
                      </div>
                      <p className="font-semibold text-text-primary text-sm">Gemini 2.5 Flash</p>
                      <p className="text-xs text-text-secondary font-light">Processes all image attachments (bills, screenshots) and acts as cloud fallback.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-amber-500">Tier 4 — Local</span>
                        <span className="text-[0.65rem] font-mono text-text-muted">Ollama CPU</span>
                      </div>
                      <p className="font-semibold text-text-primary text-sm">Ollama (Primary)</p>
                      <p className="text-xs text-text-secondary font-light">Zero API cost, zero network dependency. Runs offline when internet is unavailable.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1.5 sm:col-span-2 lg:col-span-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-red-400">Tier 5 — Last Defense</span>
                        <span className="text-[0.65rem] font-mono text-text-muted">Pure Text Constraint</span>
                      </div>
                      <p className="font-semibold text-text-primary text-sm">Ollama (Secondary Fallback)</p>
                      <p className="text-xs text-text-secondary font-light">
                        Smaller fallback model. To prevent local models from hallucinating tool calls on simple chat messages, local tiers receive <strong>zero tool definitions</strong>, enforcing pure text output and zero multi-minute roundtrips.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: MULTI-AGENT ROUTING & DELEGATION */}
                <div className="space-y-6 border-t border-black/5 dark:border-white/10 pt-8">
                  <div className="flex items-center gap-2 text-accent-blue font-mono font-bold text-xs uppercase tracking-widest">
                    <Cpu className="w-4 h-4" />
                    03. Multi-Agent Routing Architecture
                  </div>
                  <h2 className="text-2xl font-display font-bold text-text-primary">
                    8 Specialist Agents & Inter-Agent Delegation
                  </h2>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    Instead of a single bloated agent, requests pass through a 2-phase classifier (Regex zero-latency matching → LLM fallback) to dispatch tasks to domain-focused specialist agents with minimized context windows.
                  </p>

                  {/* 8 AGENTS GRID */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { title: 'Sysadmin', icon: Server, desc: 'Shell, Docker, Cron, Disk' },
                      { title: 'Network', icon: Network, desc: 'Ping, Port scan, VPN, OSINT' },
                      { title: 'Personal', icon: User, desc: 'SQLite FTS5 Notes, Reminders' },
                      { title: 'Creative', icon: Sparkles, desc: 'SD Image Gen, TTS, yt-dlp' },
                      { title: 'Finance', icon: DollarSign, desc: 'Bill extraction, Due status' },
                      { title: 'Broker', icon: Search, desc: 'Serper web search, Audit logs' },
                      { title: 'Code', icon: Code, desc: '2-pass draft & cloud review' },
                      { title: 'General', icon: Bot, desc: 'Catch-all conversational fallback' },
                    ].map((agent) => {
                      const Icon = agent.icon;
                      return (
                        <div key={agent.title} className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-1">
                          <div className="flex items-center gap-1.5 text-accent-blue">
                            <Icon className="w-3.5 h-3.5" />
                            <span className="font-semibold text-xs text-text-primary">{agent.title}</span>
                          </div>
                          <p className="text-[0.7rem] text-text-muted font-light leading-snug">{agent.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* DELEGATION HIGHLIGHT */}
                  <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/20 text-xs text-text-secondary space-y-1 font-light">
                    <p className="font-semibold text-accent-blue text-sm flex items-center gap-1.5">
                      <GitPullRequest className="w-4 h-4" />
                      Inter-Agent Delegation (`delegate_to_subagent`)
                    </p>
                    <p>
                      Complex multi-domain requests (e.g. "search the web for X and save it as a note") allow the General agent to delegate subtasks to Broker and Personal agents. A strict depth limit of 1 prevents recursive delegation loops.
                    </p>
                  </div>
                </div>

                {/* SECTION 4: KEY FEATURE MODULES & SECURITY */}
                <div className="space-y-6 border-t border-black/5 dark:border-white/10 pt-8">
                  <div className="flex items-center gap-2 text-accent-blue font-mono font-bold text-xs uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4" />
                    04. Security Architecture & Feature Deep Dives
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* YouTube Processing */}
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                      <h3 className="font-semibold text-text-primary text-base flex items-center gap-2">
                        <Video className="w-4 h-4 text-red-500" />
                        YouTube Transcript Deduplication
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-light">
                        VTT caption files contain scrolling cue overlaps. The system applies a <strong>sliding-window word-overlap algorithm</strong> to clean and assemble raw VTT subtitles into clean transcripts before feeding to LLM context.
                      </p>
                    </div>

                    {/* Security & Delimiters */}
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                      <h3 className="font-semibold text-text-primary text-base flex items-center gap-2">
                        <Lock className="w-4 h-4 text-amber-400" />
                        Prompt Injection & Blacklist Defense
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-light">
                        External web data is wrapped in <code className="text-accent-blue font-mono">[UNTRUSTED DATA]</code> tags. Destructive shell commands (rm -rf, format) are blocked by regex unless explicit force-override confirmation is given.
                      </p>
                    </div>

                    {/* Database & FTS5 */}
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                      <h3 className="font-semibold text-text-primary text-base flex items-center gap-2">
                        <Database className="w-4 h-4 text-emerald-400" />
                        SQLite WAL Mode & FTS5 Search
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-light">
                        Single SQLite file with 18 tables in WAL mode. Full-text search for notes uses FTS5 virtual tables synced automatically via SQLite triggers. Automatic retention prunes old logs after 90 days.
                      </p>
                    </div>

                    {/* Self Improvement */}
                    <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                      <h3 className="font-semibold text-text-primary text-base flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                        Self-Improvement & 2-Pass Code Review
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed font-light">
                        Includes an <code className="text-accent-blue font-mono">apply_suggestion</code> meta-tool that validates ES module syntax before hot-installing new tools. Code generation runs via 2-pass local draft + cloud approval.
                      </p>
                    </div>

                  </div>
                </div>

                {/* SECTION 5: TECHNICAL SUMMARY TABLE */}
                <div className="space-y-4 border-t border-black/5 dark:border-white/10 pt-8">
                  <h3 className="text-xl font-display font-bold text-text-primary">
                    System Architecture Summary
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 font-mono text-xs">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        <tr className="border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                          <td className="p-3 font-semibold text-accent-blue">Runtime Environment</td>
                          <td className="p-3 text-text-secondary">Node.js with ES Modules (PM2 Process Manager)</td>
                        </tr>
                        <tr className="border-b border-black/5 dark:border-white/5">
                          <td className="p-3 font-semibold text-accent-blue">WhatsApp Integration</td>
                          <td className="p-3 text-text-secondary">whatsapp-web.js (Headless Puppeteer Chromium)</td>
                        </tr>
                        <tr className="border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                          <td className="p-3 font-semibold text-accent-blue">Database Storage</td>
                          <td className="p-3 text-text-secondary">SQLite (WAL Mode, 18 tables, FTS5 Virtual Search)</td>
                        </tr>
                        <tr className="border-b border-black/5 dark:border-white/5">
                          <td className="p-3 font-semibold text-accent-blue">LLM Fallback Chain</td>
                          <td className="p-3 text-text-secondary">5 Tiers (OpenAI → Groq → Gemini 2.5 → Ollama Primary → Ollama Secondary)</td>
                        </tr>
                        <tr className="bg-black/5 dark:bg-white/5">
                          <td className="p-3 font-semibold text-accent-blue">Specialized Agents</td>
                          <td className="p-3 text-text-secondary">8 Specialist Domains (Sysadmin, Network, Personal, Creative, Finance, Broker, Code, General)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ACTION CTAs & FOOTER */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 dark:border-white/10 pt-6">
                  <Magnetic>
                    <Button
                      variant="rainbow"
                      size="md"
                      className="w-full sm:w-auto font-mono tracking-wider font-bold"
                      onClick={() => window.open('https://github.com/hurman11', '_blank', 'noopener,noreferrer')}
                      iconRight={<ExternalLink className="w-4 h-4 text-fuchsia-400" />}
                    >
                      View GitHub Repository
                    </Button>
                  </Magnetic>

                  <Magnetic>
                    <Button variant="secondary" size="md" onClick={onClose} className="w-full sm:w-auto">
                      Close Case Study
                    </Button>
                  </Magnetic>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
