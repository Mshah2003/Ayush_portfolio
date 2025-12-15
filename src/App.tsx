import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <Achievements />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
