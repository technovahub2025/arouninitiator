import { useEffect, useState } from "react";
import "../style/product.css";
import product1 from "../asset/product1.png";
import product2 from "../asset/product2.png";
import product3 from "../asset/product3.png";
import product4 from "../asset/product4.png";
import product5 from "../asset/product5.png";

const getCardsPerView = () => {
  if (window.innerWidth <= 640) {
    return 1;
  }

  if (window.innerWidth <= 1024) {
    return 2;
  }

  return 3;
};

function Product() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const posters = [product1, product2, product3, product4, product5];
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
      document.body.style.overflow = "hidden";
      return undefined;
    }

    const slideInterval = window.setInterval(() => {
      setCurrentIndex((value) => value + 1);
    }, 2800);

    return () => window.clearInterval(slideInterval);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
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
    <section className="product-section animate-reveal-up" id="products">
      <div className="product-container">
        <h2>Products</h2>
        <p>Explore our products, manufacturing units and achievements.</p>

        <div className="product-slider-shell">
          <button
            type="button"
            className="product-arrow product-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous product image"
          >
            &#8249;
          </button>

          <div className="product-slider-viewport">
            <div
              className={`product-slider-track ${isTransitionEnabled ? "" : "no-transition"}`.trim()}
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {sliderPosters.map((poster, index) => (
                <button
                  type="button"
                className={`product-card animate-pop-in delay-${(index % 6) + 1}`.trim()}
                key={`${poster}-${index}`}
                onClick={() => setSelectedImage(poster)}
                style={{ width: `${100 / cardsPerView}%` }}
                >
                  <img src={poster} alt={`Product ${(index % posters.length) + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="product-arrow product-arrow-right"
            onClick={goToNext}
            aria-label="Next product image"
          >
            &#8250;
          </button>
        </div>

        <div className="product-dots">
          {posters.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`product-dot ${activeDot === index ? "active" : ""}`}
              aria-label={`Go to product image ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="product-lightbox animate-pop-in"
          onClick={() => setSelectedImage(null)}
          role="button"
          tabIndex={0}
        >
          <button
            type="button"
            className="product-lightbox-close"
            aria-label="Close product preview"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Expanded product preview"
            className="product-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Product;
