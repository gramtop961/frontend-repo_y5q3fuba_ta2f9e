import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="h-screen w-full overflow-y-auto scroll-smooth bg-[#05060A] text-[#E6EEF3]">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060A]/70 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-wide text-white/90">HR</a>
          <nav className="flex items-center gap-5 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
