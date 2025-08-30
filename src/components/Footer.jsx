import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-sm font-semibold tracking-wide text-white">Vanished Auth</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-gray-400">Passwordless, biometric-first authentication for modern apps. "Auth that disappears."</p>
        </div>

        <div className="w-full max-w-md">
          <p className="text-sm font-semibold text-white">Get product updates</p>
          <form onSubmit={onSubmit} className="mt-2 flex w-full items-center gap-2">
            <div className="relative w-full">
              <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle'); }}
                placeholder="you@company.com"
                className="w-full rounded-md border border-white/10 bg-neutral-900 py-2 pl-9 pr-3 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="inline-flex min-w-[120px] items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
          {status === 'error' && (
            <p className="mt-2 text-sm text-rose-400">Please enter a valid email.</p>
          )}
          {status === 'success' && (
            <p className="mt-2 text-sm text-cyan-400">Thanks! You are on the list.</p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-4 text-xs text-gray-500 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p>© {new Date().getFullYear()} Vanished Labs, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
