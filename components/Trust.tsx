const badges = [
  { level: "Standard", desc: "Safe defaults, firewall, auto-updates", color: "border-emerald-500/30 text-emerald-400" },
  { level: "Hardened", desc: "Encrypted comms, network isolation, MFA", color: "border-amber-500/30 text-amber-400" },
  { level: "Paranoid", desc: "Full disk encryption, VPN, RBAC, audit logs", color: "border-red-500/30 text-red-400" },
];

export default function Trust() {
  return (
    <section className="py-20 px-4 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Trust</h2>
        <p className="text-slate-400 mb-4 max-w-2xl mx-auto">Built by IT security professionals with 20+ years in financial services.</p>
        <p className="text-cyan-400 font-semibold text-lg mb-12">Your data never leaves your network.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {badges.map((b) => (
            <div key={b.level} className={`rounded-xl p-6 border ${b.color} bg-white/[0.02] min-w-[200px]`}>
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="text-lg font-bold text-white">{b.level}</h3>
              <p className="text-sm text-slate-400 mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
