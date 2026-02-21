"use client";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Your Private AI Assistant.{" "}
              <span className="text-cyan-400">Ready in Minutes.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 animate-fade-in-delay-1">
              Pre-configured, sandboxed, secure. No cloud. No coding. Just plug in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <button onClick={() => setOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-3 rounded-lg text-lg transition-colors">
                Register Interest
              </button>
              <a href="#pricing" className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3 rounded-lg text-lg transition-colors text-center">
                View Pricing
              </a>
            </div>
          </div>

          {/* Glowing cube illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64" style={{ perspective: "600px" }}>
              <div className="w-full h-full animate-float">
                <svg viewBox="0 0 200 200" className="w-full h-full animate-glow rounded-2xl">
                  <defs>
                    <linearGradient id="hero-grad-top" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="hero-grad-left" x1="0" y1="0" x2="0" y2="200">
                      <stop offset="0%" stopColor="#0891b2" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                  </defs>
                  {/* Top */}
                  <path d="M100 30L170 65L100 100L30 65Z" fill="url(#hero-grad-top)" opacity="0.9" />
                  {/* Left */}
                  <path d="M30 65L100 100V170L30 135Z" fill="#0891b2" opacity="0.6" />
                  {/* Right */}
                  <path d="M170 65L100 100V170L170 135Z" fill="#06b6d4" opacity="0.75" />
                  {/* Inner glow lines */}
                  <path d="M100 100V170" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                  <path d="M30 65L100 100" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
                  <path d="M170 65L100 100" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
