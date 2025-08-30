import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Fingerprint, Mail } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_20%,rgba(59,130,246,0.25),rgba(0,0,0,0))]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-8 md:py-24 md:px-6">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            <Fingerprint size={14} className="text-cyan-400" />
            Passwordless Biometric Auth
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 max-w-xl text-base text-gray-300 sm:text-lg">
            Ship secure biometric logins in one line. No passwords, no magic links—just seamless identity that fades into the background.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-xs text-gray-300">
              npm i @vanished/auth
            </div>
            <a href="#code" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-gray-200">
              See the one-liner <ArrowRight size={16} />
            </a>
          </div>

          <form id="waitlist" onSubmit={onSubmit} className="mt-8 flex w-full max-w-md items-center gap-2">
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
              className="inline-flex min-w-[120px] items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-sm font-semibold text-neutral-900 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Joining…' : status === 'success' ? 'Joined!' : 'Join waitlist'}
            </button>
          </form>
          {status === 'error' && (
            <p className="mt-2 text-sm text-rose-400">Please enter a valid email.</p>
          )}
          {status === 'success' && (
            <p className="mt-2 text-sm text-cyan-400">Thanks! We'll be in touch soon.</p>
          )}
        </div>

        <div className="relative h-[420px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}
