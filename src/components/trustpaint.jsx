import "../style/trustsignal.css";
import { FaCertificate, FaCheckCircle, FaAward, FaShieldAlt } from "react-icons/fa";

function TrustSignals() {
  const signals = [
    {
      title: "ISO 9001",
      subtitle: "Certified",
      icon: <FaCertificate />
    },
    {
      title: "GMP",
      subtitle: "Approved",
      icon: <FaCheckCircle />
    },
    {
      title: "CE Mark",
      subtitle: "Certified",
      icon: <FaAward />
    },
    {
      title: "FDA",
      subtitle: "Compliant",
      icon: <FaShieldAlt />
    },
  ];

  return (
    <section className="trust-section animate-reveal-up" id="quality">
      <div className="trust-container">
        {signals.map((item, index) => (
          <div className={`trust-card animate-pop-in delay-${Math.min(index + 1, 6)}`} key={index}>
            <div className="trust-icon">
              {item.icon}
            </div>

            <div className="trust-content">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSignals;
