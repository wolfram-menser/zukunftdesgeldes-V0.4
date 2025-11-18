import React, { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);
    // Honeypot check
    if (fd.get("website")) return;
    // Consent validation
    if (!fd.get("consent")) {
      setErr("Bitte stimmen Sie der Datenverarbeitung zu.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name") || "",
          email: fd.get("email") || ""
        })
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setStatus("ok");
      e.currentTarget.reset();
    } catch (error) {
      // Fallback: mailto
      const name = fd.get("name") || "";
      const email = fd.get("email") || "";
      window.location.href =
        "mailto:wolfram.menser@zukunftdesgeldes.de"
        + "?subject=" + encodeURIComponent("Newsletter Vormerkung")
        + "&body=" + encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nBitte für Neuigkeiten vormerken.`);
      setStatus("err");
      setErr("Eintrag über Formular fehlgeschlagen. Es wurde ein E-Mail-Entwurf geöffnet.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-4" noValidate>
      {/* Honeypot field */}
      <div className="hidden">
        <label>
          Website (bitte leer lassen)
          <input type="text" name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900">Name (optional)</label>
        <input 
          name="name" 
          type="text" 
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-600 focus:ring-primary-600" 
          placeholder="Ihr Name" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900">E-Mail*</label>
        <input 
          name="email" 
          type="email" 
          required 
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-600 focus:ring-primary-600" 
          placeholder="name@firma.de" 
        />
      </div>

      <div className="flex items-start gap-2">
        <input 
          id="nl-consent" 
          name="consent" 
          type="checkbox" 
          required 
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-600" 
        />
        <label htmlFor="nl-consent" className="text-sm text-neutral-700">
          Ich willige in die Speicherung meiner E-Mail-Adresse zum Zwecke künftiger Neuigkeiten ein. Hinweise unter{' '}
          <a href="/datenschutz#newsletter" className="underline underline-offset-2 text-primary-600 hover:text-primary-700">
            Datenschutz
          </a>.
        </label>
      </div>

      {status === "ok" && (
        <p className="text-sm text-green-700">
          Danke! Ihre Adresse wurde vorgemerkt. Double-Opt-In folgt nach Inbetriebnahme.
        </p>
      )}
      {err && <p className="text-sm text-red-700">{err}</p>}

      <button 
        type="submit" 
        disabled={status === "sending"} 
        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Eintragen …" : "Für Neuigkeiten vormerken"}
      </button>
    </form>
  );
}
