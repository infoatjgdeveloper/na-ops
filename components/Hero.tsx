
import React from 'react';
import { ChevronRight, ShieldCheck, Globe, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium">
              <Globe className="w-4 h-4" />
              <span>North America Regional Operations</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Enterprise-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Secure AI Systems</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Enabling secure, compliant, and cybersecurity-first technology delivery across the United States and Canada through our partner BRJU Infosec Inc.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-cyan-900/30">
                Explore Enterprise Solutions <ChevronRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-bold transition-all">
                Learn About BRJU Partnership
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-500">IP Centrally Governed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">USA/CAN</p>
                <p className="text-sm text-slate-500">Service Coverage</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">SEC-1</p>
                <p className="text-sm text-slate-500">Standard Compliance</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="font-bold tracking-tight">Security-First Protocol</span>
                </div>
                <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-mono">ENCRYPTED</div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="p-3 bg-slate-950 rounded border border-slate-800 text-slate-400">
                  <span className="text-cyan-500">$</span> init_secure_handshake --region="NA"
                </div>
                <div className="p-3 bg-slate-950 rounded border border-slate-800 text-slate-400">
                  <span className="text-cyan-500">$</span> status: authorized_partner_brju_infosec
                </div>
                <div className="p-3 bg-slate-950 rounded border border-slate-800 text-green-400">
                  Deployment ready across 50 states + Canada
                </div>
                <div className="p-3 bg-slate-950 rounded border border-slate-800 text-cyan-400/70 animate-pulse">
                  System architecture integrity verified...
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="w-24 h-24 relative">
                  <Cpu className="w-full h-full text-slate-800 absolute" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-cyan-500/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
