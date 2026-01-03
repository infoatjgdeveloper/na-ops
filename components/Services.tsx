
import React from 'react';
import { Shield, Code, Zap, Cloud, Database, Lock } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, category }) => (
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all group">
    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
      {icon}
    </div>
    <span className="text-xs font-mono text-cyan-500/70 uppercase tracking-widest mb-2 block">{category}</span>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {description.map((item, i) => (
        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const serviceData = [
    {
      title: 'Cybersecurity & Risk',
      category: 'Protection',
      icon: <Shield className="w-6 h-6" />,
      description: [
        'Enterprise cybersecurity consulting',
        'Secure system architecture',
        'Threat analysis & mitigation',
        'Security-first application design'
      ]
    },
    {
      title: 'Software Engineering',
      category: 'Development',
      icon: <Code className="w-6 h-6" />,
      description: [
        'Enterprise software development',
        'Web & mobile platforms',
        'API & cloud-native systems',
        'Performance optimization'
      ]
    },
    {
      title: 'AI & Automation',
      category: 'Intelligence',
      icon: <Zap className="w-6 h-6" />,
      description: [
        'AI integration for enterprise workflows',
        'Secure AI systems',
        'Intelligent automation solutions',
        'Predictive analytics'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      category: 'Scalability',
      icon: <Cloud className="w-6 h-6" />,
      description: [
        'Secure cloud architecture',
        'DevOps & CI/CD pipelines',
        'High-availability systems',
        'Managed cloud services'
      ]
    },
    {
      title: 'Data Sovereignty',
      category: 'Regulation',
      icon: <Database className="w-6 h-6" />,
      description: [
        'Compliant data pipelines',
        'Regional data residency',
        'North American privacy standards',
        'Edge computing optimization'
      ]
    },
    {
      title: 'Governance & IP',
      category: 'Compliance',
      icon: <Lock className="w-6 h-6" />,
      description: [
        'Centrally governed IP frameworks',
        'Intellectual property assurance',
        'Regulatory compliance audit',
        'Risk-based control systems'
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Deliverables</h2>
          <p className="text-slate-400 text-lg">
            Focused on cybersecurity-first technology delivery for organizations operating in highly regulated environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
