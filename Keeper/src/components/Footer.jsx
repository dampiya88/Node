import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p>
        This is the footer copyright <span>&copy;</span> {year}{" "}
      </p>
    </footer>
  );
};

export default Footer;
