"use client";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultTier?: string;
}

export default function RegisterModal({ open, onClose, defaultTier = "" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", tier: defaultTier || "Not sure", useCase: "", source: "",
  });

  useEffect(() => {
    if (defaultTier) setForm((f) => ({ ...f, tier: defaultTier }));
  }, [defaultTier]);

  useEffect(() => {
    if (open) { setSubmitted(false); }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem("sandbox-ai-leads") || "[]");
      existing.push({ ...form, timestamp: new Date().toISOString() });
      localStorage.setItem("sandbox-ai-leads", JSON.stringify(existing));
    } catch { /* localStorage unavailable */ }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l12 12M16 4L4 16"/></svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
            <p className="text-slate-400 mb-6">We&apos;ll be in touch soon.</p>
            <p className="text-sm text-slate-500">Or email us directly: <a href="mailto:rreid@razoredge.co.za" className="text-cyan-400 hover:underline">rreid@razoredge.co.za</a></p>
            <button onClick={onClose} className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-2 rounded-lg transition-colors">Close</button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-1">Register Interest</h3>
            <p className="text-slate-400 text-sm mb-6">Be first in line when we launch.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone <span className="text-slate-500">(optional)</span></label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50" placeholder="+27..." />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Which tier interests you?</label>
                <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50">
                  <option value="Not sure">Not sure yet</option>
                  <option value="Starter">Starter (R4,500)</option>
                  <option value="Pro">Pro (R9,500)</option>
                  <option value="Enterprise">Enterprise (from R25,000)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">What would you use it for? <span className="text-slate-500">(optional)</span></label>
                <textarea value={form.useCase} onChange={(e) => setForm({ ...form, useCase: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 h-20 resize-none" placeholder="Personal assistant, business automation, etc." />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">How did you hear about us? <span className="text-slate-500">(optional)</span></label>
                <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50">
                  <option value="">Select...</option>
                  <option value="Social media">Social media</option>
                  <option value="Word of mouth">Word of mouth</option>
                  <option value="Search engine">Search engine</option>
                  <option value="Event/conference">Event / conference</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition-colors">Submit</button>
              <p className="text-xs text-slate-500 text-center">Or email <a href="mailto:rreid@razoredge.co.za" className="text-cyan-400 hover:underline">rreid@razoredge.co.za</a></p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
