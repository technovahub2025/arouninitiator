import "../style/corevalue.css";
import { FaAward, FaUserCheck, FaCogs } from "react-icons/fa";

function CoreValues() {
  return (
    <section className="core-values">
      <div className="value-card value-blue">
        <div className="value-icon">
          <FaAward />
        </div>
        <h3>Quality Trust</h3>
        <p>
          Pharmaceutical-grade raw materials with uncompromising
          standards in every stitch.
        </p>
      </div>

      <div className="value-card value-red">
        <div className="value-icon">
          <FaUserCheck />
        </div>
        <h3>Reliable Protection</h3>
        <p>
          Superior fluid resistance and barrier efficiency for
          frontline healthcare professionals.
        </p>
      </div>

      <div className="value-card value-dark">
        <div className="value-icon">
          <FaCogs />
        </div>
        <h3>Automation Tech</h3>
        <p>
          State-of-the-art automated manufacturing ensuring sterility
          through zero human contact.
        </p>
      </div>
    </section>
  );
}

export default CoreValues;
