import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#241c15] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
