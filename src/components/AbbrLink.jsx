import React from "react";
import { Link } from "react-router-dom";

export default function AbbrLink({ term, title, href, className }) {
  return (
    <abbr title={title} className="no-underline cursor-help">
      <Link to={href} className={className || "text-primary-600 hover:text-primary-700 hover:underline"}>
        {term}
      </Link>
    </abbr>
  );
}
