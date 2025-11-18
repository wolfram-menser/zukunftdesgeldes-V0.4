import React, { useEffect } from "react";
import { User } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function UeberMich() {
  useEffect(() => {
    document.title = "Über mich | Die Zukunft des Geldes";
    const meta = document.querySelector('meta[name="description"]');
    const text = "Über Wolfram Menser: ERP-Praxis, Blockchain/Stablecoins im B2B, Brücke zwischen Technik und Entscheider.";
    if (meta) meta.setAttribute("content", text);
    else { const m = document.createElement("meta"); m.name = "description"; m.content = text; document.head.appendChild(m); }
  }, []);

  return (
    <main className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Zentrierter Header mit Icon */}
        <PageHeader
          icon={<User className="h-6 w-6 text-neutral-700" aria-hidden="true" />}
          title="Über mich"
          subtitle="ERP-Praxis, Brücke zwischen Technik und Entscheider – und warum digitales Geld im Mittelstand relevant wird."
        />

        {/* Lead-Absatz: Full-width */}
        <section className="max-w-3xl mx-auto">
          <p className="mt-4 text-base md:text-base leading-7 text-neutral-800">
            Mein Name ist Wolfram Menser, Strategischer Account Manager bei Proalpha und seit über 25&nbsp;Jahren im Mittelstand unterwegs.
            In dieser Zeit habe ich ERP-Einführungen und globale Rollouts aus verschiedensten Perspektiven begleitet – u.&nbsp;a. als Geschäftsführer in den USA,
            beim Aufbau des China-Standorts, als Leiter International Business Development und als Regionalleiter in Deutschland.
            Diese Erfahrungen prägen meinen Blick auf die sehr konkreten Anforderungen mittelständischer Unternehmen: belastbare Prozesse,
            Compliance, Kostenkontrolle – und Lösungen, die im Tagesgeschäft wirklich tragen.
          </p>
        </section>

        {/* 2-Spalten-Block: Bild links, Text rechts */}
        <section className="mt-10 grid gap-8 md:grid-cols-[360px_1fr] items-start">
          {/* Linke Spalte: Portrait */}
          <div className="w-full">
            <img
              src="https://content-studio.biela.dev/content-studio/690a7d1898a281374413163e/1762941061022-690a7d1898a281374413163e/1763046167099.webp"
              alt="Porträt von Wolfram Menser"
              width="797"
              height="1200"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl border object-cover bg-neutral-50"
            />
          </div>

          {/* Rechte Spalte: zwei Abschnitte übereinander */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Warum diese Seite?</h2>
              <p className="mt-4 text-base leading-7 text-neutral-800">
                Im Jahr 2021 bin ich tief in die Themen Blockchain, digitale Währungen und Bitcoin eingestiegen und beschäftige mich seither täglich damit.
                Aus dieser Lernkurve ist die Überzeugung gewachsen, dass <strong>programmierbares, digitales Geld</strong> (insbesondere Euro-Stablecoins und
                perspektivisch der digitale Euro) für den industriellen Mittelstand einen spürbaren Nutzen bringen kann: geringere Transaktionskosten,
                schnellere Abwicklung, bessere Automatisierung entlang der Wertschöpfungskette. Gleichzeitig gilt: Bitcoin als Wertspeicher ist
                technologisch und ökonomisch interessant, spielt im deutschsprachigen B2B-Kontext aber vorerst eine untergeordnete Rolle – hier steht klar der <strong>Euro</strong> im Mittelpunkt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Was ich mitbringe</h2>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-base leading-7 text-neutral-800">
                <li><strong>ERP-Praxis aus erster Hand:</strong> Prozess- und Integrationsfragen sind mein Alltag – von Finance &amp; Controlling bis Supply Chain.</li>
                <li><strong>Brücke zwischen IT und Fachbereich:</strong> Ich übersetze Technik in Entscheider-Sprache und denke Anwendungsfälle „vom Ergebnis her".</li>
                <li><strong>Ökosystem-Einblick:</strong> 2023 habe ich <strong>Particula</strong> mitgegründet (Rating für digitale Vermögenswerte; heute als Gesellschafter/Partner aktiv).
                    Außerdem arbeite ich im Forschungsprojekt <strong>Factory-X</strong> mit, u.&nbsp;a. an Anwendungsfällen rund um Datenräume, digitale Zwillinge und Prozess- bzw. Zahlungsautomatisierung.</li>
              </ul>
            </section>
          </div>
        </section>

        {/* Full-width Abschnitte */}
        <section className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Worum es hier geht</h2>
          <p className="mt-4 text-base leading-7 text-neutral-800">
            Diese Seite richtet sich an Führungskräfte im Mittelstand, die verstehen möchten, <strong>was</strong> mit Stablecoins &amp; Co. heute schon möglich ist – und
            <strong> wie</strong> man das solide in ERP-Prozesse integriert. Im <a href="/wissen" className="text-blue-600 underline underline-offset-2">Wissenshub</a> finden Sie Grundlagenartikel,
            in den <a href="/use-cases" className="text-blue-600 underline underline-offset-2">Anwendungsfällen</a> praxisnahe Leitfäden (z. B. grenzüberschreitende Zahlungen), und im Bereich
            <a href="/integration" className="text-blue-600 underline underline-offset-2"> Integration</a> skizzieren wir die Umsetzungsschritte in typischen ERP-Landschaften.
            Ziel ist keine „Krypto-Show", sondern nüchterne Einordnung mit klarem Mehrwert.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            <em>Hinweis:</em> Inhalte auf dieser Seite sind <strong>keine</strong> rechtliche, steuerliche oder finanzielle Beratung.
          </p>
        </section>

        <section className="mt-10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">So können Sie mich erreichen</h2>
          <p className="mt-4 text-base leading-7 text-neutral-800">Wenn Sie Feedback haben, einen Anwendungsfall diskutieren möchten oder eine pragmatische Zweitmeinung suchen:</p>
          <ul className="mt-3 list-disc pl-6 space-y-1.5 text-base leading-7 text-neutral-800">
            <li><strong>Kontakt:</strong> <a href="/kontakt" className="text-blue-600 underline underline-offset-2">/kontakt</a></li>
            <li><strong>Neuigkeiten:</strong> <a href="/newsletter" className="text-blue-600 underline underline-offset-2">/newsletter</a> (für Updates vormerken)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
