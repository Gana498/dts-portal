import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AddTeamMember from './components/AddTeamMember';

// Home page component that contains all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Blog />
      <Careers />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-team-member" element={<AddTeamMember />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
