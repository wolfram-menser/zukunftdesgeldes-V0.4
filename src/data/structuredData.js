export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zukunft des Geldes",
  "url": "https://www.zukunftdesgeldes.de",
  "logo": "https://www.zukunftdesgeldes.de/logo.png",
  "sameAs": [
    "https://www.linkedin.com/in/wolfram-menser/",
    "https://github.com/wolfram-menser"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "kontakt@zukunftdesgeldes.de",
    "availableLanguage": ["de", "en"]
  }]
};

export const faqStablecoins = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was sind Euro-Stablecoins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Euro-Stablecoins sind digitale Token auf Blockchain-Basis, die 1:1 an den Euro gekoppelt sind. Sie werden durch Euro-Reserven besichert und ermöglichen schnelle, kostengünstige Zahlungen mit stabilem Wert."
      }
    },
    {
      "@type": "Question",
      "name": "Wie unterscheiden sich Stablecoins von tokenisierten Einlagen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stablecoins werden von privaten Emittenten ausgegeben und durch Reserven besichert. Tokenisierte Einlagen sind digitale Abbildungen von Bankeinlagen, die weiterhin der Einlagensicherung unterliegen und direkt von Banken verwaltet werden."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Vorteile bieten Stablecoins für den Mittelstand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stablecoins ermöglichen T+0-Settlement, reduzieren Transaktionskosten um bis zu 80%, bieten 24/7-Verfügbarkeit und erlauben programmierbare Zahlungsströme für automatisierte Geschäftsprozesse."
      }
    }
  ]
};

export const createArticleSchema = (title, datePublished, dateModified, description, url) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": title,
  "description": description,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Person",
    "name": "Wolfram Menser"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zukunft des Geldes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.zukunftdesgeldes.de/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});
