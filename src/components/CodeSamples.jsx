import React, { useMemo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const snippets = {
  javascript: {
    label: 'JavaScript',
    code: `import { vanished } from '@vanished/auth'\n\n// Attach biometric login to any button\ndocument.getElementById('login').onclick = async () => {\n  const session = await vanished.login()\n  console.log('Signed in as', session.user.id)\n}`,
  },
  react: {
    label: 'React',
    code: `import { useEffect } from 'react'\nimport { vanished } from '@vanished/auth/react'\n\nexport default function Login() {\n  useEffect(() => {\n    vanished.mount('#login', { autofill: true })\n  }, [])\n\n  return <button id='login'>Sign in</button>\n}`,
  },
  server: {
    label: 'Server (Edge)',
    code: `import { verify } from '@vanished/auth/server'\n\nexport default async function handler(req) {\n  const user = await verify(req.headers.authorization)\n  return new Response(JSON.stringify({ user }), { status: 200 })\n}`,
  },
};

export default function CodeSamples() {
  const tabs = useMemo(() => Object.keys(snippets), []);
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = snippets[active].code;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section id="code" className="mx-auto max-w-7xl px-4 py-12 md:py-16 md:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Add auth in one line</h2>
          <p className="mt-1 text-sm text-gray-400">Drop-in biometrics for the modern stack. No passwords. No redirects.</p>
        </div>
        <div className="hidden gap-2 md:flex">
          {tabs.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-md px-3 py-1.5 text-sm ${active === key ? 'bg-white text-neutral-900' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
            >
              {snippets[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex gap-2 md:hidden">
            {tabs.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`rounded-md px-3 py-1 text-xs ${active === key ? 'bg-white text-neutral-900' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
              >
                {snippets[key].label}
              </button>
            ))}
          </div>
          <div className="hidden md:block" />
          <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-gray-200 hover:bg-white/10">
            {copied ? (<><Check size={14} className="text-emerald-400" /> Copied</>) : (<><Copy size={14} /> Copy</>)}
          </button>
        </div>
        <pre className="relative max-h-[420px] overflow-auto bg-gradient-to-b from-neutral-950 to-neutral-900 p-4 text-sm leading-relaxed text-gray-200">
          <code>
            {code}
          </code>
        </pre>
      </div>
    </section>
  );
}
