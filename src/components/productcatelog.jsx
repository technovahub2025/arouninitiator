import "../style/catelog.css";
import catelog from "../asset/catelog.png";
import { FaHeadSideMask, FaUserShield, FaUserMd, FaFlask } from "react-icons/fa";

function ProductCatalog() {
  return (
    <section className="product-section">
      <div className="product-container">

        <div className="product-header">
          <div>
            <h2>Product Catalog</h2>
            <p>Explore our pharma and surgical disposable products</p>
          </div>

          
        </div>

        <div className="product-grid">
          <div className="large-product-card">
            <div className="product-content">
              <span className="product-badge">Best Seller</span>
              <h3>N95 High Filtration</h3>
              <p>
                5-Ply protection with NIOSH standard filtration efficiency
                for maximum safety.
              </p>
              <button>View More →</button>
            </div>

            <img src={catelog} alt="N95 Mask" className="n95-img" />
          </div>

          <div className="small-products-grid">
            <div className="small-product-card">
              <div className="product-icon blue-icon"><FaHeadSideMask /></div>
              <h4>Face Masks</h4>
              <p>Medical Grade</p>
            </div>

            <div className="small-product-card">
              <div className="product-icon red-icon"><FaUserShield /></div>
              <h4>PPE Kits</h4>
              <p>Full Protection</p>
            </div>

            <div className="small-product-card">
              <div className="product-icon dark-icon"><FaUserMd /></div>
              <h4>Surgical Gowns</h4>
              <p>Sterile Wear</p>
            </div>

            <div className="small-product-card">
              <div className="product-icon gray-icon"><FaFlask /></div>
              <h4>Lab Products</h4>
              <p>Research Grade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;
