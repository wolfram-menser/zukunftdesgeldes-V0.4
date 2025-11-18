import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";

export default function HeadMeta() {
  const { lang } = useI18n();
  const loc = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;

    // Canonical setzen
    const path = loc.pathname + loc.search;
    const origin = window.location.origin;

    // alte canonical/hreflang entfernen
    document.querySelectorAll('link[rel="canonical"]').forEach(l => l.remove());
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(l => l.remove());

    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", origin + path);
    document.head.appendChild(canonical);

    // HINWEIS: Solange EN keine eigenen Pfade hat, setzen wir NUR de + x-default.
    const mk = (hl, href) => {
      const l = document.createElement("link");
      l.setAttribute("rel", "alternate");
      l.setAttribute("hreflang", hl);
      l.setAttribute("href", href);
      document.head.appendChild(l);
    };
    mk("de", origin + path);
    mk("x-default", origin + path);

    // TODO: Sobald /en/ Pfade existieren:
    // mk("en", origin + "/en" + path);
  }, [lang, loc]);

  return null;
}
