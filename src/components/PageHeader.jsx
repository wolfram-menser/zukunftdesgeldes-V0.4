import React from "react";

export default function PageHeader({ icon, title, subtitle }) {
  return (
    <header className="text-center mb-10">
      <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full border bg-white p-3">
        {icon}
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-3 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </header>
  );
}
