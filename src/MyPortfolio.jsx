import React, { useMemo, useState } from 'react';
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
  X,
} from 'lucide-react';
import { title } from 'framer-motion/client';
const skills = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Python',
  'JavaScript',
  'CSS',
  'HTML',
  'Rest APIs',
  'JWT',
  'Supabase',
  'Django Basics',
];

const stacks = [
  {
    title: 'Frontend',
    icon: Layers3,
    items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    text: 'I build responsive interfaces with clean layout, reusable sections, and user-first design.',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'Django Basics'],
    text: 'I am growing into backend development by learning APIs, auth flows, and app structure.',
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB', 'Supabase'],
    text: 'I work with modern databases and backend services to connect real data with real products.',
  },
  {
    title:'Deployement',
    icon:'Deploying',
    items:['Vercel','Render','MongoDB Atlas'],
    text:'I deploy my projects on platforms like Vercel and Render, and use MongoDB Atlas for database hosting.',
  }
];

const journey = [
  {
    step: '01',
    title: 'Learning by building',
    text: 'I focus on practical web development and improve my skills by building interfaces, layouts, and real project flows.',
  },
  {
    step: '02',
    title: 'From frontend to full-stack',
    text: 'My current path is moving from responsive frontend work into backend logic with Node.js, Express, MongoDB, and Supabase.',
  },
  {
    step: '03',
    title: 'Open for real opportunities',
    text: 'I am preparing for freelance, internship, and junior developer opportunities where I can deliver and keep growing.',
  },
];

const projects = [
  {
    title: 'Advanced Authentication System (Auth-App)',
    tag: 'Full Stack',
    icon: Shield,
    text: "A premium MERN authentication system with OTP verification, Google Login, JWT auth, profile management, login history, device tracking,  password reset, and responsive UI.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/Ayaan-shakeel",
    live: "https://authentication-client-zeta.vercel.app/",
  },
  // {
  //   title: 'Project two coming soon',
  //   tag: 'Building',
  //   text: 'This section is ready for your next React or full-stack project once you complete it.',
  // },
  // {
  //   title: 'Project three coming soon',
  //   tag: 'Next Upload',
  //   text: 'Your future work can be displayed here with screenshots, GitHub links, and problem-solving details.',
  // }
];

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      type="button"
      onClick={() => setDark(!dark)}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-200 backdrop-blur transition hover:border-teal-400/40 hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function SectionHeading({ eyebrow, title, text, mutedClass }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className={`text-base leading-8 ${mutedClass}`}>{text}</p>
    </div>
  );
}

export default function AyaanPortfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const themeClass = useMemo(() => {
    return dark ? 'bg-[#0b0f14] text-zinc-100' : 'bg-[#f6f7f8] text-zinc-900';
  }, [dark]);

  const cardClass = dark
    ? 'border-white/10 bg-white/5 text-zinc-100'
    : 'border-black/10 bg-white text-zinc-900';

  const mutedClass = dark ? 'text-zinc-400' : 'text-zinc-600';

  const headerBg = dark
    ? 'bg-[#0b0f14]/80 supports-[backdrop-filter]:bg-[#0b0f14]/70 border-white/10'
    : 'bg-white/80 supports-[backdrop-filter]:bg-white/70 border-black/10';

  const glowOne = dark
    ? 'from-teal-400/20 via-cyan-400/5 to-transparent'
    : 'from-teal-500/15 via-cyan-400/10 to-transparent';

  const glowTwo = dark
    ? 'from-cyan-400/10 via-teal-400/5 to-transparent'
    : 'from-cyan-400/15 via-teal-400/10 to-transparent';

  return (
    <div className={`${themeClass} min-h-screen transition-colors duration-300`}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br ${glowOne} blur-3xl`}
        />
        <div
          className={`absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-gradient-to-tr ${glowTwo} blur-3xl`}
        />
      </div>

      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${headerBg}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10 text-teal-300">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">
                Ayaan Shakeel
              </p>
              <p className={`text-xs ${mutedClass}`}>React & Full-Stack Learner</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {['About', 'Skills', 'Journey', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium ${mutedClass} transition hover:text-teal-300`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle dark={dark} setDark={setDark} />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border md:hidden ${
                dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.03]'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`border-t px-4 py-4 md:hidden ${
              dark ? 'border-white/10 bg-[#0b0f14]/95' : 'border-black/10 bg-white/95'
            }`}
          >
            <div className="flex flex-col gap-4">
              {['About', 'Skills', 'Journey', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium ${mutedClass} transition hover:text-teal-300`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-teal-300">
              <Sparkles className="h-4 w-4" />
              Modern Developer Portfolio
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight  sm:text-5xl lg:text-6xl">
                I’m Ayaan Shakeel, building clean modern web experiences with Full Stack Development
              </h1>
              <p className={`max-w-2xl text-base leading-8 sm:text-lg ${mutedClass}`}>
                 I build responsive MERN stack applications with modern UI/UX,
            authentication systems, backend APIs, and scalable frontend architecture.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-teal-400"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://github.com/Ayaan-shakeel"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-semibold transition hover:border-teal-400/40 hover:text-teal-300 ${cardClass}`}
              >
                View GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['10+', 'Skills listed'],
                ['Frontend', 'Main current focus'],
                ['Full-stack', 'Learning direction'],
              ].map(([value, label]) => (
                <div key={label} className={`rounded-3xl border p-5 backdrop-blur ${cardClass}`}>
                  <p className="text-2xl font-semibold text-teal-300">{value}</p>
                  <p className={`mt-2 text-sm ${mutedClass}`}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] border p-5 shadow-2xl backdrop-blur xl:p-6 ${cardClass}`}>
            <div
              className={`rounded-[1.5rem] border p-5 ${
                dark ? 'border-white/10 bg-black/20' : 'border-black/10 bg-zinc-50'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-teal-300">
                    Profile Snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">Developer Card</h2>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Available to grow
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className={`rounded-2xl border p-4 ${cardClass}`}>
                  <p className="text-sm font-medium text-teal-300">Focus</p>
                  <p className={`mt-2 text-sm leading-7 ${mutedClass}`}>
                    Responsive UI, React component structure, clean layouts, and real-world
                    project building.
                  </p>
                </div>

                <div className={`rounded-2xl border p-4 ${cardClass}`}>
                  <p className="text-sm font-medium text-teal-300">Current Learning</p>
                  <p className={`mt-2 text-sm leading-7 ${mutedClass}`}>
                    Backend logic, APIs, authentication, databases, and full-stack app flow.
                  </p>
                </div>

                <div className={`rounded-2xl border p-4 ${cardClass}`}>
                  <p className="text-sm font-medium text-teal-300">Goal</p>
                  <p className={`mt-2 text-sm leading-7 ${mutedClass}`}>
                    Build strong projects, get real opportunities, and grow into a confident
                    full-stack developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Me"
            title=" Focused on becoming a strong full-stack developer."
            text="I am currently focused on building modern full-stack web applications
            using the MERN stack. My main strength is frontend development,
            but I’m actively improving backend logic, authentication systems,
            APIs, databases, and deployment workflows."
            mutedClass={mutedClass}
          />
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="My current stack and development direction."
            text="These are the tools and technologies I am learning and using while building responsive interfaces and preparing for more advanced full-stack work."
            mutedClass={mutedClass}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stacks.map((stack) => {
              const Icon = stack.icon;
              return (
                <article key={stack.title} className={`rounded-[2rem] border p-6 ${cardClass}`}>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-teal-400/20 bg-teal-400/10 p-3 text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{stack.title}</h3>
                  </div>

                  <p className={`mt-4 text-sm leading-7 ${mutedClass}`}>{stack.text}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-2 text-xs font-medium ${
                          dark
                            ? 'border-white/10 bg-white/5 text-zinc-200'
                            : 'border-black/10 bg-zinc-50 text-zinc-700'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`rounded-full border px-4 py-2 text-sm ${
                  dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Journey"
            title="How I’m growing as a developer."
            text="My progress is based on consistent learning, practical projects, and improving one layer at a time from UI design to backend understanding."
            mutedClass={mutedClass}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {journey.map((item) => (
              <article key={item.step} className={`rounded-[2rem] border p-6 ${cardClass}`}>
                <p className="text-sm font-semibold tracking-[0.22em] text-teal-300">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${mutedClass}`}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Projects section ready for showcasing my  best work."
            text=".I build end-to-end web applications that solve real problems, with a focus on clean UI, robust backend architecture, and scalable deployment. "
            mutedClass={mutedClass}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
             <article
  key={project.title}
  className={`
    group
    rounded-[2rem]
    border
    p-6
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
    ${cardClass}
  `}
>

  {/* TOP */}
  <div className="flex items-center justify-between">

    <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
      {project.tag}
    </span>

    <ExternalLink
      className="
        h-5 w-5 text-zinc-400
        group-hover:text-teal-300
        transition
      "
    />

  </div>

  {/* TITLE */}
  <h3 className="mt-5 text-2xl font-semibold">
    {project.title}
  </h3>

  {/* DESCRIPTION */}
  <p className={`mt-4 text-sm leading-7 ${mutedClass}`}>
    {project.text}
  </p>

  {/* STACK */}
  <div className="mt-5 flex flex-wrap gap-2">

    {project.stack.map((tech) => (
      <span
        key={tech}
        className="
          rounded-full
          bg-teal-400/10
          border border-teal-400/20
          px-3 py-1
          text-xs
          text-teal-300
        "
      >
        {tech}
      </span>
    ))}

  </div>

  {/* BUTTONS */}
  <div className="mt-6 flex gap-3">

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex-1
        rounded-xl
        border
        border-white/10
        px-4 py-3
        text-center
        text-sm
        font-medium
        transition
        hover:border-teal-400/40
        hover:text-teal-300
      "
    >
      GitHub
    </a>

    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex-1
        rounded-xl
        bg-teal-500
        px-4 py-3
        text-center
        text-sm
        font-semibold
        text-black
        transition
        hover:bg-teal-400
      "
    >
      Live Demo
    </a>

  </div>

</article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className={`grid gap-6 rounded-[2rem] border p-6 md:grid-cols-2 lg:p-8 ${cardClass}`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Let’s connect for opportunities and projects.
              </h2>
              <p className={`mt-4 text-base leading-8 ${mutedClass}`}>
                You can update this section with your real email, phone number, freelance links,
                or internship contact details.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:yourmail@example.com"
                className={`flex items-center gap-3 rounded-2xl border p-4 transition hover:border-teal-400/40 hover:text-teal-300 ${cardClass}`}
              >
                <Mail className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className={`text-xs ${mutedClass}`}>ayyanshakeel899@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+910000000000"
                className={`flex items-center gap-3 rounded-2xl border p-4 transition hover:border-teal-400/40 hover:text-teal-300 ${cardClass}`}
              >
                <Phone className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className={`text-xs ${mutedClass}`}>+91 9906309137</p>
                </div>
              </a>

              <a
                href="https://github.com/Ayaan-shakeel"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 rounded-2xl border p-4 transition hover:border-teal-400/40 hover:text-teal-300 ${cardClass}`}
              >
                <ExternalLink className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className={`text-xs ${mutedClass}`}>github.com/Ayaan-shakeel</p>
                </div>
              </a>

              <a
                href="#projects"
                className={`flex items-center gap-3 rounded-2xl border p-4 transition hover:border-teal-400/40 hover:text-teal-300 ${cardClass}`}
              >
                <Code2 className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Projects</p>
                  <p className={`text-xs ${mutedClass}`}>Showcase your work here</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}