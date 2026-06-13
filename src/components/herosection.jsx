import React from "react";
import {
  BadgeCheck,
  ShieldCheck,
  Settings,
  Factory,
  Users,
  Truck,
  ArrowRightCircle,
  CircleCheckBig,
  Cog,
  Cuboid,
} from "lucide-react";
import "../style/hero.css";

import heroImage from "../asset/hero1.png";
import machineImage from "../asset/hero2.png";

const HomeSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="home-page" id="home">
      <section className="hero-shell">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-pat1" aria-hidden="true" />
        <div className="hero-pat2" aria-hidden="true" />

        <div className="hero-content animate-reveal-left">
          <p className="hero-kicker">MANUFACTURER OF</p>
          <h1>PHARMA &amp; SURGICAL DISPOSABLES</h1>
          <p className="hero-copy">
            Delivering premium quality, safe &amp; reliable disposable solutions
            with precision manufacturing you can trust.
          </p>

          <div className="hero-badges">
            <span><BadgeCheck /> Premium Quality</span>
            <span><ShieldCheck /> Safe &amp; Reliable</span>
            <span><BadgeCheck /> Precision Manufacturing</span>
          </div>

          <button type="button" onClick={() => scrollToSection("products")}>
            Explore Our Products <ArrowRightCircle size={18} />
          </button>
        </div>

        <div className="hero-visual animate-float-soft" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
      </section>

      <section className="feature-bar">
        <Feature
          icon={<CircleCheckBig />}
          title="Premium Quality Fabric"
          text="Ensuring Safety, Comfort & Reliability"
        />
        <Feature
          icon={<Cog />}
          title="Advanced Manufacturing"
          text="High Efficiency, High Precision & High Quality Output"
        />
        <Feature
          icon={<ShieldCheck />}
          title="Quality You Can Trust, Safety We Deliver"
          text="Manufactured with Care & Precision"
        />
        <Feature
          icon={<Settings />}
          title="Customisation Will Be Done"
          text="Based on Your Requirements"
        />
        <Feature
          icon={<Cuboid />}
          title="Bulk Orders Special Discount"
          text="Best Pricing for Bulk Requirements"
        />
      </section>

      <section className="about-area">
        <div className="about-text">
          <h3>ABOUT <span>AROUN MANUFACTURING INDUSTRIES</span></h3>
          <p>
            We are a trusted manufacturer of high-quality pharma and surgical
            disposables. With state-of-the-art machines and a skilled team, we
            ensure every product meets the highest standards of safety,
            comfort, and reliability.
          </p>
          <p>
            Our commitment to quality and customer satisfaction makes us a
            preferred partner for businesses across India.
          </p>

          <button type="button" onClick={() => scrollToSection("manufacturing")}>
            Know More About Us <ArrowRightCircle size={17} />
          </button>
        </div>

        <div className="mini-grid">
          <Mini icon={<Settings />} title="High Quality Raw Materials" />
          <Mini icon={<Factory />} title="Advanced Machinery" />
          <Mini icon={<Users />} title="Skilled Workforce" />
          <Mini icon={<Truck />} title="Timely Delivery" />
        </div>

        <div className="machine-box animate-reveal-right">
          <h3>ADVANCED MASK PRODUCTION MACHINES</h3>
          <img src={machineImage} alt="Advanced mask production machine" width="700" />
        </div>
      </section>
    </main>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="feature-item animate-pop-in">
    <div className="feature-icon">{icon}</div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const Mini = ({ icon, title }) => (
  <div className="mini-item animate-pop-in">
    <div className="mini-icon">{icon}</div>
    <h4>{title}</h4>
  </div>
);

export default HomeSection;
