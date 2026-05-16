import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,

  Layers3,
  Mail,
  Menu,
  Moon,
  Phone,
  Server,
  Shield,
  Sparkles,
  Sun,
  UserCheck,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "JWT",
  "REST APIs",
  "Supabase",
  "Python",
];

const projects = [
  {
    title: "Advanced Authentication System",
    tag: "Full Stack",
    icon: Shield,
    text: "A premium MERN authentication system with OTP verification, Google Login, JWT auth, profile management, login history, device tracking, password reset, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/Ayaan-shakeel",
    live: "https://your-live-link.vercel.app",
  },
  {
    title: "Portfolio Website",
    tag: "Frontend",
    icon: Code2,
    text: "Modern responsive portfolio built using React, Tailwind CSS, Framer Motion, and premium UI principles.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Ayaan-shakeel",
    live: "#",
  },
];

export default function AyaanPortfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const themeClass = useMemo(() => {
    return dark
      ? "bg-[#071018] text-white"
      : "bg-[#f5f7fa] text-black";
  }, [dark]);

  const cardClass = dark
    ? "bg-white/5 border border-white/10"
    : "bg-white border border-black/10";

  const muted = dark ? "text-zinc-400" : "text-zinc-600";

  return (
    <div className={`${themeClass} min-h-screen transition-all duration-300`}>

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/20 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
              <Code2 className="text-cyan-300 w-5 h-5" />
            </div>

            <div>
              <h1 className="font-bold tracking-wide">
                Ayaan Shakeel
              </h1>
              <p className={`text-xs ${muted}`}>
                Full Stack Developer
              </p>
            </div>

          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">

            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-cyan-400 transition ${muted}`}
              >
                {item}
              </a>
            ))}

          </nav>

          <div className="flex items-center gap-3">

            {/* THEME */}
            <button
              onClick={() => setDark(!dark)}
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4">

            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`${muted}`}
              >
                {item}
              </a>
            ))}

          </div>
        )}

      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-5 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs uppercase tracking-[0.25em] mb-6">
            <Sparkles size={14} />
            Modern Developer Portfolio
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Building clean modern full-stack web experiences.
          </h1>

          <p className={`mt-6 text-lg leading-8 max-w-2xl ${muted}`}>
            I build responsive MERN stack applications with modern UI/UX,
            authentication systems, backend APIs, and scalable frontend architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/Ayaan-shakeel"
              target="_blank"
              className={`px-7 py-4 rounded-2xl border flex items-center gap-2 ${cardClass}`}
            >
              {/* GitHub
              <Github size={18} /> */}
            </a>

          </div>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-[2rem] p-8 ${cardClass}`}
        >

          <div className="space-y-5">

            <div className={`rounded-2xl p-5 ${cardClass}`}>
              <UserCheck className="text-cyan-400 mb-3" />
              <h3 className="font-semibold text-xl">
                Frontend Development
              </h3>
              <p className={`mt-2 text-sm leading-7 ${muted}`}>
                Building responsive interfaces with React, Tailwind CSS,
                Framer Motion, and premium UI principles.
              </p>
            </div>

            <div className={`rounded-2xl p-5 ${cardClass}`}>
              <Server className="text-cyan-400 mb-3" />
              <h3 className="font-semibold text-xl">
                Backend Development
              </h3>
              <p className={`mt-2 text-sm leading-7 ${muted}`}>
                Working with Node.js, Express, MongoDB, JWT authentication,
                APIs, and backend architecture.
              </p>
            </div>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-5 py-20"
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
            About Me
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Focused on becoming a strong full-stack developer.
          </h2>

          <p className={`mt-6 max-w-3xl text-lg leading-8 ${muted}`}>
            I am currently focused on building modern full-stack web applications
            using the MERN stack. My main strength is frontend development,
            but I’m actively improving backend logic, authentication systems,
            APIs, databases, and deployment workflows.
          </p>

        </motion.div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-5 py-20"
      >

        <h2 className="text-4xl font-bold mb-10">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className={`px-5 py-3 rounded-2xl ${cardClass}`}
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-5 py-20"
      >

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                whileHover={{ y: -5 }}
                key={project.title}
                className={`rounded-[2rem] p-7 ${cardClass}`}
              >

                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                    <Icon className="text-cyan-400" />
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                    {project.tag}
                  </span>

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {project.title}
                </h3>

                <p className={`mt-4 leading-7 ${muted}`}>
                  {project.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-full text-sm bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-7 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-cyan-400"
                  >
                    {/* GitHub
                    <ExternalLink size={16} />*/}
                  </a> 

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-cyan-400"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-5 py-20"
      >

        <div className={`rounded-[2rem] p-8 ${cardClass}`}>

          <h2 className="text-4xl font-bold">
            Let’s Connect
          </h2>

          <p className={`mt-4 max-w-2xl ${muted}`}>
            Open to internships, freelance opportunities, collaborations,
            and real-world projects.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <a
              href="mailto:ayyanshakeel899@gmail.com"
              className={`rounded-2xl p-5 flex items-center gap-4 ${cardClass}`}
            >
              <Mail className="text-cyan-400" />
              <div>
                <p className="font-semibold">Email</p>
                <p className={`text-sm ${muted}`}>
                  ayyanshakeel899@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919906309137"
              className={`rounded-2xl p-5 flex items-center gap-4 ${cardClass}`}
            >
              <Phone className="text-cyan-400" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className={`text-sm ${muted}`}>
                  +91 9906309137
                </p>
              </div>
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-10">

        <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className={`${muted}`}>
            © 2026 Ayaan Shakeel. Built with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Ayaan-shakeel"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:ayyanshakeel899@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}