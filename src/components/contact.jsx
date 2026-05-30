import "../style/contact.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h2>Discuss Supply Needs</h2>

          <p>
            Partner with India's reliable medical manufacturer.
          </p>

          <div className="info-item">
  <div className="info-icon info-blue">
    <FaMapMarkerAlt />
  </div>

  <div>
    <h4>Address</h4>
    <span>Chennai, Tamil Nadu, India</span>
  </div>
</div>

<div className="info-item">
  <div className="info-icon info-red">
    <FaEnvelope />
  </div>

  <div>
    <h4>Email</h4>
    <span>arounindustries@gmail.com</span>
  </div>
</div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form-card">

          <form>

            <div className="form-row">
              <div className="form-group">
                <label>NAME</label>
                <input
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="form-group">
                <label>EMAIL</label>
                <input
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="form-group">
              <label>SUBJECT</label>

              <select>
                <option>
                  Bulk Order Inquiry
                </option>
                <option>
                  Product Inquiry
                </option>
                <option>
                  Partnership
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>MESSAGE</label>

              <textarea
                placeholder="Requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Send Inquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
