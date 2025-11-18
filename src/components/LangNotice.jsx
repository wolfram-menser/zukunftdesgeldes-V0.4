import React, { useState, useEffect } from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function LangNotice() {
  const { lang, t } = useI18n();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(localStorage.getItem("hideLangNotice") === "1");
  }, [lang]);

  if (lang !== "en" || hidden) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900">
      <div className="mx-auto max-w-5xl px-4 py-2 flex items-center justify-between">
        <span className="text-sm">{t("common.comingSoon")}</span>
        <button
          className="text-sm underline underline-offset-2 hover:text-amber-800"
          onClick={() => { localStorage.setItem("hideLangNotice", "1"); setHidden(true); }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
