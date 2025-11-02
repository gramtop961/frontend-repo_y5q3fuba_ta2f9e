import Spline from '@splinetool/react-spline';
import { Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#05060A] text-[#E6EEF3]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05060A]/60 via-[#05060A]/70 to-[#05060A]/95" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-sm text-white/80">Futuristic • Clean • Sleek</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-['Orbitron',_Inter,_ui-sans-serif]">
            Hardik Rajotiya
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/80">
            Aspiring Game Developer | Tech Enthusiast | Student Innovator
          </p>
          <p className="mt-4 max-w-2xl text-white/70">
            Building small games, tools, and experiments while preparing for competitive exams.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#00E5FF] px-5 py-3 font-semibold text-[#05060A] shadow-[0_0_30px_#00E5FF33] transition-transform hover:-translate-y-0.5">
              <span className="absolute inset-0 h-full w-full scale-150 bg-gradient-to-r from-cyan-300/40 to-cyan-100/40 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <span className="relative">View Projects</span>
            </a>
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition-colors hover:border-[#7B61FF]/40 hover:bg-[#7B61FF]/10">
              Contact <Mail className="h-4 w-4" />
            </a>
            <a href="https://github.com/Eraxty" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white/100 transition-colors">
              <Github className="h-5 w-5" /> GitHub
            </a>
          </div>
        </div>

        {/* Profile avatar */}
        <div className="mt-14">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 pr-5 backdrop-blur-md">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#7B61FF]/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF] to-[#7B61FF]" />
            </div>
            <div className="text-white/80">
              <div className="font-semibold">Hardik Rajotiya</div>
              <div className="text-sm text-white/60">High-school student • Beginner Dev</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
