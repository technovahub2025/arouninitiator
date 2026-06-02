import "../style/aboutus.css";
import aboutus from "../asset/aboutus.jpeg";

function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrap">
          <img
            src={aboutus}
            alt="Aroun Industries manufacturing"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <span className="about-label">About Us</span>
          <h2>15 Years of Trusted Manufacturing Experience</h2>
          <p>
            Aroun Industries has been supporting healthcare and pharma partners
            with dependable manufacturing solutions, consistent quality, and a
            strong commitment to safe production standards.
          </p>
          <p>
            With over 15 years of experience, we continue to deliver reliable
            surgical and pharmaceutical disposable products backed by modern
            processes, trained teams, and customer-first service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
