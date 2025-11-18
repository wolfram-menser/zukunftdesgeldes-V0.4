import React, { useEffect, useMemo, useRef, useState } from "react";
import AbbrLink from "./AbbrLink";

const SKIP_TYPES = new Set(["a", "abbr", "code", "pre"]);

function replaceInTextOnce(text, entries, used, makeAbbr) {
  for (const e of entries) {
    if (used.current.has(e.id)) continue;
    const re = new RegExp(`\\b(${e.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
    const m = text.match(re);
    if (m) {
      const idx = m.index;
      const before = text.slice(0, idx);
      const match = text.slice(idx, idx + m[0].length);
      const after = text.slice(idx + m[0].length);
      used.current.add(e.id);
      return [before, makeAbbr(e, match), after];
    }
  }
  return null;
}

function walk(node, entries, used, makeAbbr) {
  if (typeof node === "string") {
    const rep = replaceInTextOnce(node, entries, used, makeAbbr);
    return rep ? rep : node;
  }
  if (!node || typeof node !== "object") return node;
  const type = node.type;
  if (typeof type === "string" && SKIP_TYPES.has(type)) return node;

  const children = node.props?.children;
  if (!children) return node;
  const newChildren = React.Children.map(children, (child) => walk(child, entries, used, makeAbbr));
  return React.cloneElement(node, {}, newChildren);
}

export default function Glossarize({ children }) {
  const [glossary, setGlossary] = useState(null);
  const used = useRef(new Set());

  useEffect(() => {
    fetch("/wissen/glossar.json")
      .then(r => r.json())
      .then(setGlossary)
      .catch(() => setGlossary(null));
  }, []);

  const entries = useMemo(() => {
    if (!glossary?.entries) return [];
    // Prefer longer terms first (e.g., "NEFT / RTGS / IMPS" before "IMPS")
    return [...glossary.entries].sort((a, b) => b.term.length - a.term.length);
  }, [glossary]);

  const makeAbbr = (e, text) => (
    <AbbrLink key={e.id} term={text} title={e.long} href={e.href} />
  );

  // Reset "used" on page change/re-render
  useEffect(() => { 
    used.current = new Set(); 
  }, [entries.length]);

  if (!entries.length) return <>{children}</>;
  return <>{walk(<>{children}</>, entries, used, makeAbbr)}</>;
}
