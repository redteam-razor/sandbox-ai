const features = [
  { icon: "🤖", title: "Pre-installed AI Assistant", desc: "OpenClaw AI assistant, ready to go out of the box." },
  { icon: "📊", title: "Mission Control Dashboard", desc: "Monitor activity, token spend, and security status from a web UI." },
  { icon: "⚡", title: "Pre-loaded Skills", desc: "Email, calendar, web search, file management — all configured." },
  { icon: "🧙", title: "Guided Setup Wizard", desc: "Connect WiFi, add API keys, personalize — done in 5 minutes." },
  { icon: "🔒", title: "Security Hardening", desc: "Matched to your tier: Standard, Hardened, or Paranoid." },
];

export default function WhatsInTheBox() {
  return (
    <section id="features" className="py-20 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">What&apos;s in the Box</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Everything you need to get started with your private AI — no assembly required.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl p-6 bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
