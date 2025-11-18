import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nProvider';
import HeadMeta from './components/HeadMeta';
import LangNotice from './components/LangNotice';
import SiteBanner from './components/SiteBanner';
import Glossarize from './components/Glossarize';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wissen from './pages/Wissen';
import WissenStablecoins from './pages/WissenStablecoins';
import WissenTokenisierteEinlagen from './pages/WissenTokenisierteEinlagen';
import WissenDigitalerEuro from './pages/WissenDigitalerEuro';
import WissenBitcoinImB2B from './pages/WissenBitcoinImB2B';
import WissenRegulierung from './pages/WissenRegulierung';
import WissenEuroStablecoins from './pages/WissenEuroStablecoins';
import UseCases from './pages/UseCases';
import Integration from './pages/Integration';
import Newsletter from './pages/Newsletter';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import UeberMich from './pages/UeberMich';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Disclaimer from './pages/Disclaimer';
import WissenGlossar from './pages/WissenGlossar';
import AnwendungenGrenzzahlungenIndien from './pages/AnwendungenGrenzzahlungenIndien';
import NotFound from './pages/NotFound';
// import ThemeSwitcher from './components/ThemeSwitcher'; // Deaktiviert: Harter Switcher in index.html

function App() {
  return (
    <Router>
      <I18nProvider>
        <HeadMeta />
        <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
          <SiteBanner />
          <Header />
          <ScrollToTop>
            <Glossarize>
              <div className="site-shell">
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wissen" element={<Wissen />} />
                    <Route path="/wissen/stablecoins" element={<WissenStablecoins />} />
                    <Route path="/wissen/tokenisierte-einlagen" element={<WissenTokenisierteEinlagen />} />
                    <Route path="/wissen/digitaler-euro" element={<WissenDigitalerEuro />} />
                    <Route path="/wissen/bitcoin-im-b2b" element={<WissenBitcoinImB2B />} />
                    <Route path="/wissen/regulierung" element={<WissenRegulierung />} />
                    <Route path="/wissen/euro-stablecoins" element={<WissenEuroStablecoins />} />
                    <Route path="/wissen/glossar" element={<WissenGlossar />} />
                    <Route path="/use-cases" element={<UseCases />} />
                    <Route path="/integration" element={<Integration />} />
                    <Route path="/newsletter" element={<Newsletter />} />
                    <Route path="/blog" element={<BlogIndex />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/ueber-mich" element={<UeberMich />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/datenschutz" element={<Datenschutz />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/anwendungen/grenzzahlungen-indien" element={<AnwendungenGrenzzahlungenIndien />} />
                    {/* Redirects */}
                    <Route path="/neuigkeiten" element={<Navigate to="/blog" replace />} />
                    <Route path="/neuigkeiten/*" element={<Navigate to="/blog" replace />} />
                    <Route path="/anwendungsfaelle" element={<Navigate to="/use-cases" replace />} />
                    <Route path="/news" element={<Navigate to="/blog" replace />} />
                    <Route path="/about" element={<Navigate to="/ueber-mich" replace />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </Glossarize>
          </ScrollToTop>
          <Footer />
          {/* <ThemeSwitcher /> */}
        </div>
      </I18nProvider>
    </Router>
  );
}

export default App;
