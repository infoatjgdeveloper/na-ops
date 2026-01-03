
import React from 'react';
import { Shield, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-cyan-500" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight">JG DEVELOPER</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">North America</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Leading the way in secure, enterprise-grade AI and software delivery across the USA and Canada.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-3 h-3" />
                <span>sales.na@jgdeveloper.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Globe className="w-3 h-3" />
                <span>North America Operations Node</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Service Areas</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-cyan-400 cursor-pointer">Cybersecurity</li>
              <li className="hover:text-cyan-400 cursor-pointer">Software Engineering</li>
              <li className="hover:text-cyan-400 cursor-pointer">Intelligent Automation</li>
              <li className="hover:text-cyan-400 cursor-pointer">Cloud & Infrastructure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-cyan-400 cursor-pointer">JG AI Ecosystem</li>
              <li className="hover:text-cyan-400 cursor-pointer">BRJU Infosec Inc (USA)</li>
              <li className="hover:text-cyan-400 cursor-pointer">Governance Platform</li>
              <li className="hover:text-cyan-400 cursor-pointer">IP Assurance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal Notice</h4>
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                JG Developer operates globally as part of the JG AI ecosystem. North America regional services are delivered by BRJU Infosec Inc, an authorized regional operating partner. All intellectual property and core platforms are centrally governed.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} JG Developer North America. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Operational Notice</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
