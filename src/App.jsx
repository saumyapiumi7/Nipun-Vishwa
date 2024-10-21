// src/App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education'; // Import the Education component
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education /> {/* Add the Education component here */}
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
