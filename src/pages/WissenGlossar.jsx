import React from 'react';
import { Link } from 'react-router-dom';

function WissenGlossar() {
  // Central glossary entries - add new terms here and they'll be automatically sorted
  const glossaryTerms = [
    {
      id: 'art',
      term: 'ART (Asset-referenzierter Token)',
      definition: 'Ein ART ist ein Token, dessen Wert sich auf einen Korb von Vermögenswerten (z. B. Währungen und kurzlaufende Anlagen) bezieht. ARTs sollen stabil wirken, sind aber nicht 1:1 auf eine einzelne Fiatwährung bezogen. Unter MiCAR gelten erhöhte Anforderungen an Governance, Offenlegung und Aufsicht. Für konservative Unternehmenszwecke ist die Transparenz über Zusammensetzung und Risiken entscheidend.'
    },
    {
      id: 'aml',
      term: 'AML (Anti-Money Laundering)',
      definition: 'AML ist der regulatorische Rahmen zur Verhinderung von Geldwäsche und Terrorismusfinanzierung. Banken, Fintechs und On/Off-Ramps müssen Kunden identifizieren, Transaktionen risikobasiert überwachen und auffällige Vorgänge melden. Die Anforderungen beeinflussen Geschwindigkeit, Dokumentationsaufwand und teilweise auch die Pfade, über die grenzüberschreitende Zahlungen laufen.'
    },
    {
      id: 'awv',
      term: 'AWV-Meldepflicht (Deutschland)',
      definition: 'Die AWV regelt u. a. die Meldepflicht für grenzüberschreitende Zahlungen von in der Regel mehr als 12.500 € (Ein- und Ausgänge) an die Deutsche Bundesbank. Die Meldung dient statistischen Zwecken und ist kein Steuerverfahren; Ausnahmen sind möglich. Unternehmen sollten die Prozesse so gestalten, dass relevante Zahlungen erkannt und fristgerecht elektronisch gemeldet werden. Details stellt die Bundesbank bereit.'
    },
    {
      id: 'block-explorer',
      term: 'Block Explorer',
      definition: 'Ein Block Explorer ist ein Online-Werkzeug, mit dem Transaktionen, Adressen und Blöcke einer Blockchain eingesehen werden können. Er schafft Nachvollziehbarkeit (z. B. für Zahlungs-Hashes in Belegen) und unterstützt Prüfungen. Unternehmen sollten beachten, dass öffentlich sichtbare Adressen Rückschlüsse auf Zahlungsbeziehungen zulassen können.'
    },
    {
      id: 'cbdc',
      term: 'CBDC (Central Bank Digital Currency)',
      definition: 'Digitale Zentralbankwährung. Digitales Geld, das direkt von einer Zentralbank ausgegeben wird (z. B. Digitaler Euro).'
    },
    {
      id: 'chain-id',
      term: 'Chain ID & Netzwerkwahl',
      definition: 'Die Chain ID identifiziert ein Blockchain-Netz eindeutig. Falsche Netzwerkwahl kann zum Verlust von Mitteln führen oder dazu, dass ein Token in der Zielumgebung nicht existiert. Unternehmen sollten nur Netze mit ausreichender Verfügbarkeit, Provider-Support und Liquidität nutzen und Netz/Token vorab eindeutig dokumentieren.'
    },
    {
      id: 'emt',
      term: 'EMT (E-Money-Token)',
      definition: 'Ein EMT ist ein nach MiCAR regulierter Token, dessen Wert 1:1 an eine Fiatwährung (z. B. EUR) gebunden ist und den Inhabern einen Einlöseanspruch zum Nennwert gibt. Emittieren dürfen grundsätzlich Kreditinstitute oder E-Geld-Institute; Reserven, Governance und Berichte sind vorgeschrieben. EMTs sind die typische Kategorie für Euro-Stablecoins.'
    },
    {
      id: 'escrow',
      term: 'Escrow',
      definition: 'Escrow bezeichnet eine treuhänderische Verwahrung von Vermögenswerten bis zum Eintritt definierter Bedingungen. On-chain kann Escrow durch Smart Contracts umgesetzt werden; off-chain durch Treuhänder. Dadurch wird Gegenparteirisiko reduziert, und Zahlungen können eng an Liefer- oder Leistungsnachweise gekoppelt werden.'
    },
    {
      id: 'fema',
      term: 'FEMA (Foreign Exchange Management Act)',
      definition: 'FEMA regelt Devisengeschäfte in Indien, einschließlich Zweckcodes, zulässiger Transaktionsarten und Dokumentationspflichten. Ausländische Zahlungen an indische Empfänger müssen korrekt klassifiziert und belegt werden, um Verzögerungen, Rückfragen oder Zurückweisungen zu vermeiden. Anbieter und Unternehmen sollten Prozesse und Unterlagen im Vorfeld abstimmen.'
    },
    {
      id: 'finalitaet',
      term: 'Finalität (Settlement Finality)',
      definition: 'Finalität bezeichnet den Zeitpunkt, ab dem eine Zahlung rechtlich und technisch unwiderruflich ist. Bei Kartenzahlungen sind nachgelagerte Rückbelastungen (Chargebacks) möglich, bei Überweisungen hängt eine Rückabwicklung vom Status und den beteiligten Banken ab. On-Chain-Transaktionen gelten nach Bestätigung als final; Korrekturen erfolgen ausschließlich über eine neue Gegenbuchung.'
    },
    {
      id: 'gas-fee',
      term: 'Gas Fee (Netzwerkgebühr)',
      definition: 'Die Gas Fee ist die Transaktionsgebühr im jeweiligen Blockchain-Netz. Sie hängt von Netzwerkauslastung und Transaktionskomplexität ab und variiert entsprechend. Für Unternehmen zählt der All-in-Vergleich: Netzwerkgebühr plus Dienstleister-Entgelte und ggf. FX-Spreads.'
    },
    {
      id: 'gpi',
      term: 'SWIFT gpi',
      definition: 'SWIFT gpi ist ein Rahmenwerk zur Beschleunigung und besseren Nachverfolgung grenzüberschreitender Zahlungen im Korrespondenzbankensystem. Kern sind einheitliche End-to-End-Referenzen, Status-Tracking und mehr Transparenz bei Gebühren und Laufzeiten. gpi verbessert die Planbarkeit gegenüber klassischem SWIFT-Verkehr, ersetzt aber nicht alle Zwischenstufen.'
    },
    {
      id: 'hsm',
      term: 'HSM (Hardware Security Module)',
      definition: 'Ein HSM ist ein spezialisiertes, manipulationsresistentes Gerät zur sicheren Generierung und Speicherung kryptografischer Schlüssel und zur Signatur. Im Unternehmenskontext ermöglicht es hochsichere Freigaben und Auditierbarkeit. HSMs werden häufig mit Rollen- und Freigabekonzepten kombiniert.'
    },
    {
      id: 'fx',
      term: 'FX (Foreign Exchange)',
      definition: 'FX ist die Umrechnung zwischen Währungen wie EUR und INR und erfolgt zu einem Kurs, der typischerweise einen Spread zum Referenzkurs enthält. Neben expliziten Gebühren ist der Spread häufig der größte versteckte Kostentreiber. Für eine faire Bewertung sollten Unternehmen stets den All-in-Kurs betrachten, also Gebühr plus Spread.'
    },
    {
      id: 'iso20022',
      term: 'ISO 20022',
      definition: 'ISO 20022 ist ein moderner Nachrichtenstandard für Finanzdaten, der ältere MT-Formate schrittweise ablöst. Er ermöglicht umfangreichere, strukturierte Zahlungsinformationen (z. B. Referenzen, Gründe, Identifikatoren), wodurch Abstimmung und Automatisierung erleichtert werden. Im grenzüberschreitenden Kontext verbessert ISO 20022 die Datenqualität und unterstützt schnelleres, nachvollziehbareres Processing.'
    },
    {
      id: 'kyc',
      term: 'KYC (Know Your Customer)',
      definition: 'KYC umfasst die Identifizierung von Kunden und wirtschaftlich Berechtigten sowie Prüfungen gegen Sanktions- und PEP-Listen. Abhängig von Risiko und Schwellenwerten sind regelmäßige Aktualisierungen und zusätzliche Unterlagen erforderlich. Ohne vollständiges KYC sind Kontoeröffnung, Limits oder On/Off-Ramp-Zugänge oft eingeschränkt.'
    },
    {
      id: 'mpc',
      term: 'MPC (Multi-Party Computation)',
      definition: 'MPC-Wallets verteilen die Schlüsselmacht auf mehrere Anteile, die gemeinsam signieren, ohne dass ein vollständiger Schlüssel an einer Stelle entsteht. Das reduziert Single-Point-of-Failure-Risiken und ermöglicht flexible Freigabepolitiken. Governance-Regeln und Ausfallsicherheit der Anteile bleiben dennoch kritisch.'
    },
    {
      id: 'multisig',
      term: 'Multisig',
      definition: 'Bei Multisig sind M-von-N Signaturen erforderlich, um eine Transaktion freizugeben. Je nach Blockchain ist Multisig nativ oder über Smart Contracts realisiert. Es ist einfach verständlich, aber weniger flexibel als MPC; die richtige Parameterwahl (M/N) ist sicherheits- und betriebsrelevant.'
    },
    {
      id: 'neft-rtgs-imps',
      term: 'NEFT / RTGS / IMPS (Indien)',
      definition: 'NEFT (National Electronic Funds Transfer) verarbeitet Überweisungen in Batches und ist flächendeckend verfügbar; die Gutschrift erfolgt innerhalb der Betriebsfenster in Intervallen. RTGS (Real Time Gross Settlement) ist für größere Beträge ausgelegt und stellt Zahlungen in Echtzeit brutto final, was eine hohe Sicherheit der Gutschrift bietet. IMPS (Immediate Payment Service) ermöglicht Echtzeit-Überweisungen meist rund um die Uhr und wird häufig für kleinere Beträge genutzt; die Wahl des Rails richtet sich nach Betrag, Dringlichkeit und Bankanbindung.'
    },
    {
      id: 'nostro-vostro',
      term: 'Nostro/Vostro',
      definition: 'Nostro- und Vostro-Konten sind Korrespondenzbank-Konten, die Banken gegenseitig führen, wenn keine direkte Beziehung besteht. Nostro bedeutet „unser Konto bei euch", Vostro „euer Konto bei uns". Diese Konten sind zentrale Bausteine in Auslandszahlungs-Ketten und haben Einfluss auf Laufzeiten, Entgelte und Transparenz.'
    },
    {
      id: 'on-off-ramp',
      term: 'On-Ramp / Off-Ramp',
      definition: 'On-Ramps dienen dem Tausch von FIAT in Token (z. B. Stablecoins), Off-Ramps dem Rücktausch von Token in FIAT. Qualität der Anbieter zeigt sich in KYC/AML-Prozessen, Liquidität, Gebührenstruktur, lokaler Regulierung und der Zuverlässigkeit der Auszahlungsnetze. Für Unternehmen sind klare Quittungen, Referenzen und eine belastbare Betriebserfahrung besonders wichtig.'
    },
    {
      id: 'our-sha-ben',
      term: 'OUR / SHA / BEN',
      definition: 'OUR, SHA und BEN bestimmen die Verteilung von Gebühren in der Auslandsüberweisungskette. OUR bedeutet, dass der Absender alle Entgelte trägt und der Empfänger den vollen Betrag erhält; SHA teilt Gebühren zwischen Absender und Empfänger; BEN belastet Entgelte dem Empfänger, der dadurch weniger gutgeschrieben bekommt. Die Wahl beeinflusst sowohl die Netto-Gutschrift als auch potenziell den Abwicklungsweg über Zwischenbanken.'
    },
    {
      id: 'proof-of-reserves',
      term: 'Proof of Reserves',
      definition: 'Proof of Reserves bezeichnet Nachweise, dass ein Emittent oder Dienstleister hinterlegte Reserven in ausreichender Höhe hält. Oft handelt es sich um attestierte Stichzeitpunkt-Prüfungen; ohne Ergänzung um Verbindlichkeiten (Proof of Liabilities) sind die Aussagen begrenzt. Für Unternehmen zählen Prüfungsstandard, Häufigkeit und Unabhängigkeit der Atteste.'
    },
    {
      id: 'sepa-instant',
      term: 'SEPA Instant (SCT Inst)',
      definition: 'SEPA Instant ist das Echtzeit-Überweisungsverfahren im Euro-Raum. Gutschriften erfolgen in der Regel innerhalb von Sekunden; Limits und Erreichbarkeit sind bankabhängig. Für Treasury-Prozesse ermöglicht SCT Inst die schnelle Konto-Konsolidierung und nahtlose On-/Off-Ramp-Prozesse.'
    },
    {
      id: 'stablecoin',
      term: 'Stablecoin',
      definition: 'Stablecoins sind digitale Token, die den Wert einer Referenzwährung (z. B. EUR oder USD) stabil abbilden sollen. Vorteile für Unternehmen sind 24/7-Verfügbarkeit, schnelle Finalität und die Möglichkeit, Prozesse technisch zu programmieren (z. B. Freigaben, Escrow, Micro-Settlement). Die Qualität hängt vom Emittenten, der Reserven-/Besicherungsstruktur, der Regulierung und den Risiken des verwendeten Netzwerks ab.'
    },
    {
      id: 'swift',
      term: 'SWIFT',
      definition: 'SWIFT ist ein globales Netzwerk und Standard für den gesicherten Nachrichtenaustausch zwischen Finanzinstituten; es bewegt selbst kein Geld, sondern übermittelt standardisierte Zahlungs- und Statusnachrichten. Mit GPI hat SWIFT die Nachverfolgbarkeit und Transparenz von Cross-Border-Zahlungen verbessert, auch wenn Zwischenbanken weiterhin beteiligt sind.'
    },
    {
      id: 't-plus-0',
      term: 'T+0 / T+1 / T+2',
      definition: 'Diese Kürzel beschreiben die Wertstellung relativ zum Transaktionstag T. T+0 bedeutet taggleiche Finalität und Liquiditätswirksamkeit, T+1 oder T+2 entsprechend am Folge- oder übernächsten Geschäftstag. Für CFOs sind diese Angaben entscheidend, um Cashflow, Skonto-Fristen und Risiko-/Prozessplanung realistisch zu steuern.'
    },
    {
      id: 'travel-rule',
      term: 'Travel Rule',
      definition: 'Die Travel Rule verpflichtet Dienstleister (VASPs), Absender- und Empfängerdaten bei Transfers mitzuschicken und zu prüfen. In der EU ist sie mit dem Transfer-of-Funds-Rahmenwerk verzahnt. Unternehmen sollten mit ihren Anbietern klären, welche Daten wann benötigt werden und wie sie sicher übermittelt werden.'
    },
    {
      id: 'wallet',
      term: 'Wallet',
      definition: 'Eine Wallet ist Software oder Hardware, die die privaten Schlüssel verwaltet, mit denen Transaktionen auf einer Blockchain signiert werden; die Tokens selbst bleiben stets on-chain, die Wallet kontrolliert nur den Zugriff. Man unterscheidet Self-Custody (Unternehmen verwahrt die Schlüssel selbst) und Custodial-Lösungen (ein regulierter Dienstleister verwahrt die Schlüssel im Auftrag). Zudem gibt es Hot-Wallets (online, bequem, schneller Einsatz) und Cold-Wallets (offline/HSM/Hardware, höheres Sicherheitsniveau); in der Praxis wird häufig ein gestuftes Modell genutzt. Für CFOs wichtig sind klare Rollen und Freigaben (Vier-Augen-Prinzip), Recovery-Konzepte (Seed/Key-Sharding), Adress-Whitelists und eine saubere Protokollierung.'
    }
  ];

  // Automatically sort entries alphabetically using German locale (case-insensitive)
  const glossaryTermsSorted = [...glossaryTerms].sort((a, b) => 
    a.term.localeCompare(b.term, "de", { sensitivity: "base" })
  );

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            Glossar
          </h1>
          <p className="text-lg text-neutral-600">
            Wichtige Fachbegriffe rund um digitales Geld, grenzüberschreitende Zahlungen und Blockchain im B2B-Kontext – kurz und präzise erklärt.
          </p>
        </div>

        {/* Quick navigation */}
        <nav className="mb-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <h2 className="text-sm font-semibold text-neutral-900 mb-3">Schnellnavigation</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {glossaryTermsSorted.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
              >
                {item.term}
              </a>
            ))}
          </div>
        </nav>

        <div className="space-y-8">
          {glossaryTermsSorted.map((item) => (
            <div key={item.id} id={item.id} className="scroll-mt-20">
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 hover:border-primary-300 transition-colors">
                <h2 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.term}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            Weitere Informationen gewünscht?
          </h2>
          <p className="text-neutral-700 mb-6">
            Vertiefen Sie Ihr Wissen in unseren ausführlichen Fachartikeln zu Stablecoins, Regulierung und Integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/wissen"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
            >
              Zum Wissenshub
            </Link>
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-neutral-50 transition-colors border border-primary-200"
            >
              Anwendungsfälle erkunden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WissenGlossar;