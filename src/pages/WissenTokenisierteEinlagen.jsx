import React from 'react';
import { ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';

function WissenTokenisierteEinlagen() {
  const sources = [
    {
      title: "Deutsche Bundesbank: Tokenisierte Einlagen im deutschen Bankensystem",
      url: "https://www.bundesbank.de/de/publikationen/berichte/monatsberichte",
      date: "2024-02-15"
    },
    {
      title: "European Banking Authority: Guidelines on Tokenized Deposits",
      url: "https://www.eba.europa.eu/publications-and-media",
      date: "2024-01-10"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Tokenisierte Einlagen
          </h1>
          <p className="text-sm text-neutral-500">Stand: 2025-01-06</p>
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">TL;DR – Das Wichtigste in Kürze</h2>
          <p className="text-neutral-700 leading-relaxed">
            Tokenisierte Einlagen sind digitale Abbildungen von Bankeinlagen auf Blockchain-Basis. Im Gegensatz zu Stablecoins bleiben sie regulierte Bankeinlagen mit Einlagensicherung. Sie bieten ähnliche Vorteile wie Stablecoins (schnelle Abwicklung, Programmierbarkeit), jedoch mit der Sicherheit und dem Vertrauen etablierter Banken. Für den Mittelstand besonders relevant bei bestehenden Bankbeziehungen.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Definition</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Tokenisierte Einlagen</strong> (englisch: Tokenized Deposits) sind digitale Repräsentationen von Bankeinlagen, die auf einer Blockchain oder Distributed-Ledger-Technologie (DLT) abgebildet werden. Sie bleiben rechtlich und regulatorisch Bankeinlagen und unterliegen weiterhin der Bankenaufsicht und Einlagensicherung.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Der wesentliche Unterschied zu Stablecoins: Tokenisierte Einlagen werden direkt von lizenzierten Banken ausgegeben und verwaltet, nicht von spezialisierten Stablecoin-Emittenten. Jeder Token repräsentiert einen direkten Anspruch gegenüber der ausgebenden Bank.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Abgrenzung zu Stablecoins</h2>
          <div className="table-wrap">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 rounded-lg">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Merkmal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Tokenisierte Einlagen
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Stablecoins
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Emittent</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Lizenzierte Bank</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Spezialisierter Emittent</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Rechtsstatus</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Bankeinlage</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">E-Geld / Krypto-Asset</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Einlagensicherung</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Ja (bis 100.000 €)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Nein</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Aufsicht</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">BaFin / EZB</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">BaFin (MiCAR)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Besicherung</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Bankbilanz</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Segregierte Reserven</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Nutzen für den Mittelstand</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Einlagensicherung bleibt erhalten</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Im Gegensatz zu Stablecoins genießen tokenisierte Einlagen weiterhin den Schutz der gesetzlichen Einlagensicherung bis 100.000 Euro pro Kunde und Bank.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Vertraute Bankbeziehung</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Unternehmen können mit ihrer bestehenden Hausbank arbeiten und müssen nicht zu spezialisierten Stablecoin-Anbietern wechseln. Bestehende Kreditlinien und Services bleiben erhalten.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Blockchain-Vorteile nutzen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  T+0-Settlement, 24/7-Verfügbarkeit und programmierbare Zahlungen werden möglich, ohne das regulatorische Umfeld einer Bankeinlage zu verlassen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Geringeres Emittentenrisiko</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Banken unterliegen strengerer Aufsicht und höheren Kapitalanforderungen als reine Stablecoin-Emittenten. Vertrauen in etablierte Banken ist oft höher.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Risiken & Grenzen</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Begrenzte Verfügbarkeit</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Noch bieten nur wenige Banken tokenisierte Einlagen an. Das Ökosystem ist deutlich kleiner als bei etablierten Stablecoins wie USDC oder EURC.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Interoperabilität eingeschränkt</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Tokenisierte Einlagen verschiedener Banken sind oft nicht direkt untereinander kompatibel. Standards und Infrastruktur befinden sich noch im Aufbau.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Bankabhängigkeit</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Sie sind an die technologische Leistungsfähigkeit und strategische Ausrichtung Ihrer Bank gebunden. Wechsel zu anderen Anbietern kann kompliziert sein.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Praxisbeispiele</h2>
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 1: Treasury-Optimierung mit bestehender Hausbank</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Ein Mittelständler nutzt tokenisierte Einlagen seiner Hausbank für Intercompany-Zahlungen zwischen deutschen und französischen Tochtergesellschaften. Liquidität wird in Echtzeit verschoben, bleibt aber regulierte Bankeinlage mit Einlagensicherung. Kreditlinie und Cash-Pooling-Vereinbarungen bleiben unverändert.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 2: Automatisierte Zahlungen im Lieferantenmanagement</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Automobilzulieferer hinterlegt tokenisierte Einlagen in Smart Contract für Just-in-Time-Lieferungen. Bei erfolgreicher Warenannahme (bestätigt über IoT-Sensor) erfolgt automatische Zahlung an Lieferanten. Bankkonto bleibt regulierte Einlage, Prozess aber vollautomatisiert.
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
                <h3 className="font-semibold text-neutral-900">Hausbank konsultieren</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Fragen Sie bei Ihrer Hausbank nach, ob und wann tokenisierte Einlagen angeboten werden. Viele Banken befinden sich in Pilotphasen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Vergleich mit Stablecoins</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Bewerten Sie, ob die Einlagensicherung und Bankverbindung die möglichen Nachteile (begrenzte Verfügbarkeit, geringere Interoperabilität) aufwiegen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Hybride Strategien erwägen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Kombinieren Sie beide Ansätze: Tokenisierte Einlagen für Treasury-Operationen mit der Hausbank, Stablecoins für grenzüberschreitende Zahlungen mit breiterer Akzeptanz.
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

export default WissenTokenisierteEinlagen;
