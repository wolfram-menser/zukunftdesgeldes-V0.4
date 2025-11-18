import React from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm';
import PageHeader from '../components/PageHeader';

function Newsletter() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <PageHeader
          icon={<Mail className="h-6 w-6 text-neutral-700" aria-hidden="true" />}
          title="Newsletter"
          subtitle="Jetzt vormerken: kompakte Updates für Entscheider im Mittelstand."
        />

        <div className="text-center mb-12">
          <p className="text-lg leading-8 text-neutral-600">
            Bleiben Sie informiert über aktuelle Entwicklungen zu Stablecoins, Digitalem Euro und Bitcoin im B2B-Kontext. Monatliche Updates zu Regulierung, Technologie und Praxisbeispielen – kompakt und praxisnah aufbereitet.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-xl font-bold text-neutral-900 mb-6">Was Sie erwartet</h2>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <span><strong>Regulatorische Updates:</strong> Neuigkeiten zu MiCAR, BaFin-Leitlinien, EZB-Ankündigungen</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <span><strong>Technologie-Entwicklungen:</strong> Neue Stablecoin-Emittenten, ERP-Integrationen, Infrastruktur-Updates</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <span><strong>Praxisbeispiele:</strong> Case Studies aus dem Mittelstand, Lessons Learned, Best Practices</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
              <span><strong>Kompakte Formate:</strong> Kurz, präzise, ohne Buzzwords – für Entscheider geschrieben</span>
            </li>
          </ul>
        </div>

        <NewsletterForm />

        <p className="text-center text-sm text-neutral-500 mt-8">
          Versandfrequenz: 1x monatlich | Jederzeit abbestellbar | Kein Spam
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
