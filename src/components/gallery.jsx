import { useEffect, useState } from "react";
import "../style/gallery.css";
import gallery1 from "../asset/gallery1.jpeg";
import gallery2 from "../asset/gallery2.jpeg";
import gallery3 from "../asset/gallery3.jpeg";

const getCardsPerView = () => {
  if (window.innerWidth <= 640) {
    return 1;
  }

  if (window.innerWidth <= 900) {
    return 2;
  }

  return 3;
};

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const posters = [gallery1, gallery2, gallery3];
  const sliderPosters = [...posters, ...posters];
  const activeDot = currentIndex % posters.length;

  const goToPrevious = () => {
    setIsTransitionEnabled(false);
    setCurrentIndex((value) => (value - 1 + posters.length) % posters.length);
  };

  const goToNext = () => {
    setIsTransitionEnabled(true);
    setCurrentIndex((value) => value + 1);
  };

  const goToSlide = (index) => {
    setIsTransitionEnabled(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      return undefined;
    }

    const slideInterval = window.setInterval(() => {
      setCurrentIndex((value) => value + 1);
    }, 2800);

    return () => window.clearInterval(slideInterval);
  }, [selectedImage]);

  useEffect(() => {
    if (currentIndex < posters.length) {
      setIsTransitionEnabled(true);
      return undefined;
    }

    const resetTimer = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);
    }, 450);

    return () => window.clearTimeout(resetTimer);
  }, [currentIndex, posters.length]);

  useEffect(() => {
    if (currentIndex !== 0 || isTransitionEnabled) {
      return undefined;
    }

    const transitionTimer = window.setTimeout(() => {
      setIsTransitionEnabled(true);
    }, 60);

    return () => window.clearTimeout(transitionTimer);
  }, [currentIndex, isTransitionEnabled]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2>Gallery</h2>
        <p>Explore our products, manufacturing units and achievements.</p>

        <div className="gallery-slider-shell">
          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous gallery image"
          >
            &#8249;
          </button>

          <div className="gallery-slider-viewport">
            <div
              className={`gallery-slider-track ${isTransitionEnabled ? "" : "no-transition"}`.trim()}
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {sliderPosters.map((poster, index) => (
                <button
                  type="button"
                  className="gallery-card"
                  key={`${poster}-${index}`}
                  onClick={() => setSelectedImage(poster)}
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <img
                    src={poster}
                    alt={`Gallery item ${(index % posters.length) + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={goToNext}
            aria-label="Next gallery image"
          >
            &#8250;
          </button>
        </div>

        <div className="gallery-dots">
          {posters.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`gallery-dot ${activeDot === index ? "active" : ""}`}
              aria-label={`Go to gallery image ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="button"
          tabIndex={0}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close gallery preview"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Expanded gallery preview"
            className="gallery-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
