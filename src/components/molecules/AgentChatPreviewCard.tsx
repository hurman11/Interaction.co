'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Send, Terminal as TerminalIcon } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'user' | 'agent';
  text?: string;
  cardContent?: {
    title: string;
    metrics: { label: string; value: string }[];
  };
}

const CHAT_SEQUENCE: ChatMessage[] = [
  {
    id: 1,
    sender: 'user',
    text: '.stats',
  },
  {
    id: 2,
    sender: 'agent',
    cardContent: {
      title: 'System Health & Metrics',
      metrics: [
        { label: 'CPU Load', value: '14%' },
        { label: 'RAM', value: '1.2GB / 4GB' },
        { label: 'Uptime', value: '14d 6h 32m' },
      ],
    },
  },
  {
    id: 3,
    sender: 'user',
    text: 'analyze vercel.com',
  },
  {
    id: 4,
    sender: 'agent',
    cardContent: {
      title: 'Domain Analysis Complete',
      metrics: [
        { label: 'SSL Status', value: 'Valid (240d)' },
        { label: 'Latency', value: '84ms' },
        { label: 'HTTP Status', value: '200 OK' },
      ],
    },
  },
  {
    id: 5,
    sender: 'user',
    text: 'bill add Electric $140 due Sep 12',
  },
  {
    id: 6,
    sender: 'agent',
    cardContent: {
      title: 'Bill Extracted & Logged (SQLite WAL)',
      metrics: [
        { label: 'Biller', value: 'Electric Co.' },
        { label: 'Amount', value: '$140.00' },
        { label: 'Status', value: 'Upcoming (Sep 12)' },
      ],
    },
  },
];

export function AgentChatPreviewCard() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= CHAT_SEQUENCE.length) {
          // Pause at full chat then reset
          setTimeout(() => setVisibleCount(1), 2500);
          return prev;
        }
        return prev + 1;
      });
    }, 1400);

    return () => clearInterval(timer);
  }, []);

  const visibleMessages = CHAT_SEQUENCE.slice(0, visibleCount);

  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl overflow-hidden bg-[#0a0a0d] border border-white/10 flex flex-col font-sans text-white shadow-2xl relative">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-emerald-500/50 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Agent Avatar"
              fill
              unoptimized
              className="object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0d] animate-pulse z-10" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-xs tracking-wide text-white">Agent</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[0.6rem] font-semibold tracking-wider">
                ONLINE
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-white/40 font-mono text-[0.65rem] tracking-widest uppercase">
          <TerminalIcon className="w-3 h-3 text-emerald-400/80" />
          TERMINAL / CHAT
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 p-3.5 space-y-2.5 overflow-y-auto hide-scrollbar flex flex-col justify-end min-h-0">
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              {msg.sender === 'user' ? (
                <div className="px-3 py-1.5 rounded-xl rounded-tr-xs bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 font-mono text-xs font-medium shadow-sm">
                  {msg.text}
                </div>
              ) : (
                <div className="w-full max-w-[90%] p-3 rounded-xl rounded-tl-xs bg-white/5 border border-white/10 text-xs space-y-2 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="font-mono font-bold text-[0.7rem] uppercase tracking-wider text-amber-400">
                      {msg.cardContent?.title}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[0.65rem] font-mono">
                    {msg.cardContent?.metrics.map((m) => (
                      <div key={m.label} className="bg-black/40 p-1.5 rounded border border-white/5">
                        <p className="text-white/40 text-[0.55rem] uppercase">{m.label}</p>
                        <p className="text-white font-bold truncate mt-0.5">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Simulated Input Bar */}
      <div className="px-3 py-2 bg-white/5 border-t border-white/10 shrink-0 flex items-center justify-between gap-2 text-xs">
        <span className="text-white/40 font-mono text-[0.7rem] truncate">
          Message Agent...
        </span>
        <button
          disabled
          aria-label="Send message"
          className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0"
        >
          <Send className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
