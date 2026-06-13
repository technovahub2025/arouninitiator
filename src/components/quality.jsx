import React from "react";
import {
  ShieldCheck,
  Search,
  BadgeCheck,
  Factory,
  Award,
  Phone,
  Mail,
  Globe,
  CheckCircle,
  ClipboardCheck,
  CircleGauge,
  Shield,
  Truck,
  ThumbsUp,
  Medal,
} from "lucide-react";
import "../style/quality.css";

import about1 from "../asset/about1.png";
import about2 from "../asset/about2.png";
import about3 from "../asset/about3.png";
import about4 from "../asset/about4.png";
import cert1 from "../asset/cert1.png";
import cert2 from "../asset/cert2.png";
import cert3 from "../asset/cert3.png";
import cert4 from "../asset/cert4.png";
import cert5 from "../asset/cert5.png";
import factory1 from "../asset/factory1.png";
import factory2 from "../asset/factory2.png";
import factory3 from "../asset/factory3.png";
import factory4 from "../asset/factrory4.png";
import q1 from "../asset/q1.png";
import q2 from "../asset/q2.png";
import heroVisual from "../asset/head.png";

const QualityAssurance = () => {
  const heroCards = [
    { image: about1, title: "ISO", text: "9001:2015" },
    { image: about2, title: "ISO", text: "13485:2016" },
    { image: about3, title: "CE", text: "Certified" },
    { image: about4, title: "GMP", text: "Compliant" },
  ];

  const commitment = [
    [ShieldCheck, "Premium Raw Materials"],
    [Factory, "Advanced Technology"],
    [Search, "100% Inspection"],
    [BadgeCheck, "Strict Hygiene Standards"],
    [Shield, "Skilled Workforce"],
    [ThumbsUp, "Customer Satisfaction"],
  ];

  const processSteps = [
    {
      no: "1",
      title: "RAW MATERIAL\nINSPECTION",
      points: ["Melt Blown Fabric Testing", "Non-Woven Fabric Inspection", "Supplier Verification"],
    },
    {
      no: "2",
      title: "PRODUCTION\nMONITORING",
      points: ["Machine Calibration", "Process Monitoring", "Quality Checkpoints"],
    },
    {
      no: "3",
      title: "PRODUCT\nTESTING",
      points: ["BFE Testing", "Filtration Efficiency", "Breathability Testing"],
    },
    {
      no: "4",
      title: "FINAL\nINSPECTION",
      points: ["Dimension Check", "Packaging Verification", "Label Verification"],
    },
    {
      no: "5",
      title: "DISPATCH\nAPPROVAL",
      points: ["Batch Approval", "Quality Seal", "Safe Packaging"],
    },
  ];

  const certifications = [
    { image: cert1, title: "ISO 9001:2015" },
    { image: cert2, title: "ISO 13485:2016" },
    { image: cert3, title: "CE CERTIFICATION" },
    { image: cert4, title: "GMP COMPLIANCE" },
    { image: cert5, title: "MSME REGISTERED" },
    { image: cert5, title: "UDYAM REGISTERED" },
  ];

  const stats = [
    { icon: CircleGauge, value: "1,50,000+", label: "3 Ply Masks / Day" },
    { icon: ShieldCheck, value: "99.8%", label: "Quality Pass Rate" },
    { icon: BadgeCheck, value: "98%", label: "Customer Satisfaction" },
    { icon: Truck, value: "5000+", label: "Bulk Orders Delivered" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  const factoryCards = [
    { image: factory1, label: "Manufacturing Unit" },
    { image: factory2, label: "Production Line" },
    { image: factory3, label: "Packaging Section" },
    { image: factory4, label: "Finished Goods Warehouse" },
  ];

  const testingPoints = [
    "Bacterial Filtration Efficiency (BFE)",
    "Particle Filtration Efficiency (PFE)",
    "Breathability Test",
    "Fluid Resistance Test",
    "Ear Loop Strength Test",
    "Nose Clip Strength Test",
  ];

  return (
    <div className="qa-page animate-reveal-up">
      <section className="qa-hero">
        <div className="qa-hero-copy animate-reveal-left">
          <p className="qa-hero-kicker">Quality Assurance &amp; Certifications</p>
          <h1>
            QUALITY ASSURANCE
            <br />
            &amp; CERTIFICATIONS
          </h1>
          <p className="qa-hero-text">
            Committed to Excellence, Safety &amp; Compliance
            <br />
            in Every Product We Manufacture.
          </p>

          <div className="qa-hero-cards">
            {heroCards.map((card, index) => (
              <article className={`qa-cert-card animate-pop-in delay-${Math.min(index + 1, 4)}`} key={card.title + card.text}>
                <img src={card.image} alt={card.title} />
                <div>
                  <h4>
                    {card.title}
                    <br />
                    <small>{card.text}</small>
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>

      
        <div className="qa-hero-visual animate-float-soft">
          <img src={heroVisual} alt="Quality assurance visual" />
        </div>
        
      </section>

      <main className="qa-main">
        <section className="qa-section">
          <h2>1. OUR QUALITY COMMITMENT</h2>
          <h4>Why Choose Aroun Manufacturing Industries?</h4>

          <div className="qa-commitment-grid">
            {commitment.map(([Icon, label]) => (
              <div key={label} className="qa-commitment-item">
                <Icon />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="qa-section qa-box">
          <h2>2. QUALITY CONTROL PROCESS</h2>

          <div className="qa-process">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.no}>
                <article className="qa-process-card">
                  <span>{step.no}</span>
                  <ClipboardCheck className="qa-process-icon" />
                  <h3>
                    {step.title.split("\n").map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h3>
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
                {index < processSteps.length - 1 ? <b className="qa-arrow">➜</b> : null}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="qa-section">
          <h2>3. CERTIFICATIONS</h2>

          <div className="qa-cert-grid">
            {certifications.map((cert) => (
              <article className="qa-cert-box" key={cert.title}>
                <img src={cert.image} alt={cert.title} />
                <p>{cert.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qa-lab-section">
          <div className="qa-lab-images">
            <img src={q1} alt="Quality testing laboratory one" />
            <img src={q2} alt="Quality testing laboratory two" />
          </div>

          <div className="qa-lab-content">
            <h2>4. QUALITY TESTING LABORATORY</h2>
            <h4>Our Testing Parameters</h4>
            {testingPoints.map((point) => (
              <p key={point}>
                <CheckCircle />
                {point}
              </p>
            ))}
          </div>
        </section>

        <section className="qa-section">
          <h2>5. PRODUCTION QUALITY STATISTICS</h2>

          <div className="qa-stats-grid">
            {stats.map(({ icon: Icon, value, label }) => (
              <article className="qa-stat-card" key={label}>
                <Icon />
                <h3>{value}</h3>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qa-section">
          <h2>6. FACTORY &amp; PRODUCTION</h2>

          <div className="qa-factory-grid">
            {factoryCards.map((card) => (
              <article className="qa-factory-card" key={card.label}>
                <img src={card.image} alt={card.label} />
                <p>{card.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="qa-promise">
          <div className="qa-promise-icon">
            <ShieldCheck />
          </div>
          <div className="qa-promise-copy">
            <h2>7. OUR QUALITY PROMISE</h2>
            <p>
              Every product manufactured by Aroun Manufacturing Industries undergoes strict quality checks to ensure safety, reliability,
              comfort, and compliance with international standards.
            </p>
          </div>
          <div className="qa-promise-icon qa-promise-icon-right">
            <Medal />
          </div>
        </section>

        <section className="qa-cta">
          <h3>LOOKING FOR TRUSTED PHARMA &amp; SURGICAL DISPOSABLE MANUFACTURERS?</h3>
          <p>Bulk Orders Available Across India</p>

          <div className="qa-cta-row">
            <span>
              <Phone /> 843 843 4000 / 2000 / 5000
            </span>
            <span>
              <Mail /> arounindustries@gmail.com
            </span>
            <span>
              <Globe /> www.arounindustries.com
            </span>
            <button type="button">Request Quality Report</button>
            <button type="button" className="outline">
              Get Bulk Quote
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QualityAssurance;
