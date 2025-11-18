import { useEffect, useRef, useState } from "react";

/* --- Einmalige Migration: Defaults DE + Standard --- */
(function ensureDefaults(){
  if (!localStorage.getItem("settings_migrated_v2")) {
    // Standard-Theme = leer
    localStorage.removeItem("theme");
    // Sprache default = de (nur setzen, wenn nichts vorhanden)
    if (!localStorage.getItem("lang")) localStorage.setItem("lang", "de");
    localStorage.setItem("settings_migrated_v2", "1");
  }
})();

function applyTheme(t){
  const html = document.documentElement;
  const body = document.body;
  if (t) {
    html.setAttribute("data-theme", t);
    body.classList.add(`theme-${t}`);
    localStorage.setItem("theme", t);
  } else {
    html.removeAttribute("data-theme");
    body.classList.remove("theme-sky");
    localStorage.removeItem("theme");
  }
  window.dispatchEvent(new CustomEvent("app:theme-changed", { detail: { theme: t || "" } }));
}

function applyLang(l){
  const lang = l || "de";
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  // EN-Banner bei Sprachwechsel aktivieren
  if (lang === "en") localStorage.removeItem("banner_en_dismissed");
  window.dispatchEvent(new CustomEvent("app:lang-changed", { detail: { lang } }));
}

function Segmented({ value, onChange, options }){
  return (
    <div className="segmented">
      {options.map(opt => (
        <button
          key={opt.value}
          type="button"
          className={"segmented-btn" + (value === opt.value ? " is-active" : "")}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function SettingsMenu(){
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "de");
  const ref = useRef(null);

  useEffect(() => {
    // Initialize theme and language
    applyTheme(theme);
    applyLang(lang);
  }, []);

  useEffect(() => {
    function onDocClick(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false); }
    function onKey(e){ if(e.key === "Escape") setOpen(false); }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function changeTheme(t){ setTheme(t); applyTheme(t); }
  function changeLang(l){ setLang(l); applyLang(l); window.dispatchEvent(new CustomEvent("app:lang-changed", { detail: { lang: l } })); }

  return (
    <div className="settings-root" ref={ref}>
      <button aria-label="Einstellungen" className="settings-btn" onClick={() => setOpen(v => !v)}>
        {/* inline Gear-Icon (SVG) */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M19.4 13a7.5 7.5 0 0 0 0-2l2-.9-1.2-2.1-2 .8a7.7 7.7 0 0 0-1.8-1.8l.8-2-2.1-1.2-.9 2a7.5 7.5 0 0 0-2 0l-.9-2-2.1 1.2.8 2a7.7 7.7 0 0 0-1.8 1.8l-2-.8L2.6 10l2 .9a7.5 7.5 0 0 0 0 2l-2 .9 1.2 2.1 2-.8a7.7 7.7 0 0 0 1.8 1.8l-.8 2 2.1 1.2.9-2a7.5 7.5 0 0 0 2 0l.9 2 2.1-1.2-.8-2a7.7 7.7 0 0 0 1.8-1.8l2 .8 1.2-2.1-2-.9Z" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      </button>
      {open && (
        <div className="settings-menu">
          <div className="settings-row">
            <div className="settings-label">Sprache</div>
            <Segmented
              value={lang}
              onChange={changeLang}
              options={[
                { label: "Deutsch", value: "de" },
                { label: "English", value: "en" }
              ]}
            />
          </div>
          <div className="settings-row">
            <div className="settings-label">Farbschema</div>
            <Segmented
              value={theme}
              onChange={changeTheme}
              options={[
                { label: "Standard", value: "" },
                { label: "Sky", value: "sky" }
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
