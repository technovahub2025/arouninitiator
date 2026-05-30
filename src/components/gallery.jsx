import "../style/gallery.css";
import gallery1 from "../asset/gallery1.jpeg";
import gallery2 from "../asset/gallery2.jpeg";
import gallery3 from "../asset/gallery3.jpeg";

function Gallery() {
  const posters = [
    gallery1,
    gallery2,
    gallery3,
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2>Gallery</h2>
        <p>Explore our products, manufacturing units and achievements.</p>

        <div className="gallery-grid">
          {posters.map((poster, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={poster}
                alt={`Gallery item ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
