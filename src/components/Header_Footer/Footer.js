import React from "react";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <footer className="bck_secondaryDark">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">DMI Productions</div>
        <div className="footer_copyright">dmi productions &copy; 2018</div>
      </Fade>
    </footer>
  );
};

export default Footer;
