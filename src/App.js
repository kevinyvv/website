
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Awards from './components/Awards/Awards.jsx';
import Top from './components/scrollToTop';


function App() {
  
  return (
    <div className="space-y-10 dark:bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Awards/>
      <Contact/>
      <Top/>
      <Footer/>     
    </div>
  );
}

export default App;
