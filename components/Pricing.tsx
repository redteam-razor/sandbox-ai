"use client";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

const tiers = [
  {
    emoji: "🥉",
    name: "Starter",
    price: "R4,500",
    desc: "Raspberry Pi 5, personal AI assistant, safe defaults.",
    perfect: "Individuals, creators, professionals.",
    features: ["Personal AI assistant", "Web dashboard", "Guided setup wizard", "Community updates", "Standard security"],
    highlight: false,
  },
  {
    emoji: "🥈",
    name: "Pro",
    price: "R9,500",
    desc: "Mini PC, multi-agent, family/team use, hardened security.",
    perfect: "Families, small teams, freelancers.",
    features: ["Everything in Starter", "Multi-agent support", "Family/team accounts", "Hardened security", "Priority support"],
    highlight: true,
  },
  {
    emoji: "🥇",
    name: "Enterprise",
    price: "From R25,000",
    desc: "Hardened appliance, encrypted storage, VPN, RBAC, audit logging.",
    perfect: "Businesses, financial services, compliance-sensitive orgs.",
    features: ["Everything in Pro", "Encrypted storage", "VPN & RBAC", "Audit logging", "Compliance-ready"],
    highlight: false,
  },
];

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");

  return (
    <>
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Choose Your Tier</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Every box comes pre-configured and ready to go. Pick the one that fits your needs.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 ${tier.highlight ? "bg-cyan-500/5 border-cyan-500/30 shadow-lg shadow-cyan-500/10" : "bg-white/[0.02] border-white/10"}`}>
                {tier.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>}
                <div className="text-3xl mb-2">{tier.emoji}</div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="text-2xl font-bold text-cyan-400 mt-2">{tier.price}</div>
                <p className="text-slate-400 mt-3 text-sm">{tier.desc}</p>
                <p className="text-slate-500 text-xs mt-1">Perfect for: {tier.perfect}</p>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => { setSelectedTier(tier.name); setOpen(true); }} className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors ${tier.highlight ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950" : "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"}`}>
                  Register Interest
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RegisterModal open={open} onClose={() => setOpen(false)} defaultTier={selectedTier} />
    </>
  );
}
