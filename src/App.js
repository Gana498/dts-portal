import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
