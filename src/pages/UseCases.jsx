import React from 'react';
import { Box, Globe, Code, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function UseCases() {
  const cases = [
    {
      icon: Globe,
      title: "Grenzüberschreitender Zahlungsverkehr",
      subtitle: "Schneller, planbarer, transparenter.",
      description: "Cross-border-Zahlungen sind für den Mittelstand oft langsam (T+2–T+5), schwer kalkulierbar (In-/Korrespondenzbank-Gebühren + FX-Spread) und schlecht zu verfolgen. Moderne Netze (Fintech) und blockchain-basierte Settlements (Stablecoins) verkürzen Laufzeiten auf Stunden bis T+0, machen All-in-Kosten transparenter und bieten 24/7-Betrieb.",
      benefits: [
        "Geschwindigkeit: Stunden bis T+0 statt T+2–T+5",
        "Kostentransparenz: Gebühr + sichtbarer FX-Spread",
        "Planbarkeit: 24/7-Betrieb, klares Tracking, weniger Rückfragen"
      ],
      color: "bg-blue-50 text-blue-700",
      ctaLink: "/anwendungen/grenzzahlungen-indien",
      ctaLabel: "→ Zum Leitfaden"
    },
    {
      icon: Code,
      title: "Programmierbares Geld in Datenräumen",
      subtitle: "Manufacturing-X, neue Monetarisierungsmodelle",
      description: "Smart Contracts ermöglichen automatisierte Zahlungsströme in Datenräumen. Pay-per-Use, Pay-per-Part, Pay-per-Outcome und Micropayments für Daten/Services werden wirtschaftlich möglich.",
      benefits: [
        "Automatisierte Abrechnung ohne manuelle Intervention",
        "Micropayments (< 1 Euro) wirtschaftlich umsetzbar",
        "Neue Geschäftsmodelle in Manufacturing-X"
      ],
      color: "bg-purple-50 text-purple-700"
    },
    {
      icon: Building2,
      title: "Treasury & Intercompany",
      subtitle: "Liquiditätsmanagement, interne Transfers",
      description: "Echtzeit-Liquiditätsverschiebung zwischen Konzerngesellschaften ohne SWIFT-Verzögerungen. Optimierung von Cash-Pooling und Treasury-Prozessen.",
      benefits: [
        "Intercompany-Zahlungen in Echtzeit",
        "Transparente Liquiditätsübersicht konzernweit",
        "Reduzierte Bankgebühren für interne Transfers"
      ],
      color: "bg-red-50 text-red-700"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          icon={<Box className="h-6 w-6 text-neutral-700" aria-hidden="true" />}
          title="Anwendungsfälle"
          subtitle="Vom Zahlungsverkehr bis Integration: konkrete Beispiele mit messbarem Nutzen."
        />

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {cases.map((useCase, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${useCase.color} group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">{useCase.title}</h2>
                  <p className="text-sm font-semibold text-primary-600 mb-4">{useCase.subtitle}</p>
                  <p className="text-neutral-700 leading-relaxed mb-6">{useCase.description}</p>
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-4">Konkrete Vorteile:</h3>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {useCase.ctaLink && (
                      <a 
                        href={useCase.ctaLink} 
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {useCase.ctaLabel || "Mehr erfahren"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {index < cases.length - 1 && (
                <div className="mt-12 border-b border-neutral-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-600 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Haben Sie einen spezifischen Use Case?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam evaluieren, wie digitales Geld Ihre Geschäftsprozesse optimieren kann. Von der ersten Idee bis zur ERP-Integration.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-neutral-50 transition-colors"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default UseCases;
