import Navbar from './components/Navbar';

import Footer from './components/Footer';
import IPCarousel from './components/IPCarousel';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="carousel">
        <IPCarousel />
      </section>
     
      <Footer />
    </div>
  );
};

export default App;