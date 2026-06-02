import "../style/footer.css";
import logo from "../asset/arounmanufacturing.png";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-about">
          <img
            src={logo}
            alt="Aroun Industries"
            className="footer-logo"
          />

          <p>
            Trusted manufacturer of medical disposables and
            pharmaceutical products across India.
          </p>

          <div className="social-icons">
            <a href="/">f</a>
            <a href="/">in</a>
          </div>
        </div>

        {/* Products */}
        <div className="footer-links">
          <h4>PRODUCTS</h4>

          <ul>
            <li>Surgical Masks</li>
            <li>N95 Respirators</li>
            <li>Doctor Gowns</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h4>COMPANY</h4>

          <ul>
            <li>About Us</li>
            <li>Manufacturing</li>
            <li>Compliance</li>
          </ul>
        </div>

        {/* Contact Card */}
        <div className="footer-contact">
          <span>Email:</span>

          <a href="mailto:arounindustries@gmail.com">
            arounindustries@gmail.com
          </a>

          <span>Contact:</span>

          <p>+91 843 843 4000</p>
          <p>+91 843 843 2000</p>
          <p>+91 843 843 5000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Aroun Industries. All rights reserved.
        </p>

        <div>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;