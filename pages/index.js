import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

const projects = [
  {
    title: 'Calubcub 1st High School IMS',
    image: '/images/calubcub.png',
    alt: 'Calubcub information management system dashboard',
    summary:
      'A school information management system for attendance, grading, records, PDF reporting, and OTP email authentication.',
    impact: ['Automated report generation', 'Role-aware school workflows', 'Secure email verification'],
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'pdf-lib', 'Nodemailer'],
    demo: 'https://calubcub.vercel.app/',
    code: 'https://github.com/glytch21/info-management-system',
  },
  {
    title: 'Alangilan SHS Portal',
    summary:
      'A student portal for managing student, parent, and teacher profiles with secure authentication and real-time data updates.',
    impact: ['Profile administration', 'Realtime database flows', 'Responsive portal UI'],
    tags: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind CSS'],
    code: 'https://github.com/glytch21/student-portal',
  },
  {
    title: 'CodeCrawlers',
    image: '/images/codecrawlers.png',
    alt: 'CodeCrawlers JavaScript learning game interface',
    summary:
      'A gamified JavaScript learning tool with level progression, saved progress, a CodeMirror editor, and canvas-based interactions.',
    impact: ['Interactive coding lessons', 'Progress persistence', 'Game-like practice loop'],
    tags: ['JavaScript', 'Next.js', 'CodeMirror', 'Canvas', 'Supabase'],
    code: 'https://github.com/glytch21/codecrawlers.github.io',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Supabase',
  'MySQL',
  'Tailwind CSS',
  'Vercel',
  'Git',
]

const experience = [
  {
    role: 'AI Trainer - Coding',
    company: 'Outlier AI',
    date: 'Dec 2024 - Aug 2025',
    text: 'Reviewed programming solutions, debugged code, and created JavaScript and Python examples to improve LLM coding behavior.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Innovatto IT Consultancy',
    date: 'Jul 2023 - Nov 2023',
    text: 'Built a chat support ticketing system with TypeScript, Next.js, Tailwind CSS, Supabase, responsive layouts, and secure authentication.',
  },
  {
    role: 'B.S. Information Technology',
    company: 'Westmead International School',
    date: 'Sep 2020 - Jul 2024',
    text: 'Focused on full-stack web development, database-backed applications, and modern JavaScript project delivery.',
  },
]

export default function Portfolio() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(stored === 'dark' || stored === 'light' ? stored : prefersDark ? 'dark' : 'light')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Head>
        <title>Gio Aaron Hernandez | Backend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio of Gio Aaron Hernandez, a backend web developer and AI coding trainer building Next.js, Supabase, and TypeScript applications."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Gio Hernandez home">
          <span>GH</span>
          Gio Hernandez
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </nav>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="kicker">Backend web developer + AI coding trainer</p>
            <h1>I build practical web systems with clean data flows and reliable interfaces.</h1>
            <p className="hero-text">
              I am Gio Aaron Hernandez, a developer based in Lipa, Philippines. I work with Next.js,
              TypeScript, Supabase, and MySQL to ship school portals, admin tools, and learning products
              that people can actually use day to day.
            </p>
            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button primary" href="#work">
                View work
              </a>
              <a className="button secondary" href="mailto:hernandezgio16@gmail.com">
                Email me
              </a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Developer snapshot">
            <div>
              <span className="panel-label">Current focus</span>
              <strong>Backend-first apps with polished React frontends</strong>
            </div>
            <dl className="metrics">
              <div>
                <dt>3</dt>
                <dd>featured builds</dd>
              </div>
              <div>
                <dt>2024</dt>
                <dd>IT graduate</dd>
              </div>
              <div>
                <dt>Open</dt>
                <dd>to developer roles</dd>
              </div>
            </dl>
            <div className="stack-strip" aria-label="Technology stack">
              {['Next.js', 'TypeScript', 'Supabase', 'MySQL'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="intro-band">
          <div className="section-shell intro-grid">
            <p>
              I like building the parts of an application that make it dependable: authentication,
              records, permissions, reports, state, and database-backed workflows.
            </p>
            <p>
              My AI training work sharpened the same habits I use as a developer: precise debugging,
              readable solutions, careful evaluation, and explaining code clearly.
            </p>
          </div>
        </section>

        <section id="work" className="section-shell section-block">
          <div className="section-heading">
            <p className="kicker">Selected work</p>
            <h2>Projects with real workflows behind them</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual ${project.image ? '' : 'project-fallback'}`}>
                  {project.image ? (
                    <img src={project.image} alt={project.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                  ) : (
                    <div className="fallback-panel" aria-hidden="true">
                      <span>portal.users</span>
                      <span>auth.roles</span>
                      <span>realtime.profiles</span>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <div>
                    <p className="project-index">0{index + 1}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <ul className="impact-list">
                    {project.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    )}
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Source code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skill-section">
          <div className="section-shell skill-grid">
            <div className="section-heading">
              <p className="kicker">Toolbox</p>
              <h2>Comfortable across product, UI, and data-backed development</h2>
            </div>
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section-shell section-block resume-grid">
          <div className="section-heading">
            <p className="kicker">Resume</p>
            <h2>Recent experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className="timeline-date">{item.date}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-grid">
            <div>
              <p className="kicker">Contact</p>
              <h2>Let&apos;s build something useful.</h2>
              <p>
                I am available for backend, full-stack, and junior developer opportunities. The fastest
                way to reach me is email.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:hernandezgio16@gmail.com">
                <span>Email</span>
                hernandezgio16@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/giohernandez16" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                /in/giohernandez16
              </a>
              <a href="https://github.com/glytch21" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                @glytch21
              </a>
              <a href="tel:+639356294066">
                <span>Phone</span>
                +63 935 629 4066
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell footer-inner">
          <span>&copy; {year} Gio Aaron Hernandez</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --bg: #f4f1ea;
          --surface: #fffcf5;
          --surface-strong: #ffffff;
          --text: #17201b;
          --muted: #647067;
          --line: rgba(23, 32, 27, 0.14);
          --brand: #0f766e;
          --brand-strong: #115e59;
          --accent: #b45309;
          --ink: #101828;
          --shadow: 0 24px 60px rgba(23, 32, 27, 0.11);
        }

        [data-theme='dark'] {
          --bg: #111712;
          --surface: #18211b;
          --surface-strong: #202b23;
          --text: #eef5ed;
          --muted: #a9b6aa;
          --line: rgba(238, 245, 237, 0.15);
          --brand: #5eead4;
          --brand-strong: #99f6e4;
          --accent: #fbbf24;
          --ink: #f8fafc;
          --shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            linear-gradient(90deg, rgba(15, 118, 110, 0.05) 1px, transparent 1px),
            linear-gradient(0deg, rgba(180, 83, 9, 0.04) 1px, transparent 1px), var(--bg);
          background-size: 42px 42px;
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          max-width: 100%;
        }

        .section-shell {
          width: min(1140px, calc(100% - 40px));
          margin: 0 auto;
        }

        .site-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          align-items: center;
          gap: 18px;
          padding: 14px max(20px, calc((100vw - 1140px) / 2));
          border-bottom: 1px solid var(--line);
          background: color-mix(in srgb, var(--bg) 88%, transparent);
          backdrop-filter: blur(16px);
        }

        .wordmark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          font-size: 14px;
          font-weight: 800;
        }

        .wordmark span {
          display: inline-grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 8px;
          background: var(--text);
          color: var(--bg);
          letter-spacing: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--surface);
          box-shadow: 0 10px 30px rgba(16, 24, 40, 0.06);
        }

        .nav-links a,
        .theme-toggle {
          min-height: 36px;
          border-radius: 999px;
          color: var(--muted);
          font-size: 13px;
          font-weight: 700;
        }

        .nav-links a {
          display: inline-flex;
          align-items: center;
          padding: 0 14px;
        }

        .nav-links a:hover,
        .theme-toggle:hover {
          background: color-mix(in srgb, var(--brand) 12%, transparent);
          color: var(--text);
        }

        .theme-toggle {
          justify-self: end;
          border: 1px solid var(--line);
          background: var(--surface);
          cursor: pointer;
          padding: 0 14px;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          align-items: end;
          gap: 56px;
          min-height: calc(100vh - 66px);
          padding: 72px 0 58px;
        }

        .kicker {
          margin: 0 0 14px;
          color: var(--brand-strong);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          overflow-wrap: anywhere;
        }

        h1 {
          max-width: 860px;
          margin: 0;
          color: var(--ink);
          font-size: clamp(42px, 7vw, 86px);
          line-height: 0.98;
          letter-spacing: 0;
        }

        h2 {
          margin: 0;
          color: var(--ink);
          font-size: clamp(30px, 4.4vw, 54px);
          line-height: 1.02;
          letter-spacing: 0;
        }

        h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          line-height: 1.2;
        }

        .hero-text {
          max-width: 690px;
          margin: 26px 0 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .button {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 0 18px;
          border: 1px solid var(--line);
          font-weight: 800;
          transition: transform 140ms ease, background 140ms ease, color 140ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button.primary {
          border-color: var(--brand-strong);
          background: var(--brand-strong);
          color: var(--bg);
        }

        .button.secondary {
          background: var(--surface);
          color: var(--text);
        }

        .hero-panel {
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          box-shadow: var(--shadow);
          padding: 24px;
        }

        .hero-panel strong {
          display: block;
          margin-top: 8px;
          color: var(--ink);
          font-size: 28px;
          line-height: 1.12;
        }

        .panel-label {
          color: var(--muted);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          margin: 24px 0;
          border: 1px solid var(--line);
          background: var(--line);
        }

        .metrics div {
          min-width: 0;
          padding: 14px;
          background: var(--surface-strong);
        }

        .metrics dt {
          color: var(--accent);
          font-size: 22px;
          font-weight: 800;
        }

        .metrics dd {
          margin: 2px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
        }

        .stack-strip,
        .tag-row,
        .skill-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .stack-strip span,
        .tag-row span,
        .skill-cloud span {
          border: 1px solid var(--line);
          border-radius: 999px;
          background: color-mix(in srgb, var(--surface-strong) 86%, var(--brand) 14%);
          color: var(--text);
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          padding: 9px 12px;
        }

        .intro-band,
        .skill-section,
        .contact-section {
          border-block: 1px solid var(--line);
          background: var(--surface);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
          padding-block: 34px;
        }

        .intro-grid p,
        .contact-section p,
        .project-content p,
        .timeline-item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .section-block {
          padding-block: 92px;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 34px;
        }

        .project-list {
          display: grid;
          gap: 22px;
        }

        .project-card {
          display: grid;
          grid-template-columns: minmax(300px, 0.95fr) minmax(0, 1.05fr);
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          box-shadow: 0 16px 50px rgba(16, 24, 40, 0.08);
        }

        .project-visual {
          min-height: 310px;
          border-right: 1px solid var(--line);
          background: #d7e8dd;
        }

        .project-visual img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-card:first-child .project-visual img,
        .project-card:nth-child(3) .project-visual img {
          object-fit: contain;
          padding: 18px;
          background: #e7eee8;
        }

        .project-fallback {
          display: grid;
          place-items: center;
          background:
            linear-gradient(135deg, rgba(15, 118, 110, 0.2), rgba(180, 83, 9, 0.12)),
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(23, 32, 27, 0.08) 21px);
        }

        .fallback-panel {
          display: grid;
          gap: 12px;
          width: min(78%, 330px);
        }

        .fallback-panel span {
          border: 1px solid rgba(23, 32, 27, 0.16);
          border-radius: 8px;
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          color: var(--ink);
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 13px;
          padding: 14px 16px;
          box-shadow: 0 14px 30px rgba(16, 24, 40, 0.08);
        }

        .project-content {
          display: grid;
          align-content: start;
          gap: 18px;
          padding: 28px;
        }

        .project-index {
          margin-bottom: 10px;
          color: var(--accent);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .project-content h3 {
          margin-bottom: 10px;
        }

        .impact-list {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .impact-list li {
          position: relative;
          padding-left: 18px;
          color: var(--text);
          font-size: 14px;
          font-weight: 700;
        }

        .impact-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 7px;
          height: 7px;
          border-radius: 2px;
          background: var(--brand);
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 4px;
        }

        .project-links a {
          color: var(--brand-strong);
          font-size: 14px;
          font-weight: 900;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .skill-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
          align-items: start;
          gap: 48px;
          padding-block: 72px;
        }

        .skill-cloud span {
          border-radius: 8px;
          font-size: 15px;
          padding: 14px 16px;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: minmax(260px, 0.7fr) minmax(0, 1fr);
          gap: 52px;
        }

        .timeline {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--line);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 170px minmax(0, 1fr);
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }

        .timeline-date,
        .company {
          color: var(--accent);
          font-size: 13px;
          font-weight: 900;
        }

        .timeline-item h3 {
          margin-bottom: 4px;
          font-size: 20px;
        }

        .timeline-item .company {
          margin-bottom: 10px;
        }

        .contact-section {
          padding-block: 78px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.8fr);
          gap: 56px;
          align-items: start;
        }

        .contact-grid h2 {
          margin-bottom: 18px;
        }

        .contact-links {
          display: grid;
          gap: 10px;
        }

        .contact-links a {
          display: grid;
          gap: 5px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface-strong);
          color: var(--text);
          padding: 16px;
          font-weight: 800;
          box-shadow: 0 12px 36px rgba(16, 24, 40, 0.06);
        }

        .contact-links span {
          color: var(--muted);
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .footer {
          padding-block: 24px;
          background: var(--bg);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: var(--muted);
          font-size: 14px;
          font-weight: 700;
        }

        .footer a {
          color: var(--brand-strong);
        }

        @media (max-width: 920px) {
          .site-nav {
            grid-template-columns: 1fr auto;
          }

          .nav-links {
            display: none;
          }

          .hero,
          .intro-grid,
          .skill-grid,
          .resume-grid,
          .contact-grid,
          .project-card {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
            padding-top: 54px;
          }

          .project-visual {
            min-height: 240px;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }
        }

        @media (max-width: 620px) {
          .section-shell {
            width: min(100% - 28px, 1140px);
          }

          .site-nav {
            padding-inline: 14px;
          }

          .wordmark {
            font-size: 13px;
          }

          h1 {
            font-size: 42px;
          }

          .hero-text {
            font-size: 16px;
          }

          .hero-panel,
          .project-content {
            padding: 20px;
          }

          .metrics {
            grid-template-columns: 1fr;
          }

          .section-block {
            padding-block: 64px;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .footer-inner,
          .hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .button {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
