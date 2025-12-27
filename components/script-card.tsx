"use client";

import { useState } from "react";
import { Copy, Volume2, Check } from "lucide-react";
import type { LanguageScript } from "../lib/scripts";

type SpeechOptions = {
  language: string;
};

function speakText(text: string, opts: SpeechOptions) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = opts.language;
  window.speechSynthesis.speak(utterance);
}

const speechLangs: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  bn: "bn-IN",
  ta: "ta-IN",
  te: "te-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  kn: "kn-IN",
  ml: "ml-IN",
  or: "or-IN",
  pa: "pa-IN",
  as: "as-IN",
  ur: "ur-IN",
  kok: "en-IN",
  mai: "hi-IN",
  ne: "ne-NP",
  br: "en-IN",
  sd: "sd-IN",
  ks: "ur-IN",
  sa: "hi-IN",
  mni: "en-IN",
  sat: "sat-IN"
};

export type ScriptCardProps = {
  language: LanguageScript;
  content: string;
};

export function ScriptCard({ language, content }: ScriptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof navigator === "undefined") return;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("clip copy failed", error);
    }
  };

  const handleSpeak = () => {
    const langCode = speechLangs[language.code] ?? "en-IN";
    speakText(content, { language: langCode });
  };

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-500">Language</p>
          <h2 className="text-xl font-display font-semibold text-slate-900">
            {language.label}
            <span className="ml-2 text-base font-medium text-slate-500">
              {language.nativeLabel}
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSpeak}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600"
            type="button"
          >
            <Volume2 className="h-4 w-4" />
            Play
          </button>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white transition hover:bg-indigo-500"
            type="button"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </header>
      <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-slate-800">
        {content}
      </p>
    </article>
  );
}
