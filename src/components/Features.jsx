import React from 'react';
import { Shield, Fingerprint, CheckCircle2 } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
        <Icon className="text-cyan-400" size={18} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-400">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-14 md:py-20 md:px-6">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Secure by design</h2>
          <p className="mt-2 text-sm text-gray-400">We use on-device biometrics and WebAuthn to authenticate users—no passwords stored, no secrets to leak.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Feature icon={Fingerprint} title="WebAuthn-native" desc="Built on platform authenticators like Face ID, Touch ID, and Windows Hello." />
            <Feature icon={Shield} title="Zero password surface" desc="Nothing to phish, reuse, or rotate. Eliminate credential attacks." />
            <Feature icon={CheckCircle2} title="FIDO2 compliant" desc="Standards-based auth with attestation and strong device binding." />
            <Feature icon={Shield} title="Edge-ready" desc="SDKs for serverless and edge runtimes. Verify in microseconds." />
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6">
          <h3 className="text-lg font-semibold text-white">Why teams trust Vanished</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 text-emerald-400" /> End-to-end encryption for registration and sign-in ceremonies.</li>
            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 text-emerald-400" /> Signed server responses with rotating keys and audit trails.</li>
            <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 text-emerald-400" /> SOC 2 in-progress. Data residency and regional edge coming soon.</li>
          </ul>

          <div className="pointer-events-none mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wide text-gray-400">Trusted by builders at</p>
            <div className="mt-3 grid grid-cols-3 items-center gap-4 opacity-80 sm:grid-cols-5">
              <Logo text="NEXT" />
              <Logo text="VERCEL" />
              <Logo text="CLOUD" />
              <Logo text="ATLAS" />
              <Logo text="EDGE" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ text }) {
  return (
    <div className="flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs font-semibold tracking-widest text-white">
      {text}
    </div>
  );
}
