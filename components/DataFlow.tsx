"use client";

export default function DataFlow() {
  return (
    <section id="data-flow" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Your Data. Your Rules.
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Understand exactly what stays on your device and what doesn&apos;t.
        </p>

        {/* Flow Diagram */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* LOCAL */}
          <div className="rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/[0.03] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-400">Stays On Your Device</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Your files, documents, and personal data",
                "Conversation history and memory",
                "Calendar, email, and contact data",
                "Passwords, API keys, and credentials",
                "Configuration and preferences",
                "Automation scripts and workflows",
                "All locally-stored databases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-emerald-500/20">
              <p className="text-xs text-emerald-400/80 font-medium">
                🔒 Never leaves your network. Ever.
              </p>
            </div>
          </div>

          {/* SENT TO AI */}
          <div className="rounded-2xl p-8 border border-amber-500/30 bg-amber-500/[0.03] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-400">Sent to AI Model</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Your message/prompt (what you ask the AI)",
                "Relevant context the AI needs to help you",
                "Tool results (e.g. search queries, file snippets)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-amber-500/20">
              <p className="text-xs text-amber-400/80 font-medium">
                ⚡ Encrypted in transit. Not stored by providers. You control what&apos;s shared.
              </p>
            </div>
          </div>
        </div>

        {/* How it works flow */}
        <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.02] mb-12">
          <h3 className="text-xl font-bold text-white text-center mb-8">How It Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 text-center">
            <div className="flex flex-col items-center gap-2 flex-1 max-w-[200px]">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">💬</div>
              <p className="text-sm text-white font-medium">You ask a question</p>
              <p className="text-xs text-slate-500">Via chat, voice, or automation</p>
            </div>
            <svg className="w-6 h-6 text-slate-600 shrink-0 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex flex-col items-center gap-2 flex-1 max-w-[200px]">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">📦</div>
              <p className="text-sm text-white font-medium">Sandbox processes locally</p>
              <p className="text-xs text-slate-500">Files, memory, tools — all on device</p>
            </div>
            <svg className="w-6 h-6 text-slate-600 shrink-0 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex flex-col items-center gap-2 flex-1 max-w-[200px]">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl">🧠</div>
              <p className="text-sm text-white font-medium">Only the prompt hits the AI</p>
              <p className="text-xs text-slate-500">Encrypted, not stored, your API key</p>
            </div>
            <svg className="w-6 h-6 text-slate-600 shrink-0 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex flex-col items-center gap-2 flex-1 max-w-[200px]">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl">✅</div>
              <p className="text-sm text-white font-medium">Response stays local</p>
              <p className="text-xs text-slate-500">Saved on your device, nowhere else</p>
            </div>
          </div>
        </div>

        {/* Local Model Option */}
        <div className="rounded-2xl p-8 border border-cyan-500/30 bg-cyan-500/[0.03] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-xl">🏠</div>
                <h3 className="text-xl font-bold text-white">Want Zero Cloud? Run Local Models.</h3>
              </div>
              <p className="text-slate-400 mb-4">
                For maximum privacy, run AI models directly on your Sandbox AI device. Nothing — not even your prompts — ever leaves your network.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Llama 3, Mistral, Phi, Gemma — open-source models that run locally",
                  "Pro and Enterprise tiers have the hardware to run capable local models",
                  "Mix and match: use local models for sensitive work, cloud models for heavy lifting",
                  "Complete air-gap option for Enterprise tier — physically disconnected from the internet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-80 shrink-0">
              <div className="rounded-xl bg-slate-950/80 border border-white/10 p-5">
                <p className="text-xs text-slate-500 font-mono mb-3">Privacy Spectrum</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">Cloud AI (Claude, GPT)</span>
                      <span className="text-xs text-amber-400">Prompts sent encrypted</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-amber-500 to-amber-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">Hybrid (local + cloud)</span>
                      <span className="text-xs text-cyan-400">Best of both</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">Fully Local (air-gapped)</span>
                      <span className="text-xs text-emerald-400">100% private</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
