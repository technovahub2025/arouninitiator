import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../style/hero.css";
import mask from "../asset/mask.png";
import faceMask from "../asset/facemask.png";
import maskWelding from "../asset/maskwelding.png";

const slides = [
  {
    eyebrow: "YOUR TRUSTED PARTNER IN",
    title: "PHARMA & SURGICAL DISPOSABLES",
    subtitle: "Advanced Technology. Superior Quality. Complete Protection.",
    description:
      "Manufacturing dependable medical consumables and surgical protection with disciplined quality control and scalable production.",
    image: mask,
    stat: "BULK ORDERS",
    note: "High-volume, clean, and consistent production.",
  },
  {
    eyebrow: "PRECISE PROTECTION FOR",
    title: "MODERN HEALTHCARE WORKFLOWS",
    subtitle: "Comfort-first design with dependable filtration and fit.",
    description:
      "Built for hospitals, distributors, clinics, and retail supply partners who need reliable products that perform day after day.",
    image: faceMask,
    stat: "PROTECTION FOCUSED",
    note: "Balanced comfort and protection for everyday use.",
  },
  {
    eyebrow: "ENGINEERED FOR",
    title: "INDUSTRIAL SAFETY & SPECIALTY USE",
    subtitle: "Durable, controlled, and ready for demanding environments.",
    description:
      "Designed for workflow safety, specialized handling, and protective manufacturing that keeps pace with industrial requirements.",
    image: maskWelding,
    stat: "INDUSTRIAL GRADE",
    note: "Robust protection for specialized handling and work.",
  },
];

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero hero-cover" id="home">
      <div className="hero-cover-shell">
        <button
          type="button"
          className="hero-nav-btn hero-nav-prev"
          aria-label="Previous hero slide"
          onClick={() =>
            setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
          }
        >
          <FiChevronLeft />
        </button>

        <div className="hero-viewport">
          <div
            className="hero-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((item) => (
              <article
                className="hero-slide hero-cover-slide"
                key={item.title}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="hero-cover-overlay" />

                <div className="hero-cover-content">
                  <div className="hero-brandline">Aroun Manufacturing Industries</div>

                  <div className="tag animate-pop-in">{item.eyebrow}</div>

                  <h1 className="animate-reveal-up delay-1">{item.title}</h1>

                  <p className="hero-subtitle animate-reveal-up delay-2">
                    {item.subtitle}
                  </p>

                  <p className="hero-description animate-reveal-up delay-3">
                    {item.description}
                  </p>

                  <div className="hero-actions animate-reveal-up delay-4">
                    <button className="primary-btn hover-raise" type="button">
                      Explore Our Products
                    </button>
                  </div>

                  <div className="hero-note animate-pop-in delay-5">{item.note}</div>
                </div>

                <div className="hero-stat">{item.stat}</div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hero-nav-btn hero-nav-next"
          aria-label="Next hero slide"
          onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
        >
          <FiChevronRight />
        </button>

        <div className="carousel-dots" aria-label="Hero carousel navigation">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`carousel-dot ${activeSlide === index ? "active" : ""}`}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={activeSlide === index}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>

        <div className="hero-bottom-panel" aria-hidden="true">
          <div className="hero-bottom-card">
            <strong>Bulk Orders</strong>
            <span>Special discount and dependable scheduling.</span>
          </div>
          <div className="hero-bottom-card">
            <strong>Strict Quality Control</strong>
            <span>Manufactured in a clean and controlled environment.</span>
          </div>
          <div className="hero-bottom-card">
            <strong>Timely Delivery</strong>
            <span>Built to keep production and supply moving.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;