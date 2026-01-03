
import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Handshake, TrendingUp, Users, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

type InquiryType = 'client' | 'collaboration' | 'investor' | 'career';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InquiryType>('client');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to the backend/endpoint
    setTimeout(() => setSubmitted(false), 5000);
  };

  const tabs = [
    { id: 'client', label: 'Clients', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'collaboration', label: 'Collaboration', icon: <Handshake className="w-4 h-4" /> },
    { id: 'investor', label: 'Investors', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'career', label: 'Careers', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">North America Inquiry Hub</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Direct access to our regional operations, sales, and strategic growth teams.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12">
            {/* Info Sidebar */}
            <div className="lg:col-span-4 bg-slate-900 p-8 lg:p-12 border-r border-slate-800">
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                  <ShieldCheck className="w-3 h-3" />
                  <span>SECURE PRIORITY ROUTING</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Regional HQ</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Coordinating North American growth and security infrastructure from our Illinois operations center.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                      <Mail className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">Priority Sales</p>
                      <p className="text-sm font-medium text-slate-200">sales.na@jgdeveloper.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">HQ Partner</p>
                      <p className="text-sm font-medium text-slate-200">BRJU Infosec Inc, Illinois, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-4">Operational Status</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-slate-400">Operations: Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-400">NA Sales Node: Active</span>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-8 p-8 lg:p-12 bg-slate-950/40">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Transmission Secure</h3>
                  <p className="text-slate-400 max-w-sm">
                    Your inquiry has been successfully routed to <span className="text-cyan-400 font-mono">sales.na@jgdeveloper.com</span>. An officer will respond shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-cyan-500 hover:text-cyan-400 font-medium"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Tab Selector */}
                  <div className="flex flex-wrap gap-2 p-1 bg-slate-900/80 rounded-xl border border-slate-800">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as InquiryType)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeTab === tab.id 
                            ? 'bg-cyan-600 text-white shadow-lg' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-slate-400">Full Name</label>
                        <input required type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-slate-400">Email Address</label>
                        <input required type="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" />
                      </div>
                    </div>

                    {activeTab === 'client' && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-top-1 duration-300">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm text-slate-400">Company Name</label>
                            <input type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-slate-400">Service Required</label>
                            <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors">
                              <option>Cybersecurity Architecture</option>
                              <option>Enterprise AI Integration</option>
                              <option>Managed Cloud Operations</option>
                              <option>Software Engineering</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'collaboration' && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-top-1 duration-300">
                        <div className="space-y-2">
                          <label className="text-sm text-slate-400">Partnership Type</label>
                          <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors">
                            <option>Technology Integration Partner</option>
                            <option>Regional Service Delivery</option>
                            <option>Infrastructure Collaboration</option>
                            <option>Academic/Research Partnership</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {activeTab === 'investor' && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-top-1 duration-300">
                        <div className="space-y-2">
                          <label className="text-sm text-slate-400">Investment Interest</label>
                          <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors">
                            <option>Series/Funding Inquiry</option>
                            <option>Strategic Acquisition</option>
                            <option>Asset-Specific Investment</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {activeTab === 'career' && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-top-1 duration-300">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm text-slate-400">Applying For</label>
                            <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors">
                              <option>Security Engineer</option>
                              <option>AI Specialist</option>
                              <option>Full-Stack Developer</option>
                              <option>Operations Manager</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-slate-400">Portfolio/Resume URL</label>
                            <input type="url" placeholder="https://..." className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-sm text-slate-400">Detailed Message</label>
                      <textarea rows={4} required placeholder="Tell us about your objectives..." className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-cyan-900/30 flex items-center justify-center gap-2 group">
                      Send to sales.na@jgdeveloper.com 
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest font-mono">
                      End-to-end encryption active for this session
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-600/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};

export default Contact;
