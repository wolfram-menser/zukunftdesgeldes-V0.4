import React from 'react';
import { ExternalLink } from 'lucide-react';

function WissenEuroStablecoins() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Euro-Stablecoins für den Mittelstand
          </h1>
          <p className="text-sm text-neutral-500">Stand: 2025-01-09</p>
        </div>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Inhalt folgt in Kürze</h2>
          <p className="text-neutral-700 leading-relaxed">
            Dieser Bereich wird zeitnah mit detaillierten Informationen zu Euro-Stablecoins für den Mittelstand befüllt. 
            Fokus: Anbieterlandschaft, MiCAR-Konformität, Gebührenstrukturen und praktische Einsatzszenarien.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Geplante Themenschwerpunkte</h2>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Anbieterlandschaft & MiCAR-Konformität:</strong> Überblick über regulierte Euro-Stablecoin-Emittenten</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Gebühren, Spreads und 24/7-Betrieb:</strong> Kostenstrukturen in der Praxis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span><strong>Einsatzszenarien:</strong> Rechnungsstellung, Treasury-Management, Lieferantenzahlungen</span>
            </li>
          </ul>
        </section>

        <div className="bg-neutral-100 rounded-lg p-6 text-center">
          <p className="text-sm text-neutral-600">
            Diese Seite befindet sich im Aufbau. Weitere Informationen folgen in Kürze.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WissenEuroStablecoins;
