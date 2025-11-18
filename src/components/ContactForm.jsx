import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);
    // Honeypot check
    if (fd.get("company")) return;
    // Consent validation
    if (!fd.get("consent")) {
      setErr("Bitte stimmen Sie der Datenverarbeitung zu.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name") || "",
          email: fd.get("email") || "",
          message: fd.get("message") || "",
          meta: { ua: navigator.userAgent }
        })
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setStatus("ok");
      e.currentTarget.reset();
    } catch (error) {
      // Fallback: mailto
      window.location.href = "mailto:wolfram.menser@zukunftdesgeldes.de?subject=Kontaktanfrage&body=" + encodeURIComponent(
        `Name: ${fd.get("name")}\nE-Mail: ${fd.get("email")}\n\nNachricht:\n${fd.get("message")}`
      );
      setStatus("err");
      setErr("Senden über Formular fehlgeschlagen. Es wurde ein E-Mail-Entwurf geöffnet.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
      {/* Honeypot field */}
      <div className="hidden">
        <label>
          Firma (bitte leer lassen)
          <input type="text" name="company" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-900">Name</label>
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

      <div>
        <label className="block text-sm font-medium text-neutral-900">Nachricht*</label>
        <textarea 
          name="message" 
          required 
          rows="5" 
          className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-600 focus:ring-primary-600" 
          placeholder="Worum geht es?"
        ></textarea>
      </div>

      <div className="flex items-start gap-2">
        <input 
          id="consent" 
          name="consent" 
          type="checkbox" 
          required 
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-600" 
        />
        <label htmlFor="consent" className="text-sm text-neutral-700">
          Ich willige in die Verarbeitung meiner Angaben zur Bearbeitung der Kontaktanfrage ein. Hinweise unter{' '}
          <a href="/datenschutz#kontaktformular" className="underline underline-offset-2 text-primary-600 hover:text-primary-700">
            Datenschutz
          </a>.
        </label>
      </div>

      {status === "ok" && (
        <p className="text-sm text-green-700">Danke! Ihre Nachricht wurde übermittelt.</p>
      )}
      {err && <p className="text-sm text-red-700">{err}</p>}

      <button 
        type="submit" 
        disabled={status === "sending"} 
        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Senden …" : "Nachricht senden"}
      </button>
    </form>
  );
}
