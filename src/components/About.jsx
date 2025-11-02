import { MapPin, GraduationCap, User, Github } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#05060A] py-20 text-[#E6EEF3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,229,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(123,97,255,0.08),transparent_40%)]" />
      <div className="relative container mx-auto px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-white/80">
              I’m Hardik — a high-school student at Vishal Bharti Public School. I learn by building small projects in web and game development, experiment with algorithms, and prepare for hackathons and competitive exams. I’m eager to collaborate and keep iterating on my skills.
            </p>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Fact icon={<MapPin className="h-4 w-4" />} label="Location" value="School City" />
              <Fact icon={<GraduationCap className="h-4 w-4" />} label="School" value="Vishal Bharti Public School" />
              <Fact icon={<User className="h-4 w-4" />} label="Role" value="Student & Beginner Dev" />
              <Fact icon={<Github className="h-4 w-4" />} label="GitHub" value="Eraxty" link="https://github.com/Eraxty" />
            </div>
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              <Skill title="Python" />
              <Skill title="JavaScript" />
              <Skill title="HTML" />
              <Skill title="CSS" />
              <Skill title="Git" />
              <Skill title="VS Code" />
              <Skill title="DevTools" />
              <Skill title="React (beginner)" glow="violet" />
              <Skill title="Android/Game Engines (beginner)" glow="cyan" />
            </div>
            <div className="mt-6 text-sm text-white/70">
              Interests: Game dev, web apps, algorithms, CTF challenges (educational)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ icon, label, value, link }) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
      <div className="text-[#00E5FF]">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="hover:brightness-110 transition">
        {content}
      </a>
    );
  }
  return content;
}

function Skill({ title, glow }) {
  const glowClass = glow === 'violet' ? 'shadow-[0_0_25px_#7B61FF33]' : glow === 'cyan' ? 'shadow-[0_0_25px_#00E5FF33]' : 'shadow-none';
  return (
    <div className={`rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white/80 backdrop-blur-md ${glowClass}`}>
      {title}
    </div>
  );
}
