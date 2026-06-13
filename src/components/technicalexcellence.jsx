import "../style/technical.css";
import mask from "../asset/mask.png";
import welding from "../asset/maskwelding.png"
function TechnicalExcellence() {
  return (
    <section className="technical-section animate-reveal-up" id="manufacturing">
      <div className="technical-container">

        <div className="section-title animate-reveal-left">
          <div className="title-line"></div>
          <h2>Technical Excellence</h2>
        </div>

        {/* Unit 01 */}
        <div className="tech-row">

          <div className="tech-image animate-pop-in">
            <img
              src={mask}
              alt="N95 Production"
            />
          </div>

          <div className="tech-content animate-reveal-right">
            <span className="unit-label">UNIT 01</span>

            <h3>High-Speed N95 Production</h3>

            <p>
              Integrated fabric layering and ultrasonic welding with
              UV sterilization in Class 100k cleanroom.
            </p>

            

            <div className="stats">
              <div className="stat-card">
                <div className="stat-icon"></div>
                <div>
                  <h4>500K</h4>
                  <span>Daily Output</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"></div>
                <div>
                  <h4>99.9%</h4>
                  <span>Efficiency</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Unit 02 */}
        <div className="tech-row reverse">

          <div className="tech-content animate-reveal-left">
            <span className="unit-label">
              PRECISION ENGINEERING
            </span>

            <h3>Ultrasonic Welding Station</h3>

            <p>
              Sonic welding creates permanent ear-loop bonds without
              adhesives, maintaining 100% material purity.
            </p>

            <div className="tags">
              <span>Cleanroom</span>
              <span>Automation</span>
            </div>
          </div>

          <div className="tech-image animate-pop-in">
            <img
              src={welding}
              alt="Ultrasonic Welding"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnicalExcellence;
