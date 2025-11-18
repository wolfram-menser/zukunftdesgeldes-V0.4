import React from 'react';

function Impressum() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-8">
          Impressum
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-600 leading-relaxed mb-8">
            Angaben gemäß § 5 TMG
          </p>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Dienstanbieter</h2>
            <p className="text-neutral-700">
              Wolfram Menser<br />
              c/o flexdienst - #11862<br />
              Kurt-Schumacher-Straße 76<br />
              67663 Kaiserslautern<br />
              Deutschland
            </p>
          </div>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Kontakt</h2>
            <p className="text-neutral-700">
              E-Mail: <a href="mailto:wolfram.menser@zukunftdesgeldes.de" className="text-primary-600 hover:underline">wolfram.menser@zukunftdesgeldes.de</a><br />
              Telefon: <a href="tel:+491627105915" className="text-primary-600 hover:underline">+49 162 7105915</a>
            </p>
          </div>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Inhaltlich verantwortlich i. S. d. § 18 Abs. 2 MStV</h2>
            <p className="text-neutral-700">
              Wolfram Menser, Anschrift wie oben.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Hinweis zum Charakter dieses Angebots</h2>
            <p className="text-neutral-700 leading-relaxed">
              Diese Website dient der allgemeinen Information. Es werden aktuell keine entgeltlichen Leistungen angeboten. Inhalte stellen keine rechtliche, steuerliche oder finanzielle Beratung dar und sind ausdrücklich keine Anlageempfehlung.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Haftungsausschluss</h2>

          <h3 className="text-lg font-semibold text-neutral-900 mb-2 mt-6">Haftung für Inhalte & Links</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Die Inhalte wurden mit größter Sorgfalt erstellt; für die Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. Externe Links wurden zum Zeitpunkt der Verlinkung geprüft; für deren Inhalte sind ausschließlich die jeweiligen Betreiber verantwortlich.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 mb-2 mt-6">Urheberrecht</h3>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Die durch den Seitenbetreiber erstellten Inhalte auf diesen Seiten unterliegen dem Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung.
          </p>

          <p className="text-sm text-neutral-500 mt-8">
            Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
