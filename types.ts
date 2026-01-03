
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SectionId {
  Home = 'home',
  Partner = 'partner',
  Services = 'services',
  Governance = 'governance',
  Contact = 'contact',
  AI = 'ai-consultant'
}
