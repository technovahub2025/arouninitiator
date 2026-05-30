import Header from './components/navbar';
import HeroSection from './components/herosection';
import CoreValues from './components/corevalues';
import ProductCatalog from './components/productcatelog';
import BulkOrderCTA from './components/bulkorder';
import TechnicalExcellence from './components/technicalexcellence';
import TrustSignals from './components/trustpaint';
import ContactSection from './components/contact';
import Footer from './components/footer';
import Gallery from './components/gallery';

function App() {
  return (
    <>
      <Header />
      <HeroSection />

      <CoreValues/>

      <ProductCatalog/>

      <BulkOrderCTA/>

      <Gallery/>

      <TechnicalExcellence/>

      <TrustSignals/>

      <ContactSection/>

      <Footer/>
    </>
  );
}

export default App;
