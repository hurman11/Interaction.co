'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ComingSoonPreviewCard() {
  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl overflow-hidden bg-[#090a0f] border border-white/10 flex flex-col items-center justify-center p-6 text-center select-none relative group">
      {/* Blurred Tech Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
        alt="Coming Soon Background"
        fill
        unoptimized
        className="object-cover blur-lg scale-105 opacity-50 transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none" />

      {/* Main Coming Soon Message */}
      <div className="relative z-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-widest text-white/90 uppercase">
            UPCOMING
          </span>
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
          Coming Soon
        </h3>

        <p className="text-xs text-white/60 font-light tracking-wide">
          Stay tuned.
        </p>
      </div>

      {/* Pulsing Dots Indicator */}
      <div className="flex items-center gap-1.5 pt-4 relative z-10">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-accent-blue"
          />
        ))}
      </div>
    </div>
  );
}
