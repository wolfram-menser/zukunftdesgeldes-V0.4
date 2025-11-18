import React from 'react';
import { AlertTriangle } from 'lucide-react';

function Disclaimer() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
            <AlertTriangle className="h-6 w-6 text-yellow-700" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Disclaimer
          </h1>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
          <p className="text-yellow-800 font-semibold mb-2">Wichtiger Hinweis</p>
          <p className="text-yellow-700 leading-relaxed">
            Die auf dieser Website bereitgestellten Informationen stellen ausdrücklich <strong>keine Anlageberatung</strong>, Finanzberatung oder Empfehlung zum Kauf oder Verkauf von Krypto-Assets, Stablecoins oder anderen Finanzinstrumenten dar.
          </p>
        </div>

        <div className="prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">1. Keine Anlageberatung</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Alle Inhalte auf dieser Website dienen ausschließlich Informations- und Bildungszwecken. Sie sind nicht als Aufforderung oder Angebot zum Erwerb oder Verkauf von Krypto-Assets zu verstehen. Investitionsentscheidungen sollten nur nach sorgfältiger Prüfung und idealerweise nach Rücksprache mit einem qualifizierten Finanzberater getroffen werden.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">2. Risiken</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Der Handel mit und die Nutzung von Krypto-Assets, einschließlich Stablecoins, birgt erhebliche Risiken:
          </p>
          <ul className="space-y-2 text-neutral-700 mb-4 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Marktrisiko:</strong> Auch Stablecoins können von ihrer Kopplung (Peg) abweichen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Emittentenrisiko:</strong> Der Ausfall eines Emittenten kann zum Totalverlust führen.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Technisches Risiko:</strong> Smart Contract Bugs, Hacks, Verlust von Private Keys.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Regulatorisches Risiko:</strong> Änderungen im rechtlichen Rahmen können Geschäftsmodelle beeinträchtigen.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">3. Keine Gewährleistung für Richtigkeit</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Wir bemühen uns um größtmögliche Aktualität und Korrektheit der Informationen. Dennoch können wir keine Gewähr für Vollständigkeit, Richtigkeit und Aktualität übernehmen. Die Inhalte spiegeln den Stand zum angegebenen Datum wider. Rechtliche und regulatorische Rahmenbedingungen können sich ändern.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">4. Externe Links</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Diese Website enthält Links zu externen Websites Dritter. Wir haben keinen Einfluss auf deren Inhalte und übernehmen keine Haftung für die Richtigkeit oder Aktualität der dort bereitgestellten Informationen.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">5. Quellen</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Alle zitierten Quellen werden mit Datum und URL angegeben. Die Verantwortung für die Richtigkeit der Quellen liegt bei den jeweiligen Herausgebern. Wir überprüfen Quellen nach bestem Wissen, können aber keine abschließende Gewähr übernehmen.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">6. Handlungsempfehlungen</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Alle auf dieser Website genannten "Schritte für Entscheider" sind allgemeine Empfehlungen ohne Anspruch auf Vollständigkeit. Sie ersetzen keine individuelle Beratung durch qualifizierte Rechtsanwälte, Steuerberater oder Wirtschaftsprüfer. Jedes Unternehmen muss seine spezifische Situation eigenverantwortlich bewerten.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">7. Haftungsausschluss</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Wir übernehmen keine Haftung für Schäden, die aus der Nutzung oder Nichtnutzung der auf dieser Website bereitgestellten Informationen entstehen. Dies gilt insbesondere für direkte oder indirekte Vermögensschäden.
          </p>

          <div className="bg-neutral-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Zusammenfassung</h3>
            <p className="text-neutral-700 leading-relaxed">
              Diese Website ist ein <strong>Informationsangebot</strong> für Entscheider im Mittelstand, die sich mit digitalem Geld im B2B-Kontext auseinandersetzen. Sie ersetzt <strong>keine professionelle Beratung</strong> und stellt <strong>keine Anlageempfehlung</strong> dar. Investitions- und Geschäftsentscheidungen treffen Sie eigenverantwortlich.
            </p>
          </div>

          <p className="text-sm text-neutral-500 mt-8">
            Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
