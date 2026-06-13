import React from "react";
import {
  Settings,
  Truck,
  ShieldCheck,
  Send,
  Calendar,
  ClipboardList,
  BadgeIndianRupee,
  PackageCheck,
  BadgeCheck,
  Award,
  Cog,
  Puzzle,
  Package,
} from "lucide-react";
import "../style/bulk.css";

import bulk1 from "../asset/bulk1.png";
import bulk2 from "../asset/bulk2.png";
import contact from "../asset/contactimage.png";

const BulkOrders = () => {
  const sendBulkInquiry = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const recipient = "arounindustries@gmail.com";
    const subject = `Bulk Order Inquiry - ${formData.get("productType") || "New Request"}`;
    const body = [
      `Full Name: ${formData.get("fullName") || ""}`,
      `Company / Organization: ${formData.get("companyName") || ""}`,
      `Phone Number: ${formData.get("phoneNumber") || ""}`,
      `Email Address: ${formData.get("emailAddress") || ""}`,
      `Product Type: ${formData.get("productType") || ""}`,
      `Required Quantity: ${formData.get("quantity") || ""}`,
      `Delivery Location: ${formData.get("deliveryLocation") || ""}`,
      `Expected Delivery Date: ${formData.get("expectedDeliveryDate") || ""}`,
      "",
      "Additional Requirements / Message:",
      formData.get("message") || "",
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bulk-page animate-reveal-up" id="bulk">
      <header className="bulk-hero">
        <div className="bulk-hero-copy animate-reveal-left">
          <h1>BULK ORDERS</h1>
          <h3>Better Pricing. Reliable Supply. Guaranteed Quality.</h3>
          <p>
            Place bulk orders for 3 Ply Masks, N95 Masks and other surgical disposables
            at the best prices with assured quality and timely delivery.
          </p>

          <div className="bulk-hero-points">
            <Point icon={<Settings />} title="Best Pricing" text="For Bulk Orders" />
            <Point icon={<Truck />} title="Timely Delivery" text="Across India" />
            <Point icon={<ShieldCheck />} title="Quality Assured" text="100% Guaranteed" />
          </div>
        </div>

        <div className="bulk-hero-art animate-float-soft" aria-hidden="true">
          <img src={contact} alt="" />
        </div>
      </header>

      <div className="bulk-main">
        <section className="quality-box animate-reveal-up">
          <h3>OUR QUALITY &amp; MODELS</h3>

          <div className="product-grid">
            <Product
              image={bulk1}
              title="3 PLY SURGICAL MASK"
              items={[
                "3 Layers of Non-Woven Fabric",
                "BFE ≥ 98%",
                "Melt Blown Filter Layer",
                "Adjustable Nose Clip",
                "Soft Elastic Ear Loops",
                "Skin Friendly & Comfortable",
                "Fluid Resistant",
                "Size: 17.5 x 9.5 cm (± 0.5 cm)",
              ]}
            />

            <Product
              image={bulk2}
              title="N95 MASK"
              items={[
                "5 Layer Protection",
                "Filtration Efficiency ≥ 95%",
                "Melt Blown Filter",
                "Adjustable Nose Clip",
                "Head Loop / Ear Loop",
                "Soft & Breathable",
                "Secure Fit & High Comfort",
                "Standard: EN 149:2001+A1:2009",
              ]}
            />
          </div>
        </section>

        <section className="quote-card animate-pop-in">
          <h3>REQUEST A BULK ORDER QUOTE</h3>
          <p>Fill in the details below and our team will get back to you with the best offer.</p>

          <form onSubmit={sendBulkInquiry}>
            <div className="form-grid">
              <Input name="fullName" label="Full Name *" placeholder="Enter your full name" />
              <Input name="companyName" label="Company / Organization *" placeholder="Enter company name" />
              <Input name="phoneNumber" label="Phone Number *" placeholder="Enter phone number" />
              <Input name="emailAddress" label="Email Address *" placeholder="Enter email address" />

              <label>
                Product Type *
                <select name="productType" defaultValue="">
                  <option value="">Select Product</option>
                  <option>3 Ply Surgical Mask</option>
                  <option>N95 Mask</option>
                </select>
              </label>

              <Input name="quantity" label="Required Quantity *" placeholder="Enter quantity" />
              <Input name="deliveryLocation" label="Delivery Location *" placeholder="Enter delivery location" />

              <label className="date-field">
                Expected Delivery Date
                <span className="date-input-wrap">
                  <input type="date" name="expectedDeliveryDate" />
                  <Calendar size={16} />
                </span>
              </label>
            </div>

            <label className="message-field">
              Additional Requirements / Message
              <textarea name="message" placeholder="Write your requirements (if any)..." />
            </label>

            <button type="submit">
              Submit Request <Send size={15} />
            </button>
          </form>
        </section>

        <aside className="process-card animate-reveal-right">
          <h3>OUR BULK ORDER PROCESS</h3>

          <Process icon={<ClipboardList />} title="1. Submit Enquiry" text="Fill the form with your requirements" />
          <Process icon={<BadgeIndianRupee />} title="2. Get Quote" text="We provide the best price and details" />
          <Process icon={<PackageCheck />} title="3. Confirm Order" text="Review and confirm your order" />
          <Process icon={<ShieldCheck />} title="4. Production &amp; Quality Check" text="Manufacturing with strict quality standards" />
          <Process icon={<Truck />} title="5. Timely Delivery" text="Safe and on-time delivery to your location" />
        </aside>
      </div>

      <div className="features-bar">
        <Feature icon={<Award />} title="Premium Quality Products" text="Ensuring Safety, Comfort & Reliability" />
        <Feature icon={<Cog />} title="Advanced Manufacturing" text="High Precision Machines & Technology" />
        <Feature icon={<BadgeCheck />} title="Strict Quality Control" text="Every Product Tested for High Standards" />
        <Feature icon={<Puzzle />} title="Customization Available" text="As Per Your Requirements & Specifications" />
        <Feature icon={<Package />} title="Bulk Order Special Discount" text="Best Pricing for Bulk Requirements" />
      </div>
    </section>
  );
};

const Point = ({ icon, title, text }) => (
  <div className="bulk-point">
    <div className="bulk-point-icon">{icon}</div>
    <div>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  </div>
);

const Product = ({ image, title, items }) => (
  <article className="product-card">
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);

const Input = ({ name, label, placeholder }) => (
  <label>
    {label}
    <input name={name} placeholder={placeholder} />
  </label>
);

const Process = ({ icon, title, text }) => (
  <div className="process-item">
    <div className="process-badge">{icon}</div>
    <div className="process-copy">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const Feature = ({ icon, title, text }) => (
  <div className="feature-item">
    <div className="feature-icon">{icon}</div>
    <div className="feature-copy">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

export default BulkOrders;
