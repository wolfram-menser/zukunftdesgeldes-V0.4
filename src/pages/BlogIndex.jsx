import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("de-DE", {
      day: "2-digit", month: "long", year: "numeric"
    });
  } catch {
    return iso;
  }
}

function LoadingCard() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* Bild-Platzhalter (16:9 mit reserved space) */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <div className="absolute inset-0 skel" />
      </div>
      {/* Text-Zeilen */}
      <div className="p-5 space-y-3">
        <div className="h-3 skel rounded" style={{ width: "40%" }} />
        <div className="h-3 skel rounded" style={{ width: "60%" }} />
        <div className="h-5 skel rounded mt-4" style={{ width: "90%" }} />
        <div className="h-5 skel rounded" style={{ width: "85%" }} />
        <div className="h-3 skel rounded mt-3" style={{ width: "100%" }} />
        <div className="h-3 skel rounded" style={{ width: "95%" }} />
        <div className="h-3 skel rounded" style={{ width: "70%" }} />
      </div>
    </div>
  );
}

export default function BlogIndex() {
  const [posts, setPosts] = useState(null); // null = lädt, [] = leer
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/content/posts/index.json", { cache: "no-store" })
      .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(data => {
        const list = Array.isArray(data) ? data : data.posts || [];
        const visible = list.filter(p => !p.draft);
        visible.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
        setPosts(visible);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="site-shell py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
          Blog
        </h1>
        <p className="text-lg text-neutral-600">
          Aktuelle Insights zu Stablecoins, Regulierung und digitalem Geld im B2B-Kontext.
        </p>
      </div>

      {/* Grid mit Mindesthöhe (verhindert Footer-Sprung) */}
      <div className="min-h-[60vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ERROR STATE */}
        {error && (
          <div className="col-span-full text-center py-12">
            <p className="text-neutral-600">Fehler beim Laden: {error}</p>
          </div>
        )}

        {/* LOADING STATE: 3 Skeleton-Karten */}
        {posts === null && !error && (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        )}

        {/* EMPTY STATE */}
        {Array.isArray(posts) && posts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-neutral-600">Hier erscheinen zeitnah kuratierte Updates und vertiefende Artikel.</p>
          </div>
        )}

        {/* LOADED STATE: Echte Karten */}
        {Array.isArray(posts) && posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="block no-underline text-current rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 overflow-hidden"
          >
            {/* Hero Image (16:9 aspect ratio mit reserved space) */}
            {p.hero_image_url ? (
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <img 
                  src={p.hero_image_url} 
                  alt={p.hero_image_alt || p.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div 
                className="relative w-full" 
                style={{ 
                  paddingTop: "56.25%"
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, #f5f7fb, #e9eef7)" }}
                />
              </div>
            )}

            {/* Card Content */}
            <div className="p-5">
              <div className="text-sm text-neutral-600 mb-2">
                {formatDate(p.date)}
              </div>

              {Array.isArray(p.tags) && p.tags.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {p.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary-50 text-primary-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h2 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                {p.title}
              </h2>

              {p.excerpt && (
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
