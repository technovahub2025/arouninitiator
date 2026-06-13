import React from "react";
import {
  Award,
  ShieldCheck,
  Truck,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  Settings,
  BadgeCheck,
  Puzzle,
  Package,
} from "lucide-react";
import "../style/contact.css";
import contactImage from "../asset/contactimage.png";

const ContactUs = () => {
  const sendContactMessage = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const recipient = "arounindustries@gmail.com";
    const subject = formData.get("subject") || "Contact Form Message";
    const body = [
      `Full Name: ${formData.get("fullName") || ""}`,
      `Email Address: ${formData.get("emailAddress") || ""}`,
      `Phone Number: ${formData.get("phoneNumber") || ""}`,
      `Subject: ${formData.get("subject") || ""}`,
      "",
      "Message:",
      formData.get("message") || "",
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-page animate-reveal-up" id="contact">
      <div className="contact-hero">
        <div className="animate-reveal-left">
          <h1>CONTACT US</h1>
          <p>
            We are here to help! Reach out to us for any inquiries,
            <br /> bulk orders, or general information.
          </p>

          <div className="hero-points">
            <div><Award /> Premium Quality<br />Products</div>
            <div><ShieldCheck /> Safe & Reliable<br />Manufacturing</div>
            <div><Truck /> Timely Delivery<br />Across India</div>
          </div>
        </div>

        <img
          src={contactImage}
          alt="mask"
          className="animate-float-soft"
        />
      </div>

      <div className="contact-content">
        <div className="card info-card animate-pop-in">
          <h3>GET IN TOUCH</h3>

          <Info icon={<Building2 />} title="Company Name" text="Aroun Manufacturing Industries" />
          <Info icon={<MapPin />} title="Address" text="14, 15, Sri Krishna Nagar, Pothurai, Vanur Taluk, Villupuram District, Tamil Nadu 605 111" />
          <Info icon={<Phone />} title="Phone Number" text="843 843 4000 / 2000 / 5000" />
          <Info icon={<Mail />} title="Email Address" text="arounindustries@gmail.com" />
          <Info icon={<Globe />} title="Website" text="www.arounindustries.com" />
          <Info icon={<Clock />} title="Working Hours" text="Mon - Sat : 9:00 AM - 6:00 PM Sunday : Closed" />
        </div>

        <div className="card form-card animate-pop-in delay-1">
          <h3>SEND US A MESSAGE</h3>
          <p>Fill out the form below and we will get back to you as soon as possible.</p>

          <form onSubmit={sendContactMessage}>
            <div className="grid">
              <label>
                Full Name *
                <input name="fullName" placeholder="Enter your full name" />
              </label>

              <label>
                Email Address *
                <input name="emailAddress" placeholder="Enter your email" />
              </label>

              <label>
                Phone Number *
                <input name="phoneNumber" placeholder="Enter your phone number" />
              </label>

              <label>
                Subject *
                <input name="subject" placeholder="Enter subject" />
              </label>
            </div>

            <label>
              Message *
              <textarea name="message" placeholder="Write your message here..." />
            </label>

            <button type="submit">
              Send Message <Send size={15} />
            </button>
          </form>
        </div>

        <div className="card map-card animate-pop-in delay-2">
          <h3>OUR LOCATION</h3>
          <div className="map-box">
            <iframe
              title="Aroun Location"
              src="https://www.google.com/maps?q=Sri%20Krishna%20Nagar%20Pothurai%20Tamil%20Nadu&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="features">
        <Feature icon={<Award />} title="Premium Quality Products" text="Ensuring Safety, Comfort & Reliability" delay="delay-1" />
        <Feature icon={<Settings />} title="Advanced Manufacturing" text="High Precision Machines & Technology" delay="delay-2" />
        <Feature icon={<BadgeCheck />} title="Strict Quality Control" text="Every Product Tested for High Standards" delay="delay-3" />
        <Feature icon={<Puzzle />} title="Customization Available" text="As Per Your Requirements & Specifications" delay="delay-4" />
        <Feature icon={<Package />} title="Bulk Order Special Discount" text="Best Pricing for Bulk Requirements" delay="delay-5" />
      </div>
    </section>
  );
};

const Info = ({ icon, title, text }) => (
  <div className="info-row">
    <div className="icon">{icon}</div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const Feature = ({ icon, title, text, delay }) => (
  <div className={`feature animate-pop-in ${delay || ""}`.trim()}>
    <div>{icon}</div>
    <section>
      <h4>{title}</h4>
      <p>{text}</p>
    </section>
  </div>
);

export default ContactUs;
