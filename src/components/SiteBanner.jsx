import { useEffect, useState } from "react";

export default function SiteBanner(){
  const [show, setShow] = useState(false);

  useEffect(() => {
    const initLang = localStorage.getItem("lang") || "de";
    const dismissed = localStorage.getItem("banner_en_dismissed") === "1";
    setShow(initLang === "en" && !dismissed);

    function onLangChanged(e){
      const lang = (e.detail && e.detail.lang) || document.documentElement.lang || "de";
      const dismissed = localStorage.getItem("banner_en_dismissed") === "1";
      setShow(lang === "en" && !dismissed);
    }
    window.addEventListener("app:lang-changed", onLangChanged);
    return () => window.removeEventListener("app:lang-changed", onLangChanged);
  }, []);

  if (!show) return null;

  return (
    <div role="status" className="site-banner">
      <span>English content coming soon.</span>
      <button aria-label="Banner schließen" onClick={() => { localStorage.setItem("banner_en_dismissed", "1"); setShow(false); }}>
        ×
      </button>
    </div>
  );
}
