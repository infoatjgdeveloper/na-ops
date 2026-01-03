
import React from 'react';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';

const Governance: React.FC = () => {
  return (
    <section className="py-24 border-y border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-cyan-600/10 border border-cyan-500/20 flex flex-col items-center justify-center p-6 text-center">
                  <Globe className="w-10 h-10 text-cyan-400 mb-4" />
                  <h4 className="font-bold text-sm">Unified Standard</h4>
                  <p className="text-xs text-slate-500 mt-2">Consistent delivery across North America</p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center">
                  <ShieldCheck className="w-10 h-10 text-slate-400 mb-4" />
                  <h4 className="font-bold text-sm">Central IP</h4>
                  <p className="text-xs text-slate-500 mt-2">Governed within the JG AI ecosystem</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center">
                  <Cpu className="w-10 h-10 text-slate-400 mb-4" />
                  <h4 className="font-bold text-sm">AI Frameworks</h4>
                  <p className="text-xs text-slate-500 mt-2">Scalable and secure automation</p>
                </div>
                <div className="aspect-square rounded-2xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-4 font-bold text-white">US</div>
                  <h4 className="font-bold text-sm">Local Compliance</h4>
                  <p className="text-xs text-slate-500 mt-2">Adhering to US/Canada regulations</p>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cyan-500/5 blur-[80px] -z-10" />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Governance & IP Assurance</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                All platforms, AI frameworks, and intellectual property are centrally governed within the JG AI ecosystem. This ensures consistent security and delivery standards across our North American territory.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <span className="text-xs font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Centralized Policy Engine</h4>
                  <p className="text-sm text-slate-500">Security standards are pushed globally from core governance protocols.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <span className="text-xs font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Localized Regional Execution</h4>
                  <p className="text-sm text-slate-500">BRJU Infosec executes within the context of specific North American legal frameworks.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <span className="text-xs font-bold">03</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Continuous Audit Trail</h4>
                  <p className="text-sm text-slate-500">Transparent reporting on system integrity and compliance for enterprise clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
