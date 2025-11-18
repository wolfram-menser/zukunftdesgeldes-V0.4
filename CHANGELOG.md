# CHANGELOG – Zukunft des Geldes

---

## V0.3 – 'Neuigkeiten' → 'Blog' (Collection + Templates) (2025-01-09)

### ✅ Änderungen:

**1) Umbenennung + Redirect:**
- ✅ Seite `Neuigkeiten.jsx` → HARD DELETED
- ✅ Seite `Blog.jsx` aktiviert
- ✅ Route `/neuigkeiten` → `/blog` (301 Redirect via vercel.json)
- ✅ Navigation: "Neuigkeiten" → "Blog" (de + en i18n)
- ✅ Interne Links aktualisiert
- ✅ Sitemap: `/neuigkeiten` entfernt, `/blog` hinzugefügt

**2) Blog-Architektur (Collection):**
- ✅ Collection: `/public/content/posts/`
  - `index.json` (Post-Metadaten)
  - `{slug}.json` (Vollständiger Post-Content)
- ✅ Schema:
  - title, slug, date, author_name, tags, excerpt
  - hero_image_url, hero_image_alt
  - content_markdown (Markdown-Rendering via react-markdown)
  - source_url (optionaler Quelle-Block)
  - draft (boolean)
  - seo.meta_title, seo.meta_description, seo.og_image_url

**3) Index-Seite `/blog`:**
- ✅ Listenansicht: Nur `draft=false`, sortiert nach `date DESC`
- ✅ Klickbare Karten: Grid 1/2/3 Spalten (mobil/tablet/desktop)
- ✅ Karteninhalt: Hero-Image, Datum, Tags, Titel, Excerpt, Autor
- ✅ Pagination: 10 Posts/Seite (Prev/Next Buttons)
- ✅ Hover-Lift + Fokus-Ring

**4) Detail-Template `/blog/:slug`:**
- ✅ Header: Titel, Datum, Autor, Lesezeit
- ✅ Content: Markdown-Rendering (h2/h3/Listen/Tabellen)
- ✅ Quelle-Block: Nur wenn `source_url` gesetzt (klickbar, target=_blank)
- ✅ Prev/Next Navigation (chronologisch)
- ✅ Breadcrumb: Start → Blog → {Titel}
- ✅ JSON-LD: BlogPosting Schema

**5) SEO:**
- ✅ Canonical URLs
- ✅ Meta Title/Description aus `seo.*` + Fallbacks
- ✅ Open Graph Tags
- ✅ JSON-LD BlogPosting

**6) Demo-Posts:**
- ✅ "MiCAR in Kraft: Was sich für Stablecoin-Nutzer ändert" (2025-01-09)
- ✅ "Stablecoin-Zahlungen: Benchmark Deutschland → Indien" (2025-01-08)

**7) Dependencies:**
- ✅ `react-markdown` ^9.0.1 hinzugefügt

**8) Redirects:**
- ✅ `/neuigkeiten` → `/blog` (301, permanent)
- ✅ `/neuigkeiten/:path*` → `/blog` (301, catch-all)

**9) Snapshot:**
- ✅ Checkpoint: `V0.3-pre-blog-swap`

### 🎯 Akzeptanzkriterien erfüllt:
- ✅ Navigation: Nur "Blog" (kein "Neuigkeiten")
- ✅ `/neuigkeiten` → `/blog` (301 Redirect)
- ✅ Sitemap: Kein `/neuigkeiten` mehr
- ✅ Blog-Collection mit vollständigem Schema
- ✅ Index-Seite mit klickbaren Karten (Grid 1/2/3)
- ✅ Detail-Template mit Quelle-Block
- ✅ Prev/Next Navigation
- ✅ JSON-LD + Open Graph
- ✅ 2 Demo-Posts mit vollständigem Content
- ✅ Hard Delete: `Neuigkeiten.jsx` physisch entfernt
