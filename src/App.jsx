import { useEffect, useState } from 'react';
import Header from './components/navbar';
import HeroSection from './components/herosection';
import AboutUs from './components/aboutus';
import CoreValues from './components/corevalues';
import ProductCatalog from './components/productcatelog';
import BulkOrderCTA from './components/bulkorder';
import TechnicalExcellence from './components/technicalexcellence';
import TrustSignals from './components/trustpaint';
import ContactSection from './components/contact';
import Footer from './components/footer';
import Gallery from './components/gallery';
import QualityAssurance from './components/quality';

import Product from './components/product';

function App() {
  const [activePage, setActivePage] = useState("home");

  const showQualityPage = () => {
    window.history.pushState({ page: "quality" }, "", "#quality");
    setActivePage("quality");
  };

  useEffect(() => {
    const handlePopState = () => {
      setActivePage("home");
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (activePage === "quality") {
    return (
      <>
        <Header onQualityClick={showQualityPage} />
        <QualityAssurance />
      </>
    );
  }

  return (
    <>
      <Header onQualityClick={showQualityPage} />
      <HeroSection />
      <AboutUs />

      <CoreValues/>

      <ProductCatalog/>

      <BulkOrderCTA/>

      <Gallery/>

      <Product/>

      <TechnicalExcellence/>

      <TrustSignals/>

      <ContactSection/>

      <Footer/>
    </>
  );
}

export default App;
