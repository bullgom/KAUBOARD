import React from "react";
import "./IconLink.scss";

function IconLink ({title, href, src, alt, width }) {

  return (
    <a href={href}>
      <li className="IconLink__content">
        <img src={src} alt={alt} width={width} />
        <div>{title}</div>
      </li>
    </a>
  )
}

IconLink.defaultProps = {
  href: "",
  src: "",
  alt: "",
  width: "50"
}

export default IconLink;
