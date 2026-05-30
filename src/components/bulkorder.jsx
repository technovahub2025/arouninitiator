import "../style/bulk.css";

function BulkOrderCTA() {
  return (
    <section className="bulk-cta">
      <div className="bulk-content">
        <h3>Bulk Order</h3>
        <p>Need large quantity products? Contact us for special pricing.</p>
      </div>

      <button className="bulk-btn">Get Quote</button>

      <div className="discount-box">
        <strong>Bulk</strong>
        <span>Offering</span>
      </div>
    </section>
  );
}

export default BulkOrderCTA;