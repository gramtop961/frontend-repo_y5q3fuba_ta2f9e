import { ExternalLink, Code2, Gamepad2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#05060A] py-20 text-[#E6EEF3]">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_10%,rgba(0,229,255,0.06),transparent),radial-gradient(70%_50%_at_90%_10%,rgba(123,97,255,0.06),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
          <a href="https://github.com/Eraxty" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-white">View more on GitHub</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Hex Calculator"
            description="A compact hexadecimal calculator for conversions and bitwise ops — useful for debugging and low-level puzzles."
            tech={["JavaScript", "Clean UI", "Responsive"]}
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            title="Puzzle Solver — Brute-force Algorithm (CTF / Educational use)"
            description="An educational brute-force algorithm implementation intended for capture-the-flag style problems and puzzle solving (for learning algorithm design and optimization). Not intended for malicious use."
            tech={["Python", "Search/Iteration", "Profiling"]}
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            title="Mini Game / Prototype"
            description="Playable browser prototype showing game logic, scoring, and simple animations."
            tech={["JavaScript", "Canvas", "Gameplay"]}
            demoLink="#"
            codeLink="#"
            icon="game"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, demoLink, codeLink, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      {/* Image/GIF placeholder */}
      <div className="relative h-40 w-full bg-gradient-to-tr from-[#00E5FF]/20 to-[#7B61FF]/20">
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70" style={{backgroundImage:'radial-gradient(circle at 30% 30%, rgba(0,229,255,0.4) 0, transparent 40%), radial-gradient(circle at 70% 40%, rgba(123,97,255,0.4) 0, transparent 40%)'}} />
        <div className="absolute inset-0 flex items-center justify-center text-white/70">
          {icon === 'game' ? <Gamepad2 className="h-8 w-8" /> : <Code2 className="h-8 w-8" />}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/75">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a href={demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-[#00E5FF] hover:underline">
            Live Demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-[#7B61FF] hover:underline">
            Code <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
