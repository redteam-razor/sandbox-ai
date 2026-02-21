"use client";
import { useState } from "react";

const faqs = [
  { q: "Do I need technical skills?", a: "No — plug in, connect WiFi, follow the wizard. You'll be up and running in minutes." },
  { q: "What AI models does it support?", a: "Claude, GPT, Gemini, local models — your choice. Switch anytime." },
  { q: "Is my data private?", a: "100%. Everything runs on YOUR hardware. Nothing touches the cloud unless you want it to." },
  { q: "Do I need API keys?", a: "Yes, for cloud AI models. Our setup wizard walks you through it in 5 minutes. Or choose our managed API plan." },
  { q: "Can I use it for my business?", a: "Absolutely. The Enterprise tier includes compliance-ready security with RBAC, audit logging, and encrypted storage." },
  { q: "What about updates?", a: "Included in all support plans. Starter gets community updates free." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left gap-4">
        <span className="font-medium text-white">{q}</span>
        <svg className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="pb-5 text-slate-400 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="rounded-2xl bg-white/[0.02] border border-white/5 px-6">
          {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}
