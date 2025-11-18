import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Vielen Dank für Ihre Nachricht!
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Ich melde mich so schnell wie möglich bei Ihnen zurück – in der Regel innerhalb von 24-48 Stunden.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full border bg-white p-3">
              <Mail className="h-6 w-6 text-neutral-700" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-6">
            Kontakt
          </h1>
          <p className="text-lg leading-8 text-neutral-600">
            Haben Sie Fragen zu digitalen Zahlungslösungen, ERP-Integration oder konkreten Use Cases? Ich freue mich auf Ihre Nachricht und den persönlichen Austausch.
          </p>
        </div>

        <ContactForm />
        <div className="mt-12 bg-neutral-50 rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Weitere Kontaktmöglichkeiten</h2>
          <p className="text-sm text-neutral-600 mb-4">
            Sie erreichen mich auch direkt per E-Mail oder über meine Social-Media-Kanäle:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kontakt@zukunftdesgeldes.de"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              kontakt@zukunftdesgeldes.de
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href="https://www.linkedin.com/in/wolfram-menser/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href="https://github.com/wolfram-menser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
