import React from "react";
import {
  Eye,
  Rocket,
  ShieldCheck,
  Factory,
  Users,
  BadgeCheck,
  Settings,
  Award,
  UserCheck,
  ArrowRightCircle,
  Globe,
  Target,
} from "lucide-react";
import "../style/aboutus.css";

import about1 from "../asset/about1.png";
import about2 from "../asset/about2.png";
import about3 from "../asset/about3.png";
import about4 from "../asset/about4.png";
import factory from "../asset/factory.png";
import about5 from "../asset/about5.png";

const AboutUs = () => {
  const certifications = [
    {
      image: about1,
      title: "ISO 13485:2016",
      text: "Quality Management System",
    },
    {
      image: about2,
      title: "CE MARK",
      text: "Certified",
    },
    {
      image: about3,
      title: "FDA",
      text: "Registered",
    },
    {
      image: about4,
      title: "ISO 9001:2015",
      text: "Quality Management System",
    },
    {
      image: about5,
      title: "GMP",
      text: "Certified",
    },
  ];

  return (
    <section className="about-page animate-reveal-up" id="about">
      <div className="about-shell">
        <div className="about-top">
          <div className="intro-grid">
            <InfoCard
              icon={<Eye />}
              title="OUR VISION"
              text="To be a globally trusted leader in manufacturing high-quality pharma and surgical disposables, setting benchmarks in safety, innovation, and customer satisfaction."
              accent="vision"
            />

            <InfoCard
              icon={<Rocket />}
              title="OUR MISSION"
              text="To deliver superior quality products through advanced technology, skilled workforce, and stringent quality control while ensuring sustainable growth and building lasting relationships with our customers."
              accent="mission"
            />
          </div>

          <div className="cert-panel">
            <SectionHeading
              title="COMPANY CERTIFICATIONS"
              text="Our commitment to quality, safety, and compliance is backed by internationally recognized certifications."
            />

            <div className="cert-grid">
              {certifications.map((cert) => (
                <article className="cert-card" key={cert.title}>
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <h4>{cert.title}</h4>
                  <p>{cert.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="about-mid">
          <div className="left-column">
            <div className="output-panel">
              <SectionHeading
                title="PRODUCTION OUTPUT"
                text="Our advanced machines and efficient processes ensure consistent high-volume production with uncompromised quality."
              />

              <button type="button" className="output-btn">
                View Our Products <ArrowRightCircle size={16} />
              </button>
            </div>

            <div className="stats-panel">
              <StatCard
                icon={<ShieldCheck />}
                title="3 PLY MASKS PRODUCTION"
                value="1,50,000+"
                text="Pieces / Day"
              />
              <StatCard
                icon={<BadgeCheck />}
                title="N95 MASKS PRODUCTION"
                value="60,000+"
                text="Pieces / Day"
              />
              <StatCard
                icon={<Factory />}
                title="MACHINE CAPACITY"
                value="10+"
                text="Advanced Machines"
              />
              <StatCard
                icon={<Users />}
                title="SKILLED WORKFORCE"
                value="50+"
                text="Team Members"
              />
            </div>
          </div>

          <div className="factory-column">
            <div className="factory-panel">
              <SectionHeading
                title="FACTORY INSIDE"
                text="A glimpse into our state-of-the-art manufacturing facility equipped with advanced technology and clean production environment."
              />

              <img src={factory} alt="Factory inside" className="factory-image" />
            </div>
          </div>
        </div>

        <div className="promise-bar">
          <div className="promise-copy">
            <h3>QUALITY IS OUR PROMISE</h3>
            <p>
              At Aroun Manufacturing Industries, we are committed to delivering
              products that ensure safety, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="promise-feature">
            <ShieldCheck />
            <span>Premium<br />Raw Materials</span>
          </div>
          <div className="promise-feature">
            <Settings />
            <span>Advanced Technology<br />&amp; Innovation</span>
          </div>
          <div className="promise-feature">
            <Award />
            <span>Strict Quality<br />Control</span>
          </div>
          <div className="promise-feature">
            <UserCheck />
            <span>Customer<br />Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, text }) => (
  <div className="section-heading">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const InfoCard = ({ icon, title, text }) => (
  <article className="info-card">
    <div className="info-icon">
      {icon}
    </div>
    <div className="info-body">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <div className="info-watermark" aria-hidden="true">
      {title === "OUR VISION" ? <Target /> : <Globe />}
    </div>
  </article>
);

const StatCard = ({ icon, title, value, text }) => (
  <article className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div className="stat-copy">
      <h4>{title}</h4>
      <strong>{value}</strong>
      <p>{text}</p>
    </div>
  </article>
);

export default AboutUs;
