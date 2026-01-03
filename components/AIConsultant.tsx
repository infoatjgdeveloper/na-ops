
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Welcome to the JG North America AI Operations center. I am your specialized consultant for Cybersecurity and Enterprise AI solutions. How can I assist with your regional strategy today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Check if API key is available
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error('API key not found. Please add GEMINI_API_KEY to .env.local');
      }

      // Initialize GoogleGenAI with the API key
      const ai = new GoogleGenAI({ apiKey });



      // Create the prompt with system context
      const prompt = `You are the "JG Developer North America Operations AI Consultant".
Your goal is to answer questions about JG Developer and BRJU Infosec's North American operations.
Focus on Cybersecurity, Software Engineering, AI Automation, Cloud Infrastructure, and Governance.
Regional details: Headquarters in Illinois, USA; territory covers USA and Canada.
Maintain a professional, highly secure, enterprise-grade tone. 
If asked about technical implementation, suggest security-first approaches.
Always remind the user that services are delivered by authorized partner BRJU Infosec Inc.

User question: ${userMessage}`;

      // Generate content using ai.models.generateContent()
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-lite',
        contents: prompt,
      });

      const aiResponse = response.text || "I apologize, I'm experiencing a temporary connectivity issue with the secure network. Please try again or contact our North America team directly.";

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('AI Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setMessages(prev => [...prev, { role: 'assistant', content: `Unable to reach the secure AI core.` }]);
      console.log(`Error: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600/20 text-cyan-500 mb-4">
          <Bot className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold">Cyber-AI Strategy Consultant</h2>
        <p className="text-slate-400">Interactive demonstration of our secure AI capabilities</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-slate-300">SECURE_LINK_ESTABLISHED</span>
          </div>
          <ShieldCheck className="w-5 h-5 text-cyan-500" />
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-cyan-600' : 'bg-slate-700'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-cyan-600/20 text-cyan-50 border border-cyan-600/30'
                  : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-800/30 border-t border-slate-800">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Query our North America technology strategy..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 transition-all"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 text-cyan-500 hover:text-cyan-400 disabled:text-slate-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-[10px] text-center text-slate-500 font-mono">
            JG AI CORE | ENCRYPTED SESSION | V.3.1-NA
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
