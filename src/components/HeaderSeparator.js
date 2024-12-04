import React from "react";
import "../assets/styles/headerSeparator.css";

const HeaderSeparator = ({ title, breadcrumb }) => {
  return (
    <div className="header-separator">
      <div className="container">
        <h2>{title}</h2>
        <ul className="breadcrumb">
          {breadcrumb.map((crumb, index) => (
            <li key={index}>
              {crumb.link ? (
                <a href={crumb.link}>
                  {crumb.name === "Home" && <i className="fas fa-home"></i>}
                  {crumb.name}
                </a>
              ) : (
                <span>
                  {crumb.name === "Home" && <i className="fas fa-home"></i>}
                  {crumb.name}
                </span>
              )}
              {index < breadcrumb.length - 1 && (
                <span className="breadcrumb-separator">
                  <i className="fas fa-angle-double-right"></i>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderSeparator;
