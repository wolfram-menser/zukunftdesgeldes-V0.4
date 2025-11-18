import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => { document.title = "Seite nicht gefunden | Die Zukunft des Geldes"; }, []);
  return (
    <main className="container mx-auto max-w-3xl px-4 py-16 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold">Seite nicht gefunden (404)</h1>
      <p className="mt-3 text-gray-700">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
      <a href="/" className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Zur Startseite</a>
    </main>
  );
}
