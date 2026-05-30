import '../style/hero.css';
import mask from "../asset/mask.png";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="tag">
          Trusted Pharma Manufacturing Partner
        </div>

        <h1>
          Partner in Pharma &amp; Surgical Disposables
        </h1>

        <p>
          Delivering high-quality pharmaceutical and surgical disposable
          products with trusted manufacturing standards and industry expertise.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">
            Explore Our Products
          </button>

          <div className="divider"></div>

          <div className="customers">
            <div className="avatars">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <small>500+ Happy Clients</small>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={mask}
          alt="Pharma Manufacturing"
        />

        <div className="floating-card">
          <div className="hero-icon">MF</div>

          <div>
            <h4>99% Filtration</h4>
            <p>ISO 13485 CERTIFIED</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
