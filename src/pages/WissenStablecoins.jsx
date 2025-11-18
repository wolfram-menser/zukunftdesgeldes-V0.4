import React, { useEffect } from "react";
import Callout from "../components/Callout";

export default function WissenStablecoins() {
  useEffect(() => {
    document.title = "Stablecoins – Grundlagen | Die Zukunft des Geldes";
    const meta = document.querySelector('meta[name="description"]');
    const text =
      "Stablecoins für den Mittelstand: Funktionsweise, Entwicklung, Business-Nutzen, Risiken/Regulierung (MiCAR/EMT) und praktische Hinweise für CFOs.";
    if (meta) { meta.setAttribute("content", text); }
    else {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      m.setAttribute("content", text);
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold">Stablecoins – Grundlagen für Entscheider im Mittelstand</h1>
      <p className="mt-4 text-gray-700">
        Stablecoins sind digitale Euro- oder Dollar-Abbildungen auf einer Blockchain. Richtig eingesetzt ermöglichen sie
        schnelle (bis <strong>T+0</strong>), transparente und kosteneffiziente Zahlungen – besonders grenzüberschreitend. Für Unternehmen zählen
        dabei Seriosität des Emittenten, Regulatorik (MiCAR/EMT), On-/Off-Ramps, Custody und saubere Prozesse
        (KYC/AML, Buchhaltung, interne Kontrollen).
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Was ist ein Stablecoin – und wozu?</h2>
      <p className="mt-2">
        Ein Stablecoin ist ein digitaler Token, dessen Wert 1:1 an eine Referenzwährung (meist EUR oder USD) gebunden
        sein soll. Er wird auf einer Blockchain ausgegeben und lässt sich wie digitales Bargeld zwischen Wallets
        transferieren. Für Unternehmen ist der Nutzen operativ, nicht spekulativ: Zahlungen – insbesondere
        grenzüberschreitende – werden schneller und planbarer, Kosten werden transparenter (Gebühr plus ggf. FX-Spread),
        der Betrieb ist 24/7 möglich und Zahlungslogiken lassen sich programmieren (z. B. Freigabe bei Wareneingang,
        Escrow, Meilenstein-Zahlungen). In Summe entsteht ein Zahlungskanal, der klassische Korrespondenzwege verkürzt
        und die Nachverfolgbarkeit verbessert.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Entwicklung von Stablecoins – vom Smart Contract zum „Killer-Use-Case"</h2>
      <p className="mt-2">
        Mit Ethereum wurden ab 2015 universelle Smart Contracts möglich. Dadurch konnte ein Token entstehen, der nicht
        nur eine knappe Einheit darstellt, sondern vertraglich definierte Einlöse- und Reserve-Mechanismen abbildet.
        Früh wurde diese Idee durch Tether (USDT) skaliert, später folgte USDC als regulierungsnähere Alternative. In den
        darauffolgenden Jahren wuchs die Nachfrage stark, weil Stablecoins eine preisstabile Brücke zwischen Bankgeld
        und Blockchain-Netzen bieten.
      </p>
      <p className="mt-2">
        Heute arbeiten FinTechs, Kartennetzwerke und Banken an eigenen Lösungen – vom Emittieren regulierter
        E-Money-Tokens bis hin zur Integration in bestehende Zahlungsnetze. Der Markt ist derzeit klar USD-dominiert.
        In Europa schafft MiCAR jedoch verlässliche Regeln, sodass Euro-Stablecoins zunehmend entstehen. Für den
        DACH-Mittelstand bedeutet das: Stablecoins werden nicht „irgendwo im Krypto-Ökosystem" verbleiben, sondern
        Schritt für Schritt in regulierte, banknahe Prozesse hineinwachsen.
      </p>

      <div className="my-8 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Abbildung 1 – Zeitstrahl „Entwicklung von Stablecoins 2014–2025"</h3>
        <p className="text-sm text-neutral-700">
          Von frühen USD-Tokens über USDC-Einführung und DeFi-Aufschwung bis zu europäischen MiCAR-Schritten.
        </p>
      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Wie bleibt der Kurs stabil?</h2>
      <p className="mt-2">
        Die Preisbindung („Peg") ergibt sich aus dem Modell des Emittenten. Bei E-Money-Tokens (EMT) liegen dem Token
        1:1 reservertreue Vermögenswerte (z. B. Sichtguthaben, Geldmarktanlagen) zugrunde, und Inhaber haben einen
        Anspruch auf Rücktausch zum Nennwert. Asset-referenzierte Tokens (ART) stützen sich auf Körbe von Vermögenswerten,
        die einen Zielwert stabilisieren sollen. Modelle mit Krypto-Sicherheiten oder Algorithmen haben in der
        Vergangenheit höhere Risiken gezeigt und eignen sich für konservative Unternehmenszwecke in der Regel nicht.
        Entscheidend sind Transparenzberichte, Atteste, die Qualität der Reserve und klare Einlösebedingungen.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Wo entsteht der Unternehmensnutzen?</h2>
      <p className="mt-2">
        Besonders grenzüberschreitend wirken Stablecoins: Sie reduzieren Zwischenstationen (Nostro/Vostro) und
        verkürzen dadurch die Wertstellung – je nach Setup bis T+0/T+1. Die All-in-Kosten sind besser einschätzbar, weil
        sie sich aus der Netzwerkgebühr, eventuellen Dienstleistungsentgelten und einem sichtbaren FX-Spread
        zusammensetzen. Für die Treasury-Steuerung verbessert ein 24/7-fähiges Settlement die Planbarkeit, etwa bei
        Zahlungen über Zeitzonen hinweg. Hinzu kommt die Möglichkeit, Ereignisse im ERP (Wareneingang, Prüfvermerk,
        Milestone) direkt mit Zahlungsfreigaben zu verknüpfen, sodass Payment nicht „nebenher" läuft, sondern integraler
        Bestandteil des Workflows wird.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Risiken und Grenzen realistisch bewerten</h2>
      <p className="mt-2">
        Unternehmen sollten Stablecoins wie Fremd-Zahlungsdienstleister behandeln und eine angemessene Due-Diligence
        durchführen. Im Vordergrund stehen Emittenten- und Reserverisiko, Regulatorik und Lizenzlage, Betriebssicherheit
        (Custody, Rollen, Freigaben, Recovery) sowie Prozess-Compliance (KYC/AML, Travel Rule, AWV). Technisch sind die
        Wahl der Blockchain (Kosten, Durchsatz, Verfügbarkeit) und die Stabilität des Ökosystems relevant. Diese Risiken
        lassen sich durch sorgfältige Anbieterwahl, belastbare On-/Off-Ramps, ein Rollen- und Limitkonzept sowie saubere
        Belegketten deutlich reduzieren.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Regulatorik in EU/DE – das Wesentliche für Entscheider</h2>
      <p className="mt-2">
        Die MiCAR unterscheidet E-Money-Tokens (EMT) – typischerweise Euro-Stablecoins – und Asset-referenzierte Tokens
        (ART). EMT dürfen grundsätzlich nur von Kreditinstituten oder E-Geld-Instituten begeben werden; es bestehen
        Einlöseansprüche und Reservenanforderungen, flankiert von Whitepaper-, Governance- und Berichtspflichten.
        Parallel gelten KYC/AML-Regeln und die Travel Rule für Übertragungen zwischen Dienstleistern. Für die
        Unternehmenspraxis heißt das: Stablecoins sind einbindbar, aber sie sind nicht außerrechtlich – die Umsetzung
        erfordert dieselbe Sorgfalt wie bei traditionellen Zahlungsdienstleistern.
      </p>

      <hr className="my-8" />

      <h2 className="text-2xl font-semibold">Von der Idee zur Praxis – wie Unternehmen starten</h2>
      <p className="mt-2">
        Ein praktikabler Einstieg beginnt mit einem klar umgrenzten Use Case, etwa einer wiederkehrenden Zahlung in ein
        Nicht-Euro-Land. Dazu wählt man eine On-/Off-Ramp mit EU-Lizenz, SEPA-Ein/Auszahlungen (idealerweise Instant) und
        belastbarer API/Dokumentation. Parallel wird ein Custody-Modell definiert: Wer darf Zahlungen anstoßen, wer
        freigeben, wie werden Limits, Adress-Whitelists und Recovery-Szenarien umgesetzt? Schließlich werden Prozess- und
        Belegketten so gestaltet, dass Invoice-Referenzen, Transaktions-Hashes und ggf. ISO 20022-kompatible Felder die
        Abstimmung in der Buchhaltung vereinfachen. So lässt sich der Nutzen im kleinen Rahmen belegen – ohne sofort das
        gesamte Zahlungswesen umzustellen.
      </p>

      <div className="my-8 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Abbildung 2 – Wertschöpfungskette eines Stablecoin-Zahlungsflusses</h3>
        <p className="text-sm text-neutral-700">
          Issuer/Reserve → Blockchain/Netz → On-/Off-Ramp & Custody → Unternehmens-Wallet → Empfänger/Ramp.
        </p>
      </div>

      <div className="my-8">
        <Callout variant="info" title="Warum das für CFOs wichtig ist">
          Stablecoins adressieren drei klassische CFO-Schmerzpunkte: Wertstellung, Kostenklarheit und Prozesskontrolle.
          Taggleiche oder schnellere Finalität reduziert Float und verbessert Cash-Forecasts. Sichtbare All-in-Kosten
          (inkl. FX-Spread) erleichtern den Preisvergleich zu Bank- und FinTech-Angeboten. Durch die Programmierung von
          Freigaben wird Payment Teil des internen Kontrollsystems – nicht dessen Störfaktor.
        </Callout>
      </div>

      <div className="overflow-x-auto my-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Kriterium</th>
              <th className="py-2 pr-4">Bank (klassische Auslandsüberweisung)</th>
              <th className="py-2 pr-4">FinTech (nicht-Blockchain)</th>
              <th className="py-2">Stablecoin-Rail</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2 pr-4">Wertstellung/Finalität</td><td className="py-2 pr-4">T+2 bis T+5, abhängig von Korrespondenzbanken</td><td className="py-2 pr-4">T+1 bis T+2, optimierte Pfade</td><td className="py-2">Minuten bis T+0, je nach Ramp/Netz</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Transparenz</td><td className="py-2 pr-4">Teilweise Intransparenz in der Kette</td><td className="py-2 pr-4">Besseres Tracking pro Anbieter</td><td className="py-2">On-Chain-Nachverfolgung + Dienstleister-Status</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Gebührenstruktur</td><td className="py-2 pr-4">Bank-/Korrespondenzgebühren + FX-Spread</td><td className="py-2 pr-4">Anbieter-Fee + FX-Spread</td><td className="py-2">Netzwerkgebühr + Dienstleister-Fee + FX (falls nötig)</td></tr>
            <tr className="border-b"><td className="py-2 pr-4">Wochenenden/Feiertage</td><td className="py-2 pr-4">Eingeschränkt</td><td className="py-2 pr-4">Besser, aber teils eingeschränkt</td><td className="py-2">24/7 möglich</td></tr>
            <tr><td className="py-2 pr-4">Rückbelastungsrisiko</td><td className="py-2 pr-4">Möglich (Rückruf/Regelprozesse)</td><td className="py-2 pr-4">Selten, anbieterabhängig</td><td className="py-2">Grundsätzlich final; Korrektur über Gegenbuchung</td></tr>
          </tbody>
        </table>
      </div>

      <div className="my-6">
        <Callout variant="success" title="Key-Takeaways">
          <ul className="list-disc pl-5">
            <li>Stablecoins sind ein Zahlungswerkzeug, kein Spekulationsobjekt.</li>
            <li>Größter Mehrwert im grenzüberschreitenden Geschäft und in prozessnahen Freigaben.</li>
            <li>Emittent/Reserve, Regulierung und Custody sind die Risikodrehpunkte – mit sauberem Setup beherrschbar.</li>
            <li>MiCAR schafft Orientierung – Euro-Stablecoins werden dadurch für den Mittelstand greifbar.</li>
          </ul>
        </Callout>
      </div>

      <hr className="my-10" />

      <h2 className="text-2xl font-semibold">Weiterführend</h2>
      <ul className="list-disc pl-5 mt-2">
        <li><a className="text-primary-600 underline underline-offset-2 hover:text-primary-700" href="/wissen/glossar" aria-label="Zum Glossar">Glossar</a> (Begriffe wie SWIFT, FX, KYC, AML)</li>
        <li><a className="text-primary-600 underline underline-offset-2 hover:text-primary-700" href="/use-cases" aria-label="Zu den Anwendungsfällen">Anwendungsfälle</a> (z. B. Grenzüberschreitender Zahlungsverkehr)</li>
        <li><a className="text-primary-600 underline underline-offset-2 hover:text-primary-700" href="/integration" aria-label="Zur Integration">Integration</a> (Prozess & ERP-Anbindung – separat vertieft)</li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">
        Stand & Fokus: Diese Seite fokussiert Euro-Stablecoins und B2B-Einsätze im DACH-Mittelstand. Keine Anlageempfehlung;
        bitte die jeweils aktuelle Rechtslage berücksichtigen.
      </p>
    </main>
  );
}
