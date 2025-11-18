import React from 'react';
import { ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';

function WissenRegulierung() {
  const sources = [
    {
      title: "MiCAR: Markets in Crypto-Assets Regulation (Official Text)",
      url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32023R1114",
      date: "2023-06-09"
    },
    {
      title: "BaFin: MiCAR-Umsetzung in Deutschland",
      url: "https://www.bafin.de/DE/Aufsicht/FinTech/Kryptoassets/kryptoassets_node.html",
      date: "2024-12-30"
    },
    {
      title: "European Banking Authority: AML/CFT Guidelines",
      url: "https://www.eba.europa.eu/regulation-and-policy/anti-money-laundering-and-counter-terrorist-financing",
      date: "2024-01-15"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Regulierung
          </h1>
          <p className="text-sm text-neutral-500">Stand: 2025-01-06</p>
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">TL;DR – Das Wichtigste in Kürze</h2>
          <p className="text-neutral-700 leading-relaxed">
            Mit MiCAR (Markets in Crypto-Assets Regulation) hat die EU ab 2024/2025 einen einheitlichen Regulierungsrahmen für Krypto-Assets geschaffen. Stablecoin-Emittenten und Krypto-Dienstleister benötigen Lizenzen, müssen Reserven vorhalten und Transparenzpflichten erfüllen. Für Unternehmen bedeutet dies: mehr Rechtssicherheit, aber auch Compliance-Anforderungen (KYC/AML). Entscheider sollten mit lizenzierten Anbietern arbeiten.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">MiCAR – Die europäische Krypto-Verordnung</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>MiCAR</strong> (Markets in Crypto-Assets Regulation) ist die EU-Verordnung zur Regulierung von Krypto-Assets und trat am 30. Juni 2023 in Kraft. Die Regelungen werden stufenweise umgesetzt:
          </p>
          <ul className="space-y-2 text-neutral-700 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>30. Dezember 2024:</strong> Regelungen für Stablecoins (E-Money Tokens, Asset-Referenced Tokens) werden anwendbar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>30. Dezember 2024:</strong> Regelungen für Crypto-Asset Service Provider (CASPs) werden anwendbar</span>
            </li>
          </ul>
          <p className="text-neutral-700 leading-relaxed">
            MiCAR schafft erstmals einen <strong>einheitlichen EU-weiten Rechtsrahmen</strong> für Krypto-Assets, der nationale Fragmentierung beendet und einen EU-Pass für lizenzierte Anbieter ermöglicht.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Kernprinzipien von MiCAR</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Lizenzpflicht für Emittenten und Dienstleister</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Stablecoin-Emittenten und Krypto-Dienstleister (Börsen, Wallets, Custody-Anbieter) benötigen eine Lizenz der nationalen Aufsichtsbehörde (in Deutschland: BaFin). Bestehende Anbieter hatten Übergangsfristen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Reserveanforderungen für Stablecoins</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Emittenten müssen ausreichende Reserven in liquiden, sicheren Assets vorhalten (mindestens 30% in Einlagen bei Kreditinstituten). Tägliche Veröffentlichung der Reserven erforderlich.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Verbraucherschutz und Transparenz</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Emittenten müssen White Papers veröffentlichen, die Risiken offenlegen. Irreführende Werbung und Marktmanipulation werden sanktioniert. Anleger haben Rückgaberechte.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">EU-Pass (Passporting)</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Lizenzierte Anbieter aus einem EU-Mitgliedsstaat können ihre Dienste in der gesamten EU anbieten, ohne zusätzliche nationale Lizenzen. Vereinfacht grenzüberschreitende Geschäfte.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">KYC/AML – Anti-Geldwäsche-Pflichten</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Krypto-Dienstleister unterliegen den gleichen Anti-Geldwäsche-Anforderungen (AML) wie traditionelle Finanzinstitute:
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">KYC (Know Your Customer)</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Anbieter müssen Kunden identifizieren und verifizieren. Bei B2B-Kunden: Überprüfung von Unternehmensregistern, Identifikation wirtschaftlich Berechtigter (Beneficial Owners), Risikoklassifizierung.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Transaktionsmonitoring</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Verdächtige Transaktionen (ungewöhnliche Muster, hohe Beträge, Verbindungen zu Hochrisikoländern) müssen an Behörden (Financial Intelligence Unit) gemeldet werden.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Aufbewahrungspflichten</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Dokumente und Transaktionsdaten müssen mindestens 5 Jahre aufbewahrt werden. Bei Betriebsprüfungen müssen diese jederzeit zugänglich sein.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Auswirkungen auf den Mittelstand</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Mehr Rechtssicherheit</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  MiCAR schafft klare Regeln und reduziert regulatorische Unsicherheit. Unternehmen können mit lizenzierten Anbietern rechtskonform arbeiten.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Vertrauen in Anbieter steigt</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Lizenzierte Emittenten und Dienstleister wurden von BaFin geprüft. Unternehmen können sich auf Qualität und Sicherheit verlassen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Compliance-Aufwand für Unternehmen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Auch als Nutzer müssen Unternehmen KYC-Prozesse durchlaufen. Dokumentation der eigenen Krypto-Transaktionen für Steuerbehörden erforderlich.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Anbieter-Auswahl eingeschränkt</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Nicht-lizenzierte Anbieter dürfen ihre Dienste in der EU nicht mehr anbieten. Das Angebot konzentriert sich auf regulierte Player.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Praxisbeispiele</h2>
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 1: Auswahl eines Stablecoin-Anbieters</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ein Mittelständler möchte Euro-Stablecoins nutzen. Er prüft, ob der Emittent eine MiCAR-Lizenz hat (auf BaFin-Website einsehbar). Er fordert das White Paper an, überprüft Reserveberichte und entscheidet sich für einen lizenzierten EU-Anbieter mit transparenter Berichterstattung.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 2: KYC-Prozess bei Krypto-Börse</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ein Unternehmen eröffnet ein Business-Konto bei einer Krypto-Börse. Es muss Handelsregisterauszug, Gesellschafterverzeichnis, Ausweisdokumente der Geschäftsführung und Nachweis der Geschäftsadresse einreichen. Nach Prüfung wird das Konto freigeschaltet und kann für Stablecoin-Transaktionen genutzt werden.
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
                <h3 className="font-semibold text-neutral-900">Nur mit lizenzierten Anbietern arbeiten</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Überprüfen Sie, ob Ihr Stablecoin-Emittent oder Krypto-Dienstleister eine MiCAR-Lizenz hat. BaFin-Datenbanken und Anbieter-Websites geben Auskunft.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Interne Compliance-Prozesse aufbauen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Definieren Sie, wie Krypto-Transaktionen dokumentiert, gebucht und für Steuerbehörden aufbereitet werden. Schulen Sie Finanz- und Compliance-Teams.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Rechtliche Beratung einholen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Lassen Sie sich von Anwälten mit Krypto-Expertise beraten. Themen: Vertragsgestaltung mit Anbietern, Haftungsfragen, Datenschutz (DSGVO bei KYC).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">4</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Regulatorische Entwicklungen verfolgen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  MiCAR wird kontinuierlich durch technische Standards (Regulatory Technical Standards) konkretisiert. Bleiben Sie über Updates informiert.
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

export default WissenRegulierung;
