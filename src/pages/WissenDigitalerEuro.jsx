import React from 'react';
import { ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';

function WissenDigitalerEuro() {
  const sources = [
    {
      title: "European Central Bank: Digital Euro Project",
      url: "https://www.ecb.europa.eu/paym/digital_euro/html/index.en.html",
      date: "2024-10-31"
    },
    {
      title: "Deutsche Bundesbank: Digitaler Euro – Chancen und Herausforderungen",
      url: "https://www.bundesbank.de/de/aufgaben/unbarer-zahlungsverkehr/digitaler-euro",
      date: "2024-03-20"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Digitaler Euro
          </h1>
          <p className="text-sm text-neutral-500">Stand: 2025-01-06</p>
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">TL;DR – Das Wichtigste in Kürze</h2>
          <p className="text-neutral-700 leading-relaxed">
            Der Digitale Euro ist eine geplante digitale Zentralbankwährung (CBDC) der Europäischen Zentralbank. Er soll als digitales Äquivalent zu Bargeld dienen und ergänzend zu bestehenden Zahlungsmitteln eingeführt werden. Für den B2B-Bereich sind die konkreten Anwendungsfälle noch unklar. Chancen liegen in verbesserter Interoperabilität und reduzierten Intermediären. Grenzen bestehen bei Skalierbarkeit, Programmierbarkeit und Privacy.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Definition</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Der <strong>Digitale Euro</strong> ist eine geplante Central Bank Digital Currency (CBDC) der Europäischen Zentralbank. Er würde digitales Zentralbankgeld für die breite Öffentlichkeit darstellen – eine Form von Geld, die bisher nur Banken in Form von Zentralbankreserven nutzen können.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Im Gegensatz zu privatem digitalem Geld (Stablecoins, tokenisierte Einlagen) wäre der Digitale Euro eine direkte Verbindlichkeit der EZB und damit risikofreies Geld. Die technische Umsetzung ist noch offen – Distributed-Ledger-Technologie ist eine Option, aber nicht zwingend.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Chancen für den Mittelstand</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Risikofreies digitales Geld</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Als Zentralbankgeld trägt der Digitale Euro kein Kredit- oder Emittentenrisiko. Unternehmen hätten Zugang zu einer sicheren digitalen Zahlungsform ohne Abhängigkeit von Banken oder privaten Emittenten.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Europäische Souveränität</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Reduzierte Abhängigkeit von internationalen Zahlungsdienstleistern und außereuropäischen Stablecoin-Emittenten. Stärkung der digitalen Zahlungsinfrastruktur Europas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Potenzielle Interoperabilität</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Falls mit einheitlichen Standards umgesetzt, könnte der Digitale Euro nahtlose europaweite Zahlungen ohne Intermediäre ermöglichen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Grenzen & offene Fragen</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">B2B-Anwendungsfälle unklar</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Die EZB fokussiert primär auf Retail-Anwendungen (Verbraucherzahlungen). Konkrete Use Cases für den B2B-Bereich sind noch nicht definiert. Ob der Digitale Euro programmierbar sein wird, ist offen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Einführungszeitpunkt ungewiss</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Frühestens 2028-2030 wird mit einer Einführung gerechnet. Bis dahin können sich private Lösungen (Stablecoins, tokenisierte Einlagen) bereits etabliert haben.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Privacy vs. Compliance</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Die EZB betont Datenschutz, muss aber AML/KYC-Anforderungen erfüllen. Das Design muss Privacy und Compliance in Einklang bringen – eine technisch und politisch anspruchsvolle Aufgabe.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Mengenbeschränkungen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Diskutiert werden Obergrenzen für Guthaben pro Person/Unternehmen, um Bankendesintermediation zu vermeiden. Dies könnte die Nutzbarkeit für größere B2B-Transaktionen einschränken.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Offline-Fähigkeit vs. B2B-Komplexität</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Der Digitale Euro soll Offline-Zahlungen ermöglichen (wie Bargeld). Für komplexe B2B-Szenarien (Smart Contracts, programmierbare Zahlungen) sind Online-Verbindungen jedoch Voraussetzung.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Interoperabilität mit privaten Lösungen</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Ein zentrales Designziel des Digitalen Euro ist die Koexistenz mit privaten Zahlungslösungen. Das bedeutet:
          </p>
          <ul className="space-y-2 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Komplementarität:</strong> Der Digitale Euro soll nicht Stablecoins oder tokenisierte Einlagen verdrängen, sondern ergänzen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Zwei-Ebenen-Modell:</strong> Banken und Zahlungsdienstleister bleiben Schnittstelle zum Kunden. Die EZB wird nicht direkt mit Endnutzern interagieren.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Offene Standards:</strong> Angestrebt wird Interoperabilität zwischen Digitalem Euro und privaten digitalen Währungen über gemeinsame Infrastrukturen.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Praxisbeispiele (hypothetisch)</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              <strong>Hinweis:</strong> Der Digitale Euro existiert noch nicht. Die folgenden Beispiele sind hypothetische Szenarien basierend auf den Designzielen der EZB.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 1: Grenzüberschreitende Zahlungen im Euro-Raum</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ein deutscher Mittelständler zahlt Lieferanten in Italien, Spanien und Frankreich. Mit Digitalem Euro erfolgen Zahlungen in Echtzeit ohne SEPA-Verzögerungen oder Intermediäre. Keine Währungsumrechnung, keine unterschiedlichen nationalen Systeme.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 2: Staatliche Zahlungen und Förderungen</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Fördermittel, Umsatzsteuererstattungen oder Sozialabgaben könnten direkt in Digitalem Euro ausgezahlt werden. Schnellere Abwicklung, transparente Nachverfolgung, reduzierter administrativer Aufwand.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Schritte für Entscheider</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">1</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Entwicklung beobachten, aber nicht warten</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Verfolgen Sie die Fortschritte beim Digitalen Euro, setzen Sie Ihre Digitalisierungsstrategie aber nicht aus. Nutzen Sie verfügbare Lösungen (Stablecoins, tokenisierte Einlagen) bereits heute.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Flexibilität einplanen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Gestalten Sie Ihre Zahlungsinfrastruktur so, dass sie verschiedene digitale Währungsformen integrieren kann. API-basierte Architekturen ermöglichen spätere Anpassungen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Pilotprogramme verfolgen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Die EZB wird Pilotprojekte durchführen. Prüfen Sie, ob eine Teilnahme für Ihr Unternehmen sinnvoll ist, um frühzeitig Erfahrungen zu sammeln.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Quellen</h2>
          <div className="space-y-3">
            {sources.map((source, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <ExternalLink className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {source.title}
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">Datum: {source.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-neutral-100 rounded-lg p-6 text-center">
          <p className="text-sm text-neutral-600">
            Dieser Artikel wurde zuletzt aktualisiert am <strong>2025-01-06</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WissenDigitalerEuro;
