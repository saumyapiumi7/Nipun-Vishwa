// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education'; // Import the Education component
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience /> {/* Add the Education component here */}
      < Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
