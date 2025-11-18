import React from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n();
  const next = lang === "de" ? "en" : "de";
  const label = lang === "de" ? "EN" : "DE";
  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      className="ml-3 inline-flex items-center rounded-lg border px-2.5 py-1.5 text-sm hover:bg-gray-50"
      aria-label={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      title={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
    >
      {label}
    </button>
  );
}
