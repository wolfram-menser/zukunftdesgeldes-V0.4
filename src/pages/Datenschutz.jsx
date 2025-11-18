import React from 'react';

function Datenschutz() {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-600 leading-relaxed mb-8">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">1. Verantwortlicher</h2>
          <div className="bg-neutral-50 rounded-lg p-6 mb-8">
            <p className="text-neutral-700">
              Wolfram Menser<br />
              c/o flexdienst - #11862<br />
              Kurt-Schumacher-Straße 76<br />
              67663 Kaiserslautern<br />
              Deutschland
            </p>
            <p className="text-neutral-700 mt-4">
              E-Mail: <a href="mailto:wolfram.menser@zukunftdesgeldes.de" className="text-primary-600 hover:underline">wolfram.menser@zukunftdesgeldes.de</a><br />
              Telefon: <a href="tel:+491627105915" className="text-primary-600 hover:underline">+49 162 7105915</a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" id="hosting">2. Hosting & Server-Logs</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Beim Aufruf der Website werden technisch bedingt Server-Logdaten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit der Anfrage, abgerufene Datei/URL, Referrer, verwendeter Browser und Betriebssystem). Die Verarbeitung erfolgt zur Gewährleistung von Stabilität und Sicherheit der Website.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Speicherdauer:</strong> Logdaten werden regelmäßig kurzzeitig gespeichert und anschließend gelöscht, sofern keine sicherheitsrelevante Auswertung erforderlich ist.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" id="kontaktformular">3. Kontaktformular</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und, soweit erforderlich, Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung eingehender Anfragen).
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Speicherdauer:</strong> Anfragen werden nach abschließender Bearbeitung gelöscht, spätestens jedoch nach 6 Monaten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" id="newsletter">4. Newsletter</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Sie können Ihre E-Mail-Adresse (und optional Ihren Namen) hinterlassen, um über Neuigkeiten informiert zu werden. Der Versand startet erst nach technischer Anbindung eines Versanddienstleisters (Double-Opt-In). Bis dahin werden die Daten ausschließlich sicher gespeichert und nicht an Dritte weitergegeben.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-2">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            <strong>Speicherdauer:</strong> bis zum Widerruf bzw. bis zum Start des Newsletter-Versands; danach entsprechend der dortigen Informationen.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" id="empfaenger">5. Empfänger & Auftragsverarbeitung</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Zur Bereitstellung der Website und zur Kommunikation können wir Dienstleister (z. B. Hosting, E-Mail) einsetzen. Mit diesen werden, soweit gesetzlich erforderlich, Auftragsverarbeitungsverträge geschlossen.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" id="rechte">6. Ihre Rechte</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Sie haben ferner das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" id="cookies">7. Cookies & Tracking</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Derzeit setzen wir keine Tracking- oder Marketing-Cookies ein. Ein Cookie-Banner ist daher nicht erforderlich. Sollten künftig Analyse- oder Marketing-Dienste aktiviert werden, informieren wir an dieser Stelle und holen ggf. Ihre Einwilligung ein.
          </p>

          <p className="text-sm text-neutral-500 mt-8">
            Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Datenschutz;
