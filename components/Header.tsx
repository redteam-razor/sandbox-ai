"use client";
import { useState } from "react";
import Logo from "./Logo";
import RegisterModal from "./RegisterModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Logo size={28} />
            <span className="font-bold text-lg text-white">Sandbox AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#data-flow" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#training" className="hover:text-cyan-400 transition-colors">Training</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
            <button onClick={() => setOpen(true)} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors">
              Register Interest
            </button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-4 pb-4 flex flex-col gap-3 text-sm text-slate-300">
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 py-1">Pricing</a>
            <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 py-1">Features</a>
            <a href="#training" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 py-1">Training</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 py-1">FAQ</a>
            <button onClick={() => { setOpen(true); setMenuOpen(false); }} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition-colors w-full">
              Register Interest
            </button>
          </div>
        )}
      </header>
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
