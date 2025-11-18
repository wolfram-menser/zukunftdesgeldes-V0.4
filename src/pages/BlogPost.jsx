import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

function BlogPost() {
  const { slug: rawSlug } = useParams();
  const slug = String(rawSlug || "").trim().toLowerCase();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      setError("");
      setLoading(true);

      // 1) Try direct post file first
      const fileUrl = `/content/posts/${slug}.json`;
      try {
        const r = await fetch(fileUrl, { cache: "no-store" });
        if (r.ok) {
          const data = await r.json();
          if (!cancelled) {
            setPost(data);
            setLoading(false);
          }
          return;
        }
      } catch (e) {
        // Ignore, try fallback
      }

      // 2) Fallback: Search in index.json
      try {
        const r2 = await fetch(`/content/posts/index.json`, { cache: "no-store" });
        if (!r2.ok) throw new Error("index.json not reachable");
        const idx = await r2.json();
        const list = Array.isArray(idx) ? idx : idx.posts || [];
        const match = list.find(p => (p.slug || "").toLowerCase() === slug);
        if (match && !cancelled) {
          setPost(match);
          setAllPosts(list.filter(p => !p.draft).sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))));
          setLoading(false);
          return;
        }
      } catch (e) {
        // Ignore
      }

      if (!cancelled) {
        setError("not-found");
        setLoading(false);
      }
    }

    loadPost();
    return () => { cancelled = true; };
  }, [slug]);

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const estimateReadingTime = (content) => {
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} Min. Lesezeit`;
  };

  // Find prev/next posts
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (loading) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-neutral-600">Lädt...</p>
        </div>
      </div>
    );
  }

  if (error === "not-found" || !post) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Beitrag nicht gefunden</h1>
          <p className="text-neutral-600 mb-6">Der angeforderte Beitrag existiert nicht oder wurde verschoben.</p>
          <Link to="/blog" className="text-primary-600 hover:underline">
            ← Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  const {
    title = "",
    date = "",
    author_name = "",
    tags = [],
    hero_image_url = "",
    hero_image_alt = "",
    content_markdown = "",
    source_url = ""
  } = post;

  return (
    <div className="bg-white py-20">
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-neutral-500">
          <Link to="/" className="hover:text-primary-600">Start</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-900">{title}</span>
        </nav>

        {/* Hero Image */}
        {hero_image_url && (
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src={hero_image_url}
              alt={hero_image_alt || title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </div>

            {author_name && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{author_name}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{estimateReadingTime(content_markdown)}</span>
            </div>
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content with Markdown Rendering */}
        <div className="article-content prose prose-neutral max-w-none mb-12">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }]
            ]}
            components={{
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6" {...props} />,
              p: ({node, ...props}) => <p className="text-neutral-700 leading-relaxed mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
              table: ({node, ...props}) => (
                <div className="table-wrap">
                  <table {...props} />
                </div>
              ),
            }}
          >
            {content_markdown}
          </ReactMarkdown>
        </div>

        {/* Source Block */}
        {source_url && (
          <div className="bg-neutral-50 rounded-lg p-6 mb-12">
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">Quelle:</h3>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {source_url}
            </a>
          </div>
        )}

        {/* Prev/Next Navigation */}
        {(prevPost || nextPost) && (
          <nav className="border-t border-neutral-200 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-neutral-50 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                      Vorheriger Beitrag
                    </p>
                    <p className="text-sm font-semibold text-neutral-900">{prevPost.title}</p>
                  </div>
                </Link>
              )}

              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-neutral-50 transition-colors md:ml-auto md:text-right"
                >
                  <div className="md:order-2">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                      Nächster Beitrag
                    </p>
                    <p className="text-sm font-semibold text-neutral-900">{nextPost.title}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5 md:order-1" />
                </Link>
              )}
            </div>
          </nav>
        )}

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück zum Blog
          </Link>
        </div>
      </article>

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "datePublished": date,
          "dateModified": date,
          "author": {
            "@type": "Person",
            "name": author_name || "Wolfram Menser"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zukunft des Geldes",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.zukunftdesgeldes.de/logo.png"
            }
          },
          "image": hero_image_url || "https://www.zukunftdesgeldes.de/logo.png",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.zukunftdesgeldes.de/blog/${slug}`
          }
        })}
      </script>
    </div>
  );
}

export default BlogPost;
