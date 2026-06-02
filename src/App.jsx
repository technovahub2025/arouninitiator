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

import Product from './components/product';

function App() {
  return (
    <>
      <Header />
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
