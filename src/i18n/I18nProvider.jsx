import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nCtx = createContext({ lang: "de", t: (k) => k, setLang: () => {} });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "de");
  const [dict, setDict] = useState({});

  useEffect(() => {
    const file = lang === "en" ? "/i18n/en.json" : "/i18n/de.json";
    fetch(file).then(r => r.json()).then(setDict).catch(() => setDict({}));
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
        else return key;
      }
      return typeof cur === "string" ? cur : key;
    };
  }, [dict]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
