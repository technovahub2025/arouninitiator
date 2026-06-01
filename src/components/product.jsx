import "../style/product.css";
import product1 from "../asset/product1.png";
import product2 from "../asset/product2.png";
import product3 from "../asset/product3.png";
import product4 from "../asset/product4.png";
import product5 from "../asset/product5.png";

function Product() {
  const posters = [product1, product2, product3, product4, product5];

  return (
    <section className="product-section" id="products">
      <div className="product-container">
        <h2>Products</h2>
        <p>Explore our products, manufacturing units and achievements.</p>

        <div className="product-grid">
          {posters.map((poster, index) => (
            <div className="product-card" key={index}>
              <img src={poster} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
