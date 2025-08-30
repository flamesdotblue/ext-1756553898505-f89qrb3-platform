import React from 'react';
import Hero from './components/Hero';
import CodeSamples from './components/CodeSamples';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-gray-200 antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm font-semibold tracking-wide text-white">Vanished Auth</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#code" className="text-gray-300 hover:text-white">Docs</a>
            <a href="#features" className="text-gray-300 hover:text-white">Security</a>
            <a href="#waitlist" className="text-gray-300 hover:text-white">Waitlist</a>
          </nav>
          <a href="#waitlist" className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-gray-200 md:text-sm">Get early access</a>
        </div>
      </header>

      <main>
        <Hero />
        <CodeSamples />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
