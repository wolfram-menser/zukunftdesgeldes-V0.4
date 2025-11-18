import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollWindowTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

function scrollContainersTop() {
  // Falls es eigene Scroll-Container gibt, markieren wir sie mit data-scroll-root
  const nodes = document.querySelectorAll("[data-scroll-root]");
  nodes.forEach((el) => {
    try { el.scrollTo({ top: 0, left: 0, behavior: "auto" }); }
    catch { el.scrollTop = 0; el.scrollLeft = 0; }
  });
}

function scrollToHash(hash) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  try { el.scrollIntoView({ block: "start", inline: "nearest", behavior: "auto" }); }
  catch { el.scrollIntoView(); }
  return true;
}

export default function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Hash-Link? -> zum Anker, sonst Top
    if (location.hash) {
      // kleinen Tick warten, bis DOM gerendert ist
      const t = setTimeout(() => {
        const ok = scrollToHash(location.hash);
        if (!ok) { scrollWindowTop(); scrollContainersTop(); }
      }, 0);
      return () => clearTimeout(t);
    } else {
      scrollWindowTop();
      scrollContainersTop();
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}
