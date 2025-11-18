import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';
import SettingsMenu from './SettingsMenu';

function Header() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const openMobile = () => setMobileMenuOpen(true);
  const closeMobile = () => setMobileMenuOpen(false);

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // ESC key closes menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobile();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-neutral-900">Zukunft des Geldes</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
              onClick={openMobile}
              aria-label="Menü öffnen"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <Link to="/" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.start")}
            </Link>
            <Link to="/wissen" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.wissen")}
            </Link>
            <Link to="/use-cases" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.usecases")}
            </Link>
            <Link to="/integration" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.integration")}
            </Link>
            <Link to="/blog" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.blog")}
            </Link>
            <Link to="/newsletter" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.newsletter")}
            </Link>
            <Link to="/ueber-mich" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.about")}
            </Link>
            <Link to="/kontakt" className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors">
              {t("nav.contact")}
            </Link>
            <SettingsMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <aside role="dialog" aria-modal="true" className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" onClick={closeMobile} />
          {/* Drawer */}
          <nav className="absolute top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <span className="text-lg font-semibold text-neutral-900">Zukunft des Geldes</span>
              <button 
                aria-label="Menü schließen" 
                onClick={closeMobile}
                className="p-2 -mr-2 rounded-md hover:bg-neutral-100 transition-colors"
              >
                <X className="h-6 w-6 text-neutral-700" />
              </button>
            </div>
            <ul className="p-2">
              <li>
                <Link 
                  to="/" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.start")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/wissen" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.wissen")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/use-cases" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.usecases")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/integration" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.integration")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/newsletter" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.newsletter")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/ueber-mich" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link 
                  to="/kontakt" 
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                  onClick={closeMobile}
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li className="pt-2 border-t border-neutral-200 mt-2">
                <div className="px-3 py-2">
                  <SettingsMenu />
                </div>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
}

export default Header;
