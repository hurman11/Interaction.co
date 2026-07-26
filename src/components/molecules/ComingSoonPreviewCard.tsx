'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, ArrowUpRight } from 'lucide-react';

export function ComingSoonPreviewCard() {
  return (
    <div className="w-full h-full min-h-[230px] rounded-2xl overflow-hidden bg-[#0a0b10] border border-white/10 flex flex-col justify-between p-5 text-white shadow-2xl relative group select-none">
      {/* Ambient Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-accent-blue/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          <span className="font-mono text-[0.65rem] font-semibold tracking-wider text-white/80 uppercase">
            R&D LABS
          </span>
        </div>
        <span className="font-mono text-[0.65rem] text-white/40 tracking-widest uppercase flex items-center gap-1">
          <Cpu className="w-3 h-3 text-accent-blue/80" />
          V2.0 ARCHITECTURE
        </span>
      </div>

      {/* Center Content */}
      <div className="my-auto z-10 space-y-3 py-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-md shadow-lg group-hover:border-accent-blue/40 transition-colors duration-500">
            <Sparkles className="w-5 h-5 text-accent-blue" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-tight text-white group-hover:text-accent-blue transition-colors">
              Next-Gen Enterprise Platform
            </h4>
            <p className="font-mono text-[0.65rem] text-white/50 tracking-wide uppercase">
              Active Engineering & Integration
            </p>
          </div>
        </div>

        {/* Progress Bar Component */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center font-mono text-[0.6rem] text-white/50">
            <span>DEVELOPMENT MILESTONE</span>
            <span className="text-accent-blue font-bold">85% COMPLETE</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden border border-white/5 p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-accent-blue to-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between z-10 pt-2 border-t border-white/5">
        <span className="font-mono text-[0.65rem] text-white/40 uppercase tracking-wider">
          UNVEILING 2025
        </span>
        <span className="text-xs text-white/60 group-hover:text-white font-medium flex items-center gap-1 transition-colors">
          Confidential Spec
          <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-accent-blue transition-colors" />
        </span>
      </div>
    </div>
  );
}
