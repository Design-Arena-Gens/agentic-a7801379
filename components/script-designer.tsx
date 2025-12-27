"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stateLanguageMap, orderedStates, type LanguageCode } from "../lib/state-language-map";
import { generateScript, getLanguageScript, languageScripts } from "../lib/scripts";
import { ScriptCard } from "./script-card";

const toneOptions = [
  { id: "friendly", label: "Friendly" },
  { id: "formal", label: "Formal" },
  { id: "concise", label: "Concise" }
] as const;

type FormState = {
  customerName: string;
  orderId: string;
  deliveryDate: string;
  notes: string;
  tone: (typeof toneOptions)[number]["id"];
};

const initialForm: FormState = {
  customerName: "",
  orderId: "",
  deliveryDate: "",
  notes: "",
  tone: "friendly"
};

const initialState = "Delhi";

export function ScriptDesigner() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageCode[]>(() => {
    const match = stateLanguageMap.find((entry) => entry.state === initialState);
    return (match?.languages ?? ["en"]) as LanguageCode[];
  });
  const [scripts, setScripts] = useState<{ code: LanguageCode; text: string }[]>([]);
  const [includeEnglish, setIncludeEnglish] = useState(true);

  const stateLanguages = useMemo(() => {
    const match = stateLanguageMap.find((entry) => entry.state === selectedState);
    return (match?.languages ?? ["en"]) as LanguageCode[];
  }, [selectedState]);

  useEffect(() => {
    setSelectedLanguages((prev) => {
      const next = new Set<LanguageCode>(prev);
      if (includeEnglish) {
        next.add("en");
      } else {
        next.delete("en");
      }
      return Array.from(next);
    });
  }, [includeEnglish]);

  const toggleLanguage = (code: LanguageCode) => {
    setSelectedLanguages((prev) => {
      if (prev.includes(code)) {
        return prev.filter((item) => item !== code);
      }
      return [...prev, code];
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanSelection: LanguageCode[] =
      selectedLanguages.length > 0 ? selectedLanguages : (["en"] as LanguageCode[]);
    const payload = cleanSelection.map((code) => ({
      code,
      text: generateScript(code, {
        customerName: form.customerName || "Customer",
        orderId: form.orderId || "#NA",
        deliveryDate: form.deliveryDate || "the scheduled date",
        notes: form.notes,
        tone: form.tone
      })
    }));
    setScripts(payload);
  };

  const resetForm = () => {
    setForm(initialForm);
    setSelectedState(initialState);
    const base =
      stateLanguageMap.find((entry) => entry.state === initialState)?.languages ??
      (["en"] as LanguageCode[]);
    const defaultLanguages = new Set<LanguageCode>(base);
    defaultLanguages.add("en");
    setSelectedLanguages(Array.from(defaultLanguages));
    setIncludeEnglish(true);
    setScripts([]);
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-10">
      <motion.section
        layout
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold text-slate-900">
              Odar Confirmation Studio
            </h1>
            <p className="text-slate-600">
              Craft natural order confirmation call scripts for every Indian state language.
            </p>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="self-start rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600"
          >
            Reset form
          </button>
        </header>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Customer name
              <input
                value={form.customerName}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, customerName: event.target.value }))
                }
                placeholder="e.g. Riya Sharma"
                className="rounded-lg border border-slate-200 px-3 py-2.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Order number
              <input
                value={form.orderId}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, orderId: event.target.value }))
                }
                placeholder="e.g. OD-45219"
                className="rounded-lg border border-slate-200 px-3 py-2.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Delivery window
              <input
                value={form.deliveryDate}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, deliveryDate: event.target.value }))
                }
                placeholder="e.g. 12 May, 3-6 PM"
                className="rounded-lg border border-slate-200 px-3 py-2.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Tone
              <div className="flex gap-2">
                {toneOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, tone: option.id }))}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                      form.tone === option.id
                        ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                        : "border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Additional notes for the agent (optional)
            <textarea
              value={form.notes}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, notes: event.target.value }))
              }
              placeholder="Mention backup contact, COD reminder, etc."
              rows={3}
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Target state or union territory
              <select
                value={selectedState}
                onChange={(event) => {
                  const nextState = event.target.value;
                  setSelectedState(nextState);
                  const match = stateLanguageMap.find((entry) => entry.state === nextState);
                  const seed =
                    match?.languages ?? (["en"] as LanguageCode[]);
                  const defaults = new Set<LanguageCode>(seed);
                  if (includeEnglish) {
                    defaults.add("en");
                  }
                  setSelectedLanguages(Array.from(defaults));
                }}
                className="rounded-lg border border-slate-200 px-3 py-2.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                {orderedStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="grid gap-3 rounded-lg border border-slate-200 p-3">
              <legend className="px-1 text-sm font-medium uppercase tracking-wide text-slate-500">
                Languages
              </legend>
              <div className="flex flex-wrap gap-2">
                {stateLanguages.map((code) => {
                  const language = getLanguageScript(code);
                  const active = selectedLanguages.includes(code);
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => toggleLanguage(code)}
                      className={`rounded-full border px-3 py-1 text-sm transition ${
                        active
                          ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                          : "border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                      }`}
                    >
                      {language.label}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
                <input
                  id="include-english"
                  type="checkbox"
                  checked={includeEnglish}
                  onChange={(event) => setIncludeEnglish(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="include-english" className="text-sm text-slate-600">
                  Include English fallback script
                </label>
              </div>
            </fieldset>
          </div>

          <details className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-700">
              Add more languages manually
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {languageScripts.map((language) => {
                const active = selectedLanguages.includes(language.code);
                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => toggleLanguage(language.code)}
                    className={`rounded-full border px-3 py-1 text-sm transition ${
                      active
                        ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                        : "border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                    }`}
                  >
                    {language.label}
                  </button>
                );
              })}
            </div>
          </details>

          <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              Generates localized talking points instantly — great for call prep or agent scripts.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
            >
              Build scripts
            </button>
          </div>
        </form>
      </motion.section>

      <section className="grid gap-5">
        <AnimatePresence initial={false}>
          {scripts.length === 0 ? (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-2xl border border-slate-200 bg-slate-100/70 p-10 text-center text-slate-500"
            >
              Fill in the form and generate scripts to see localized call guidance here.
            </motion.div>
          ) : (
            scripts.map((item) => {
              const language = getLanguageScript(item.code);
              return (
                <motion.div
                  key={item.code}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                >
                  <ScriptCard language={language} content={item.text} />
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
