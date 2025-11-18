import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Coins, Building2, Euro, Bitcoin, Scale, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

function Wissen() {
  const topics = [
    {
      icon: Coins,
      title: "Stablecoins – Grundlagen",
      subtitle: "Digitale Zahlungsmittel mit Wertbindung.",
      description: "Was Stablecoins sind, wie die Wertbindung funktioniert und weshalb sie für Unternehmen relevant werden. Wir erklären Emittenten-Modelle, Reserven und die wichtigsten Einsatzfelder – sachlich und ohne Hype.",
      details: [
        "Emittentenmodelle (vollbesichert, besicherte Schuldinstrumente)",
        "Reserven, Attestierungen & Transparenzberichte",
        "On-/Off-Ramps und typische Anwendungsfälle (Cash-Mgmt, Zahlungen)"
      ],
      path: "/wissen/stablecoins",
      color: "bg-blue-50 text-blue-700 group-hover:bg-blue-600",
      cta: "→ Grundlagen lesen"
    },
    {
      icon: Building2,
      title: "Euro-Stablecoins für den Mittelstand",
      subtitle: "Rechnungen in Euro, Settlement in Minuten.",
      description: "Fokus auf Euro-denominierte Stablecoins und ihre Tauglichkeit für DACH-Unternehmen. Wir beleuchten Anbieter, MiCAR-Rahmen, Kosten und praktische Prozessfragen.",
      details: [
        "Anbieterlandschaft & MiCAR-Konformität",
        "Gebühren, Spreads und 24/7-Betrieb in der Praxis",
        "Einsatzszenarien: Rechnung, Treasury, Lieferanten/Zwischenfirmen"
      ],
      path: "/wissen/euro-stablecoins",
      color: "bg-purple-50 text-purple-700 group-hover:bg-purple-600",
      cta: "→ Euro-Stablecoins im Überblick"
    },
    {
      icon: Euro,
      title: "Digitaler Euro (prospektiv)",
      subtitle: "Was geplant ist – und was nicht.",
      description: "Der Stand der Dinge zum digitalen Euro des Eurosystems, mögliche Funktionen und Abgrenzung zu Stablecoins. Klarheit, welche Optionen für Unternehmen realistisch sind.",
      details: [
        "Designziele, Rollenmodell & Offline-Optionen",
        "Datenschutz, Limits & Intermediär-Modell",
        "Unterschiede zu Euro-Stablecoins im Alltag"
      ],
      path: "/wissen/digitaler-euro",
      color: "bg-green-50 text-green-700 group-hover:bg-green-600",
      cta: "→ Digitaler Euro verstehen"
    },
    {
      icon: Bitcoin,
      title: "Bitcoin im B2B",
      subtitle: "Wertspeicher – mit klarem Blick auf Prozesse.",
      description: "Warum Bitcoin primär als Wertspeicher gesehen wird und wo operative Zahlungen (z. B. Lightning) sinnvoll sein können. Bilanzierung, Risiken und Policies für Unternehmen.",
      details: [
        "Wertspeicher vs. Zahlungsrail",
        "Bilanzierung/Steuern & Volatilitätsmanagement",
        "Lightning-Zahlungen: Chancen und Grenzen"
      ],
      path: "/wissen/bitcoin-im-b2b",
      color: "bg-orange-50 text-orange-700 group-hover:bg-orange-600",
      cta: "→ Bitcoin im Unternehmen"
    },
    {
      icon: Scale,
      title: "Regulierung",
      subtitle: "Was Unternehmen wirklich betrifft.",
      description: "Der rechtliche Rahmen in EU/DE sowie relevante US-Bezüge. Keine Paragraphenflut, sondern praktische Auswirkungen auf Prozesse, Compliance und Reporting.",
      details: [
        "EU: MiCAR/AMLR, Travel Rule & Aufsichtspraxis",
        "DE: BaFin/Bundesbank-Hinweise und Meldewesen",
        "US-Bezüge, wo für DACH-Unternehmen relevant"
      ],
      path: "/wissen/regulierung",
      color: "bg-red-50 text-red-700 group-hover:bg-red-600",
      cta: "→ Regulatorik kompakt"
    },
    {
      icon: Coins,
      title: "Blockchain & DLT – Grundlagen",
      subtitle: "Technik verstehen, Entscheidungen treffen.",
      description: "Die wichtigsten Architekturentscheidungen ohne Fachchinesisch: permissioned vs. permissionless, Konsens, Datenmodelle und Schnittstellen.",
      details: [
        "Permissioned vs. Permissionless & typische Trade-offs",
        "Konsensverfahren im Überblick",
        "Daten, Schnittstellen & Interoperabilität"
      ],
      path: "/wissen/blockchain-dlt",
      color: "bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600",
      cta: "→ DLT-Grundlagen"
    },
    {
      icon: Building2,
      title: "Custody & Konten",
      subtitle: "Sicher verwahren – organisatorisch & technisch.",
      description: "Optionen von Self-Custody bis Hosted/WaSSP: Schlüsselverwaltung, Rollen, Notfallkonzepte und interne Richtlinien für revisionssichere Prozesse.",
      details: [
        "Self-Custody vs. Dienstleister (Vor-/Nachteile)",
        "Rollen/Policies, Protokollierung & Freigaben",
        "Notfall-/Wiederherstellungsprozesse"
      ],
      path: "/wissen/custody",
      color: "bg-teal-50 text-teal-700 group-hover:bg-teal-600",
      cta: "→ Custody verstehen"
    },
    {
      icon: Scale,
      title: "Glossar",
      subtitle: "Kurz, präzise, verlinkbar.",
      description: "Ein Nachschlagewerk für alle Abkürzungen und Schlüsselbegriffe – mit stabilen Ankern und JSON-Export für Tooltips und KI.",
      details: [
        "Abkürzungen mit Langform & Kurzdefinition",
        "Direktlinks (z. B. /wissen/glossar#swift)",
        "Maschinenlesbar unter /wissen/glossar.json"
      ],
      path: "/wissen/glossar",
      color: "bg-gray-50 text-gray-700 group-hover:bg-gray-600",
      cta: "→ Zum Glossar"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          icon={<BookOpen className="h-6 w-6 text-neutral-700" aria-hidden="true" />}
          title="Wissenshub"
          subtitle="Grundlagen zu Stablecoins, digitalem Euro und Blockchain – verständlich und praxisnah."
        />

        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-lg leading-8 text-neutral-600">
            Kurzbriefings für Entscheider: Stablecoins, Digitaler Euro, Bitcoin im B2B – mit Fokus auf Nutzen, Compliance und ERP-Integration. Jede Seite folgt einer klaren Struktur: TL;DR, Definition, Nutzen, Risiken, Beispiele und konkrete Schritte.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={topic.path}
              className="group block relative bg-white rounded-xl p-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${topic.color} group-hover:text-white transition-colors duration-300 mb-4`}>
                <topic.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{topic.title}</h3>
              {topic.subtitle && (
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-3">{topic.subtitle}</p>
              )}
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">{topic.description}</p>
              {topic.details && (
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-neutral-700">Darin geht's:</p>
                  <ul className="space-y-1">
                    {topic.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-neutral-600 flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-20 bg-neutral-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Strukturierte Wissensvermittlung
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Alle Wissensartikel folgen einer einheitlichen Struktur, die schnelle Orientierung ermöglicht:
          </p>
          <ul className="space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
              <span><strong>TL;DR</strong> – Kernaussage auf einen Blick</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
              <span><strong>Definition</strong> – Präzise Begriffserklärung</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
              <span><strong>Nutzen</strong> – Konkrete Vorteile für Ihr Unternehmen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
              <span><strong>Risiken & Grenzen</strong> – Realistische Einschätzung</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">5</span>
              <span><strong>Beispiele</strong> – Praxisnahe Anwendungsfälle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">6</span>
              <span><strong>Schritte für Entscheider</strong> – Handlungsempfehlungen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold flex-shrink-0 mt-0.5">7</span>
              <span><strong>Quellen</strong> – Nachprüfbare Referenzen mit Datum</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Wissen;