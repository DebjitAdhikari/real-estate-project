
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Services from './pages/Services';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import PropertyDetails from './pages/ProperyDetails';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* <CustomCursor></CustomCursor> */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/about" element={<OldAbout />} /> */}
            <Route path="/properties" element={<Properties />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties/vrindavan-garden" element={<PropertyDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;