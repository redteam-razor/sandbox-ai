const services = [
  { name: "Onboarding", price: "Included", desc: "2-hour setup call to get you running.", tag: "Free" },
  { name: "Power User Workshop", price: "R10,000", desc: "Half-day deep dive into advanced features and customization.", tag: null },
  { name: "Team Rollout", price: "From R25,000", desc: "Full department onboarding, configuration, and training.", tag: null },
  { name: "Monthly Support Retainer", price: "R3,000–R5,000/mo", desc: "Ongoing support, updates, and priority assistance.", tag: null },
];

export default function Training() {
  return (
    <section id="training" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Training &amp; Support</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">From first boot to full deployment, we&apos;ve got you covered.</p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((s) => (
            <div key={s.name} className="rounded-xl p-6 bg-white/[0.02] border border-white/5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                {s.tag && <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">{s.tag}</span>}
              </div>
              <div className="text-cyan-400 font-bold mt-1">{s.price}</div>
              <p className="text-sm text-slate-400 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
