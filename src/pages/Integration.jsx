import React from 'react';
import { Plug, Database, Webhook, Shield, FileText, Zap, Lock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

function Integration() {
  const aspects = [
    {
      icon: Database,
      title: "Buchungssätze & Kontierung",
      description: "Automatisierte Erfassung von Stablecoin-Transaktionen im ERP. Mapping auf Kontenrahmen (SKR03/SKR04), korrekte Umsatzsteuer-Behandlung, Währungskurse bei Crypto-Fiat-Conversion."
    },
    {
      icon: FileText,
      title: "Steuerlogik",
      description: "Integration von Umsatzsteuer-Berechnungen, Reverse-Charge-Verfahren bei grenzüberschreitenden Zahlungen, automatische Dokumentation für Betriebsprüfungen, GoBD-konforme Archivierung."
    },
    {
      icon: Shield,
      title: "Compliance & KYC",
      description: "Anbindung an KYC-Provider, automatisiertes Screening gegen Sanktionslisten, Transaktionsmonitoring für AML-Zwecke, Dokumentation für Compliance-Nachweise."
    },
    {
      icon: Database,
      title: "Reporting & Analytics",
      description: "Echtzeit-Dashboard für Liquidität in Stablecoins, Cashflow-Analysen, Reconciliation zwischen Blockchain und ERP, Export für Wirtschaftsprüfer und Steuerbehörden."
    },
    {
      icon: Webhook,
      title: "API-First Architektur",
      description: "RESTful APIs für alle Zahlungsoperationen, Webhook-Benachrichtigungen bei Transaktionsereignissen, standardisierte Schnittstellen zu Stablecoin-Anbietern, Event-Driven Architecture."
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "DSGVO-konforme Datenhaltung, Ende-zu-Ende-Verschlüsselung sensitiver Daten, minimale Datenspeicherung (Data Minimization), Pseudonymisierung wo möglich."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          icon={<Plug className="h-6 w-6 text-neutral-700" aria-hidden="true" />}
          title="Integration"
          subtitle="Wie digitale Euro-Lösungen sauber in ERP-Prozesse und Kontrollen eingebettet werden."
        />

        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-lg leading-8 text-neutral-600">
            Digitales Geld vom ERP-Prozess gedacht: Buchungssätze, Steuerlogik, Compliance, Reporting – API-first. Eine nahtlose Integration in Ihre bestehenden Systeme ist entscheidend für erfolgreiche Digitalisierung.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {aspects.map((aspect, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 mb-6">
                <aspect.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{aspect.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{aspect.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">ERP-Prozesssicht: End-to-End</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Zahlungsauslösung</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Aus dem ERP wird über API eine Stablecoin-Zahlung initiiert. Parameter: Betrag, Empfänger-Wallet, Verwendungszweck, Kostenstelle. System prüft Freigabeprozess und Liquidität.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Blockchain-Transaktion</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Payment Gateway übersetzt API-Call in Blockchain-Transaktion. Zahlung wird ausgeführt, Transaktions-Hash an ERP zurückgegeben. Webhook benachrichtigt bei Bestätigung (T+0).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Automatische Buchung</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  ERP erstellt Buchungssatz: Soll „Bank (Stablecoin)" / Haben „Verbindlichkeiten Lieferanten". Umsatzsteuer wird korrekt zugeordnet. Beleg wird mit Blockchain-Hash archiviert (GoBD).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold text-sm flex-shrink-0 mt-0.5">
                4
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Compliance & Reporting</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Transaktion wird auf Sanktionslisten geprüft. Bei Bedarf erfolgt AML-Meldung. Für Monatsabschluss wird Report generiert: alle Stablecoin-Bewegungen mit Gegenwert in Euro, Quellennachweise, Audit Trail.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">API-First & Event-Driven</h2>
              <p className="text-primary-100 leading-relaxed mb-4">
                Moderne Integration setzt auf API-First-Architektur und ereignisgesteuerte Prozesse. Jede Stablecoin-Transaktion triggert Events, die in Echtzeit verarbeitet werden.
              </p>
              <ul className="space-y-2 text-primary-100 text-sm">
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Webhooks für Echtzeit-Benachrichtigungen bei Zahlungsereignissen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>RESTful APIs mit OpenAPI-Spezifikation für alle Operationen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Event Sourcing für vollständige Audit-Trails und Nachvollziehbarkeit</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Beispiel API-Call</h3>
              <pre className="text-xs text-primary-100 overflow-x-auto">
{`POST /api/v1/payments
{
  "amount": "1500.00",
  "currency": "EURC",
  "recipient": "0x742d35Cc6634...",
  "reference": "INV-2025-001",
  "costCenter": "CC-Marketing"
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-6">
            Haben Sie Fragen zur Integration in Ihr spezifisches ERP-System?
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Jetzt Beratung anfragen
          </a>
        </div>
      </div>
    </div>
  );
}

export default Integration;
