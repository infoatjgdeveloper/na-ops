
import React from 'react';
import { MapPin, ShieldCheck, Landmark } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Landmark className="text-cyan-500 w-8 h-8" />
              Authorized Operating Partner
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              <strong>BRJU Infosec Inc</strong> operates as the authorized regional operating partner within the JG AI ecosystem, responsible for service delivery across North America while adhering to centralized technology, security, and governance standards.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex items-start gap-3">
                <MapPin className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="text-sm text-slate-400">Illinois, United States</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Territory</h4>
                  <p className="text-sm text-slate-400">United States & Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-700 relative shadow-2xl">
              <img 
                src="https://picsum.photos/seed/cybersecurity/800/450" 
                alt="Cybersecurity Command Center" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-green-500">NORTH AMERICA ACTIVE</span>
                </div>
                <h3 className="text-xl font-bold">JG-BRJU Infosec Alliance</h3>
                <p className="text-sm text-slate-400">Secure Service Delivery Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
