import React from 'react';
import { ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';

function WissenBitcoinImB2B() {
  const sources = [
    {
      title: "MicroStrategy Corporate Bitcoin Strategy",
      url: "https://www.microstrategy.com/en/bitcoin",
      date: "2024-11-15"
    },
    {
      title: "Fidelity Digital Assets: Bitcoin in Corporate Treasuries",
      url: "https://www.fidelitydigitalassets.com/research-and-insights",
      date: "2024-02-28"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Bitcoin im B2B
          </h1>
          <p className="text-sm text-neutral-500">Stand: 2025-01-06</p>
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">TL;DR – Das Wichtigste in Kürze</h2>
          <p className="text-neutral-700 leading-relaxed">
            Bitcoin spielt im B2B-Kontext primär die Rolle eines digitalen Wertspeicher (Treasury Asset), nicht eines operativen Zahlungsmittels. Volatilität, begrenzte Programmierbarkeit und Skalierungsgrenzen machen Bitcoin für alltägliche B2B-Zahlungen ungeeignet. Für Mittelständler relevant als langfristige Treasury-Reserve bei entsprechender Risikotoleranz, aber nicht für operative Prozesse.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Definition</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Bitcoin</strong> ist die erste und bekannteste Kryptowährung, eingeführt 2009. Bitcoin ist ein dezentrales, zensurresistentes digitales Geld ohne zentrale Kontrollinstanz. Die maximale Anzahl ist auf 21 Millionen Einheiten begrenzt (deflationäres Design).
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Im B2B-Kontext wird Bitcoin zunehmend als <strong>Treasury Asset</strong> (Reserveanlage) betrachtet – vergleichbar mit Gold, aber digital. Die Rolle als operatives Zahlungsmittel tritt aufgrund der hohen Volatilität in den Hintergrund.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Rolle als Wertspeicher (Store of Value)</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Digitales Gold</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Wie Gold ist Bitcoin ein knappes Asset (21 Millionen Max-Supply) ohne zentrale Kontrollinstanz. Unternehmen wie MicroStrategy, Tesla (zeitweise) und Block halten Bitcoin in ihren Bilanzen als langfristige Reserve.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Inflationsschutz</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Das begrenzte Angebot und die vorhersehbare Ausgabepolitik (Bitcoin Halving alle 4 Jahre) machen Bitcoin zu einer Alternative für Unternehmen, die sich gegen Fiat-Entwertung absichern wollen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Diversifikation</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Bitcoin korreliert nur schwach mit traditionellen Assets (Aktien, Anleihen, Rohstoffe). Als Beimischung im Treasury kann Bitcoin die Portfolio-Diversifikation verbessern.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Grenzen für operative B2B-Zahlungen</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Hohe Volatilität</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Preisschwankungen von 10-20% pro Woche sind keine Seltenheit. Für operative Zahlungen (Rechnungen, Gehälter, Lieferantenzahlungen) inakzeptabel. Unternehmen benötigen Planungssicherheit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Begrenzte Programmierbarkeit</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Bitcoin Script (die Programmiersprache von Bitcoin) ist absichtlich eingeschränkt. Komplexe Smart Contracts (wie bei Ethereum oder anderen Plattformen) sind nicht möglich. Automatisierte Zahlungsströme schwer umsetzbar.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Skalierungsgrenzen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Bitcoin verarbeitet ca. 7 Transaktionen pro Sekunde (Visa: ~65.000 tps). Bei hoher Netzwerkauslastung steigen Gebühren und Bestätigungszeiten. Für Massentransaktionen im B2B ungeeignet.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-neutral-900">Buchhalterische Komplexität</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Jede Bitcoin-Transaktion kann steuerlich als Veräußerungsgeschäft gelten. Bewertung, Besteuerung (Realisierung von Kursgewinnen/-verlusten) und Dokumentation erfordern erheblichen Aufwand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Praxisbeispiele</h2>
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 1: MicroStrategy – Bitcoin als Treasury-Reserve</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Das US-Unternehmen MicroStrategy hält über 150.000 Bitcoin (ca. 0,7% des Gesamtangebots) als zentrale Treasury-Strategie. Ziel: langfristige Wertsteigerung und Inflationsschutz. Operative Zahlungen erfolgen weiterhin in US-Dollar.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="font-semibold text-neutral-900 mb-2">Beispiel 2: Lightning Network für Mikrotransaktionen</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Das Lightning Network ist eine Second-Layer-Lösung für Bitcoin, die schnelle und kostengünstige Mikrozahlungen ermöglicht. Anwendungsfall: Internationale Freelancer-Zahlungen in Bitcoin über Lightning. Reduzierte Gebühren, schnellere Abwicklung – aber weiterhin Volatilitätsrisiko.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Vergleich: Bitcoin vs. Stablecoins</h2>
          <div className="table-wrap">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 rounded-lg">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Merkmal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Bitcoin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Euro-Stablecoins
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Wert­stabilität</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Hoch volatil</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Stabil (1:1 Euro)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Einsatz­zweck B2B</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Treasury Asset</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Operative Zahlungen</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Programmier­barkeit</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Eingeschränkt</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Hoch (Smart Contracts)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Skalierung</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">~7 tps (Layer 1)</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Tausende tps</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Dezentralität</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Maximal</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Zentralisiert (Emittent)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 text-sm font-medium text-neutral-900">Regulierung</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Unklar / fragmentiert</td>
                  <td className="px-6 py-4 text-sm text-neutral-700">Klar (MiCAR)</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Schritte für Entscheider</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">1</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Klare Trennung: Treasury vs. Operations</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Wenn Sie Bitcoin in Betracht ziehen, sollte dies als langfristige Treasury-Anlage geschehen – nicht als Zahlungsmittel. Für operative Zahlungen nutzen Sie Stablecoins oder Fiat.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Risikotoleranz prüfen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Bitcoin kann 50%+ im Wert schwanken. Nur investieren, wenn Ihr Unternehmen langfristig orientiert ist und Volatilität verkraften kann. Niemals operative Liquidität in Bitcoin binden.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Steuerliche und rechtliche Beratung einholen</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Bilanzierung, Bewertung und Besteuerung von Bitcoin sind komplex. Klären Sie mit Steuerberatern und Wirtschaftsprüfern die korrekte Behandlung nach HGB/IFRS.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">4</span>
              <div>
                <h3 className="font-semibold text-neutral-900">Custody-Lösung etablieren</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  Sichere Verwahrung (Cold Storage, Multi-Sig-Wallets, professionelle Custody-Anbieter) ist essenziell. Verlust von Private Keys bedeutet unwiederbringlichen Totalverlust.
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

export default WissenBitcoinImB2B;
