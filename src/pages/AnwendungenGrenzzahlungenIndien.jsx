import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function AnwendungenGrenzzahlungenIndien() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Grenzüberschreitender Zahlungsverkehr
          </h1>
          <h2 className="text-lg text-neutral-600 italic">
            Ein erklärender Praxisleitfaden für Entscheider am Beispiel einer Überweisung von 50.000 € von Deutschland nach Indien
          </h2>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Warum dieses Beispiel?</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Indien ist ein wichtiger Handelspartner deutscher Mittelständler – und technisch ganz normal über das{' '}
            <a href="/wissen/glossar#swift" className="text-primary-600 hover:underline">SWIFT</a>
            -Netz angebunden. Trotzdem erleben viele Unternehmen bei Zahlungen Zeitverzug, uneinheitliche Gebühren und eine begrenzte Transparenz. 
            Der Grund ist kein "Fehler" einzelner Banken, sondern die Struktur grenzüberschreitender Zahlungen: Korrespondenzbanken (
            <a href="/wissen/glossar#nostro-vostro" className="text-primary-600 hover:underline">Nostro/Vostro</a>
            ), Zeitzonen,{' '}
            <a href="/wissen/glossar#fx" className="text-primary-600 hover:underline">FX</a>
            -Konvertierung und lokale regulatorische Schritte. Dieser Leitfaden zeigt konkret, was passiert – und warum Fintech-Netzwerke 
            und Blockchain-basierte Settlements (Stablecoin) hier oft spürbare Vorteile bringen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Wie läuft eine klassische Auslandsüberweisung ab?</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Eine 50.000-€-Zahlung von Deutschland an einen indischen Lieferanten wird in der Regel per Banküberweisung über SWIFT abgewickelt. 
            Der Zahler erteilt seiner Bank einen Auslandszahlungsauftrag (Empfänger, Betrag, Währung, Gebührenteilung wie{' '}
            <a href="/wissen/glossar#our-sha-ben" className="text-primary-600 hover:underline">OUR/SHA/BEN</a>
            , Verwendungszweck).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Im Hintergrund werden zwischen Banken SWIFT-Nachrichten (früher MT-Formate, zunehmend{' '}
            <a href="/wissen/glossar#iso20022" className="text-primary-600 hover:underline">ISO 20022</a>
            ) ausgetauscht. Haben Absender- und Empfängerbank keine direkte Beziehung, schalten sie Korrespondenzbanken mit Nostro/Vostro-Konten 
            dazwischen. Jede Stufe prüft Sanktionslisten/
            <a href="/wissen/glossar#aml" className="text-primary-600 hover:underline">AML</a>/
            <a href="/wissen/glossar#kyc" className="text-primary-600 hover:underline">KYC</a>, 
            bewertet die Plausibilität der Zahlung, und führt – falls nötig – Rückfragen durch.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Wird in <strong>INR</strong> gutgeschrieben, erfolgt eine{' '}
            <a href="/wissen/glossar#fx" className="text-primary-600 hover:underline">FX</a>
            -Konvertierung (EUR→INR oder EUR→USD→INR) – zu einem Kurs, der einen Spread zur Mittelkurs-Referenz enthält. 
            Auf indischer Seite folgen lokale Gutschrift-/Wertstellungsregeln (z. B. über <strong>NEFT/RTGS/IMPS</strong> – siehe{' '}
            <a href="/wissen/glossar#neft-rtgs-imps" className="text-primary-600 hover:underline">Glossar</a>
            ), teils mit bankinternem Post-Processing.
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-4">
            <h3 className="font-semibold text-neutral-900 mb-2">Zeit & Kosten in der Praxis</h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
              Die End-to-End-Dauer liegt häufig zwischen <strong>T+2 und T+5</strong> Kalendertagen (Cut-off-Zeiten, Zeitzonen, Zwischenstufen). 
              Die <strong>All-in-Kosten</strong> ergeben sich aus Bankgebühren (Absender/Korrespondenz/Empfänger) <strong>plus</strong> FX-Spread 
              – ex ante oft nur grob abschätzbar. <strong>Tracking</strong> ist mit SWIFT-GPI verbessert, bleibt aber bankseitig.
            </p>
            <h3 className="font-semibold text-neutral-900 mb-2">AWV-Meldepflicht</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              In Deutschland gilt für grenzüberschreitende Zahlungen grundsätzlich eine Meldepflicht ab <strong>12.500 €</strong> (Ausnahmen möglich). 
              Bei <strong>50.000 €</strong> ist daher i. d. R. eine{' '}
              <a href="/wissen/glossar#awv" className="text-primary-600 hover:underline">AWV-Meldung</a>
              {' '}abzugeben. Banken können zusätzlich Zweckangaben/Belege verlangen (Compliance-Prüfung).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Was machen Fintech-Netzwerke anders?</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Anbieter wie <strong>Wise</strong> nutzen <strong>lokale Ein-/Auszahlungsnetze</strong>: Du zahlst <strong>EUR</strong> in Europa ein; 
            in Indien wird dem Empfänger <strong>INR</strong> über <strong>NEFT/RTGS/IMPS</strong> gutgeschrieben – oft <strong>ohne</strong>, 
            dass der Geldfluss klassisch "über Grenzen" im Bankensinne wandert.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Das Ergebnis ist häufig <strong>schneller</strong> (von Minuten bis <strong>same-day</strong>), <strong>planbarer</strong> 
            (klare Status-Updates) und <strong>kostentransparenter</strong> (Gebühr + <strong>sichtbarer</strong> FX-Spread). 
            Grenzen gibt es bei <strong>Limits</strong>, <strong>Country-Coverage</strong>, und bei sehr großen Ticketgrößen – dann greifen 
            Sonderkonditionen und individuelle Compliance-Prüfungen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Was leisten Blockchain-basierte Zahlungen (Stablecoin)?</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Die Idee ist einfach: <strong>Geld als Token</strong> direkt übertragen – <strong>24/7</strong>, mit der Option auf{' '}
            <a href="/wissen/glossar#t-plus-0" className="text-primary-600 hover:underline">T+0</a>
            -Finalität. In der Praxis unterscheidet man zwei Muster:
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">(1) End-to-End On-Chain mit INR-Off-Ramp</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Der Zahler wandelt <strong>EUR→Euro-Stablecoin</strong> (oder <strong>USD-Stablecoin</strong>), transferiert on-chain an den 
                Empfänger; dieser tauscht bei einem <strong>seriösen Off-Ramp-Provider</strong> in <strong>INR</strong> und erhält eine lokale 
                Gutschrift. <strong>Vorteile:</strong> Geschwindigkeit/Transparenz; <strong>Risiken/Limitierungen:</strong> Verfügbarkeit und 
                Qualität der <strong>On/Off-Ramps</strong> (
                <a href="/wissen/glossar#on-off-ramp" className="text-primary-600 hover:underline">On-/Off-Ramp</a>
                ), Regeln in Indien (Devisenrecht,{' '}
                <a href="/wissen/glossar#fema" className="text-primary-600 hover:underline">FEMA</a>
                ), Sorgfalt bei der Provider-Auswahl.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">(2) On-Chain-Settlement mit klassischer Auszahlung</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Vertragspartner <strong>settlen</strong> ihre Forderungen <strong>on-chain</strong> (24/7), die anschließende 
                <strong>Auszahlung</strong> erfolgt über klassische Kanäle. Das reduziert Wertstellungs-/Liquiditätsrisiken, auch wenn noch 
                ein zweiter Prozessschritt nötig ist.
              </p>
            </div>
          </div>
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-4 rounded-r-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">Zeit, Kosten, Transparenz</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              Technisch ist die Übertragung <strong>in Minuten</strong> möglich. Der Preis setzt sich aus Netzwerkgebühren und Provider-Fees 
              zusammen und ist häufig <strong>sehr wettbewerbsfähig</strong>. Jede Transaktion erhält eine <strong>öffentliche 
              Transaktions-ID</strong>, wodurch der Verlauf <strong>prüfbar</strong> wird. <strong>KYC/AML</strong> liegt organisatorisch 
              bei <strong>On/Off-Ramp-Providern</strong>.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Vergleich (50.000 € Deutschland → Indien)</h2>
          <div className="table-wrap">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 rounded-lg">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Kriterium
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Bank (SWIFT)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Fintech (z. B. Wise)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Stablecoin (On-Chain)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Geschwindigkeit</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">T+2 bis T+5</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Stunden bis same-day</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Minuten bis same-day (Off-Ramp-abhängig)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Planbarkeit</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">mittel</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">hoch</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">hoch (technisch), rechtlich/operativ: abhängig</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Transparenz</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">mittel (GPI)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">hoch (Portal/App)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">hoch (On-Chain + Provider-Portal)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">All-in-Kosten</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">schwer vorhersehbar</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">transparent (Gebühr + FX-Spread)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">i. d. R. niedrig; Provider/FX-abhängig</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Betriebszeit</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Bankzeiten/Cut-off</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">meist 24/7</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">24/7</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Compliance-Last</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">hoch (Rückfragen/Formulare)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">moderat</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">moderat – <strong>Providerwahl kritisch</strong></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Finalität</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">begrenzte Rückrufmöglichkeiten</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">anbieterabhängig</td>
                  <td className="px-6 py-4 text-sm text-neutral-700"><strong>final</strong> (Refund = neue Zahlung)</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Was heißt das für Entscheider konkret?</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Für viele Unternehmen liegt der eigentliche "Schmerz" weniger in der Theorie, sondern in der <strong>Planbarkeit</strong>: 
            <em>Wann</em> kommt das Geld wirklich an? <em>Welche Kosten</em> fallen tatsächlich an? <em>Wie viele Schleifen</em> dreht die 
            Zahlung wegen Nachfragen? Fintech-Modelle sind hier oft ein <strong>klarer Fortschritt</strong> – und <strong>Blockchain-basierte 
            Settlements</strong> können noch einen Schritt weitergehen, wenn seriöse <strong>On/Off-Ramps</strong> verfügbar sind und 
            <strong>Compliance</strong> sauber gelöst ist.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Ein pragmatischer Weg ist ein <strong>30-Tage-Benchmark</strong>: denselben Empfänger jeweils über <strong>Hausbank</strong> und 
            <strong>Fintech</strong> bezahlen, <strong>Zeit/Kosten/Nachfragen</strong> messen – und parallel einen <strong>Stablecoin-Pilot</strong> 
            auf einem geeigneten <strong>Korridor</strong> vorbereiten. Die <strong>ERP-Umsetzung</strong> (Buchung, FX-Bewertung, Freigaben, 
            Reporting) beschreiben wir gesammelt im Kapitel "Integration & Abwicklung".
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Häufige Fragen</h2>
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Muss ich bei 50.000 € etwas melden?</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ja, in Deutschland ist grundsätzlich eine{' '}
                <a href="/wissen/glossar#awv" className="text-primary-600 hover:underline">AWV-Meldung</a>
                {' '}ab <strong>12.500 €</strong> erforderlich (Ausnahmen möglich). Die Bank kann zudem Zweck/Belege abfragen.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Kann ich in EUR zahlen, der Lieferant erhält INR?</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ja. Bei Bank/Fintech erfolgt die{' '}
                <a href="/wissen/glossar#fx" className="text-primary-600 hover:underline">FX</a>
                -Konvertierung im Prozess; on-chain ist sie Teil des Off-Ramps.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Ist "Blockchain-Zahlung" legal?</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ja, sofern <strong>KYC/AML</strong>, Rechnungslegung und Devisenregeln eingehalten werden. In Indien sind Zweckcodes/FX-Regeln 
                üblich – hier helfen seriöse Provider.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Fazit</h2>
          <p className="text-neutral-700 leading-relaxed">
            Die Entwicklung geht von <strong>intransparenten Banken-Korrespondenzketten</strong> über <strong>transparente 
            Fintech-Netzwerke</strong> hin zu <strong>Blockchain-basierten Settlements</strong> mit <strong>24/7-Verfügbarkeit</strong> und 
            <strong>T+0</strong>-Option. Für den Mittelstand bedeutet das: <strong>Messen statt Meinungen</strong> – bestehende Kanäle 
            verbessern, Fintech aktiv nutzen, Stablecoin-Know-how mit kleinen, gut geführten Piloten aufbauen. Genau dort entstehen die 
            <strong>Zeit- und Kostenvorteile</strong>, die im Tagesgeschäft zählen.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-neutral-100 rounded-lg p-6">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Quellen & Stand</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-neutral-900 mb-2">Quellen (Auswahl):</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>SWIFT/GPI – Überblick & Tracking-Funktionen (offizielle Unterlagen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Deutsche Bundesbank – AWV-Meldepflicht (Merkblätter/FAQ)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>RBI (Reserve Bank of India) – NEFT/RTGS/IMPS Regelwerke & Betrieb</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>FEMA (Indien) – Devisen- und Zweckcode-Regelungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Anbieter-Dokus (z. B. Wise Business) – Preismodelle & Funktionsweise lokaler Auszahlungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>BIS/CPMI – Cross-Border-Payments (Berichte zu Geschwindigkeit/Kosten/Transparenz)</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-neutral-600">
              <strong>Stand:</strong> 26. Oktober 2025.
            </p>
          </div>
        </section>

        <section className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Weiterführende Informationen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/use-cases" className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Use Cases</span>
            </Link>
            <Link to="/wissen" className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Digitale Währungen</span>
            </Link>
            <Link to="/integration" className="group flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span className="font-semibold">Integration & Abwicklung</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AnwendungenGrenzzahlungenIndien;
