import React from "react";
import { Link } from "react-router-dom";

export default function AsideLink({
  text,
  link,
  icon,
  action,
}: {
  text: string;
  link: string;
  icon: string;
  action: string;
}): React.ReactElement {
  return (
    <li
      key={text}
      className={`${action === link ? "bg-primary" : ""} btn btn-outline-light mb-3 w-100 rounded-pill p-0`}
    >
      <Link to={`/settings/${link}`} className={`nav-link p-2 link-${action === link ? "light" : "secondary"}`}>
        <i className={`bi bi-${icon} fs-4`}></i> {text}
      </Link>
    </li>
  );
}
