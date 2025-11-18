import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="site-shell">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Zukunft des Geldes</h3>
              <p className="text-neutral-600 text-sm max-w-md">
                Wissenshub für CFO, Finanzleiter und ERP-Verantwortliche im Mittelstand zu Stablecoins, Digitalem Euro und Bitcoin-Anwendungen.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/wissen" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Wissen</Link></li>
                <li><Link to="/use-cases" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Use Cases</Link></li>
                <li><Link to="/integration" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Integration</Link></li>
                <li><Link to="/newsletter" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link to="/impressum" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Datenschutz</Link></li>
                <li><Link to="/disclaimer" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Disclaimer</Link></li>
                <li><Link to="/kontakt" className="text-neutral-600 hover:text-primary-600 text-sm transition-colors">Kontakt</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-sm">
              {t("footer.copyright")} {currentYear}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/wolfram-menser/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 py-3 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-center text-sm">
              <a 
                href="https://biela.dev?referral=6HCA10IP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-primary-600 transition-colors underline underline-offset-2 !text-sm"
              >
                Diese Webseite wurde mit Hilfe von Biela.dev entwickelt.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
