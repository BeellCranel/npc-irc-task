import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul>
          <li>
            <a
              href="https://my-website.nomoredomains.xyz/"
              target="_blank"
              rel="noreferer"
            >
              Портфолио
            </a>
          </li>
          <li>
            <a
              href="https://github.com/BeellCranel"
              target="_blank"
              rel="noreferer"
            >
              github
            </a>
          </li>
          <li>
            <a href="https://vk.com/dergach_rs" target="_blank" rel="noreferer">
              vk
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__title">&copy; 2022. Roman Dergach</p>
    </div>
  );
};

export default Footer;
