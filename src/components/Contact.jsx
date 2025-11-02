import { Github, Mail } from 'lucide-react';
import { useCallback } from 'react';

export default function Contact() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:Hardikrajotiyamars@gmail.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="contact" className="relative w-full bg-[#05060A] py-20 text-[#E6EEF3]">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,rgba(0,229,255,0.05),transparent),radial-gradient(70%_50%_at_80%_20%,rgba(123,97,255,0.05),transparent)]" />
      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
          <p className="mt-3 text-white/80">Feel free to reach out for collaboration, feedback, or opportunities.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid gap-4 md:grid-cols-2">
              <Input name="name" label="Your Name" placeholder="Enter your name" required />
              <Input name="email" type="email" label="Email" placeholder="name@email.com" required />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea name="message" required rows={5} className="w-full rounded-xl border border-white/10 bg-[#0B0D14] px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-[#00E5FF]/60 focus:outline-none" placeholder="Write a short message..." />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#7B61FF] px-5 py-3 font-semibold text-white shadow-[0_0_30px_#7B61FF33] transition-transform hover:-translate-y-0.5">
                Send Email
              </button>
              <a href="https://github.com/Eraxty" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:border-white/25">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="mailto:Hardikrajotiyamars@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:border-white/25">
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white/60">Made with curiosity — Hardik Rajotiya.</p>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm text-white/70">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className="w-full rounded-xl border border-white/10 bg-[#0B0D14] px-4 py-3 text-white/90 placeholder:text-white/40 focus:border-[#00E5FF]/60 focus:outline-none" />
    </div>
  );
}
