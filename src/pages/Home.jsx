import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, Clock, Code, ArrowRight, BookOpen, Briefcase, Settings, Mail } from 'lucide-react';

function Home() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Kosten runter",
      description: "Bis zu 80% niedrigere Transaktionskosten gegenüber traditionellen grenzüberschreitenden Zahlungen"
    },
    {
      icon: Clock,
      title: "24/7 Settlement",
      description: "T+0-Abwicklung statt T+2 – Liquidität sofort verfügbar, Gegenparteirisiko minimiert"
    },
    {
      icon: Code,
      title: "Programmierung",
      description: "Automatisierte Zahlungsströme in Datenräumen und Manufacturing-X-Szenarien"
    }
  ];

  const teasers = [
    {
      icon: BookOpen,
      title: "Wissen",
      description: "Kompakte Briefings zu Stablecoins, Digitalem Euro, Bitcoin und Regulierung – für Entscheider aufbereitet",
      link: "/wissen",
      cta: "Zum Wissenshub"
    },
    {
      icon: Briefcase,
      title: "Use Cases",
      description: "Konkrete Anwendungsfälle vom POS bis Treasury – wo digitales Geld heute schon Mehrwert stiftet",
      link: "/use-cases",
      cta: "Anwendungsfälle entdecken"
    },
    {
      icon: Settings,
      title: "Integration",
      description: "ERP-Prozesssicht: Buchung, Steuerlogik, Compliance und Reporting – API-first gedacht",
      link: "/integration",
      cta: "Integration verstehen"
    },
    {
      icon: Mail,
      title: "Newsletter",
      description: "Monatliche Updates zu Regulierung, Technologie und Praxisbeispielen – direkt in Ihr Postfach",
      link: "/newsletter",
      cta: "Jetzt registrieren"
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 lg:py-28 bg-neutral-50">
        {/* Light Industrial Background Image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Digitales Geld – bereit für den Produktivbetrieb
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Kosten senken, Prozesse automatisieren, Risiken managen. Der Wissenshub für CFO, Leiter Finanzen und ERP-Verantwortliche im Mittelstand.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Für wen ist das?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Diese Plattform richtet sich an <strong>CFO</strong>, <strong>Leiter Finanzen</strong>, <strong>Treasury-Verantwortliche</strong> und <strong>IT/ERP-Leitung</strong> im <strong>Mittelstand</strong>, die fundierte Informationen zu digitalem Geld suchen – ohne Hype, dafür mit klarem Fokus auf Nutzen, Compliance und Integration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Kernrubriken
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Entdecken Sie praxisnahe Informationen zu digitalem Geld im B2B-Kontext
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teasers.map((teaser, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <teaser.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-neutral-900">{teaser.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{teaser.description}</p>
                <Link
                  to={teaser.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {teaser.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bleiben Sie informiert
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Registrieren Sie sich für unseren Newsletter und erhalten Sie monatliche Updates zu Regulierung, Technologie und Praxisbeispielen.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/use-cases"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-neutral-50 transition-colors"
            >
              Anwendungsfälle entdecken
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/newsletter"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors border border-primary-500"
            >
              Für Newsletter registrieren
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;