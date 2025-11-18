import React from "react";

export default function Callout({ variant = "info", title, children }) {
  const styles = {
    info:   "border-blue-200 bg-blue-50 text-blue-900",
    note:   "border-amber-200 bg-amber-50 text-amber-900",
    success:"border-emerald-200 bg-emerald-50 text-emerald-900"
  }[variant] || "border-gray-200 bg-gray-50 text-gray-900";

  const icon = {
    info: "💡",
    note: "📝",
    success: "✅"
  }[variant] || "ℹ️";

  return (
    <div className={`rounded-xl border p-4 md:p-5 ${styles}`}>
      {title && <div className="mb-1 font-semibold">{icon} {title}</div>}
      <div className="prose prose-sm md:prose-base max-w-none">{children}</div>
    </div>
  );
}
