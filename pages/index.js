import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

export default function Portfolio() {
    const [theme, setTheme] = useState('light')
    const [mounted, setMounted] = useState(false)

    const calubcubImage = '/images/calubcub.png'
    const codecrawlersImage = '/images/codecrawlers.png'

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
        const initial = stored === 'dark' || stored === 'light' ? stored : 'light'
        setTheme(initial)
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('theme', theme)
    }, [theme, mounted])

    const isDark = theme === 'dark'
    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    const year = useMemo(() => new Date().getFullYear(), [])

    const NavLink = ({ href, label }) => (
        <a className="nav-link" href={href} aria-label={label}>
            {label}
        </a>
    )

    return (
        <>
            <Head>
                <title>Gio Aaron Hernandez — Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="A modern single-page portfolio with a floating navbar, theme toggle, and smooth scrolling." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>

            <nav className="floating-nav" role="navigation" aria-label="Primary">
                <div className="nav-inner">
                    <a className="brand" href="#top" aria-label="Home">
                        <span className="logo-dot" />
                        <span className="brand-text">Gio Hernandez</span>
                    </a>
                    <div className="nav-links">
                        <NavLink href="#about" label="About Me" />
                        <NavLink href="#projects" label="Projects" />
                        <NavLink href="#resume" label="Resume" />
                        <NavLink href="#contact" label="Contacts" />
                    </div>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {isDark ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <header id="top" className="hero">
                <div className="hero-content">
                    <p className="eyebrow">Hello, I’m</p>
                    <h1 className="title">Gio Aaron Hernandez</h1>
                    <p className="subtitle">AI Trainer and Backend Web Developer</p>
                    <div className="cta-row">
                        <a href="#projects" className="btn primary">View Projects</a>
                        <a href="#contact" className="btn ghost">Get in Touch</a>
                    </div>
                </div>
                <div className="backdrop-gradients" aria-hidden>
                    <span className="blob b1" />
                    <span className="blob b2" />
                    <span className="blob b3" />
                </div>
            </header>

            <section id="about" className="section">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <p className="lead">
                        Backend web developer and AI trainer focused on JavaScript and TypeScript. I build responsive, accessible apps
                        with Next.js and React, ship to Vercel, and work with Supabase and MySQL for real‑time, secure data.
                    </p>
                    <div className="grid two">
                        <div className="card">
                            <h3>Core Skills</h3>
                            <ul className="pill-list">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Next.js</li>
                                <li>React</li>
                                <li>HTML & CSS</li>
                                <li>Tailwind CSS</li>
                                <li>Supabase</li>
                                <li>MySQL</li>
                                <li>Vercel</li>
                                <li>Git & GitHub</li>
                                <li>VS Code</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3>What I value</h3>
                            <p>
                                Pragmatic solutions, thoughtful UX, clean abstractions, and continuous learning. Strong focus on performance and
                                accessibility. Bachelor of Science in Information Technology (Westmead International School, 2020–2024).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section alt">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="grid three">
                        <article className="project-card">
                            <div className="project-media zoom-out">
                                <img src={calubcubImage} alt="Calubcub 1st High School" loading="lazy" />
                            </div>
                            <div className="project-body">
                                <h3>Calubcub 1st High School IMS</h3>
                                <p>
                                    Built attendance, grading, and records features with automated PDF reports and OTP email auth to streamline
                                    administration and security.
                                </p>
                                <div className="tag-row">
                                    <span className="tag">Next.js</span>
                                    <span className="tag">Tailwind CSS</span>
                                    <span className="tag">Supabase</span>
                                    <span className="tag">pdf-lib</span>
                                    <span className="tag">Nodemailer</span>
                                </div>
                                <div className="project-actions">
                                    <a className="btn small secondary" target="_blank" href="https://calubcub.vercel.app/">Live Demo</a>
                                    <a className="btn small ghost" target="_blank" href="https://github.com/glytch21/info-management-system">Code</a>
                                </div>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-media" />
                            <div className="project-body">
                                <h3>Alangilan SHS Portal</h3>
                                <p>
                                    Full‑stack portal managing student, parent, and teacher profiles with secure auth and real‑time updates for
                                    efficient information access and administration.
                                </p>
                                <div className="tag-row">
                                    <span className="tag">TypeScript</span>
                                    <span className="tag">Next.js</span>
                                    <span className="tag">Tailwind CSS</span>
                                    <span className="tag">Supabase</span>
                                </div>
                                <div className="project-actions">
                                    {/* <a className="btn small secondary" href="#">Live Demo</a> */}
                                    <a className="btn small ghost" target="_blank" href="https://github.com/glytch21/student-portal">Code</a>
                                </div>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-media zoom-out">
                                <img src={codecrawlersImage} alt="CodeCrawlers: JS Learning Tool" loading="lazy" />
                            </div>
                            <div className="project-body">
                                <h3>CodeCrawlers: JS Learning Tool</h3>
                                <p>
                                    Gamified JavaScript learning experience with interactive levels, progress saving, and code editing via CodeMirror
                                    and HTML Canvas.
                                </p>
                                <div className="tag-row">
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">Next.js</span>
                                    <span className="tag">Tailwind CSS</span>
                                    <span className="tag">CodeMirror</span>
                                    <span className="tag">Supabase</span>
                                </div>
                                <div className="project-actions">
                                    {/*<a className="btn small secondary" href="#">Live Demo</a>
                                    */}
                                    <a className="btn small ghost" target="_blank" href="https://github.com/glytch21/codecrawlers.github.io">Code</a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="resume" className="section">
                <div className="container">
                    <h2 className="section-title">Resume</h2>


                    {/* <div className="card">
            <p className="lead">Download a PDF of my resume or explore my experience below.</p>
            <div className="cta-row">
              <a className="btn primary" href="#" aria-disabled>
                Download Resume
              </a>
              <a className="btn ghost" href="#contact">Request via Email</a>
            </div>
          </div> */}

                    <div className="timeline">
                        <div className="t-item">
                            <div className="t-dot" />
                            <div className="t-content">
                                <h3>AI Trainer – Coding — Outlier AI</h3>
                                <p>December 2024 — May 2025</p>
                                <p>Developed and reviewed programming solutions, debugged code, and created example projects in JavaScript and Python to improve LLM coding capabilities.</p>
                            </div>
                        </div>
                        <div className="t-item">
                            <div className="t-dot" />
                            <div className="t-content">
                                <h3>Web Developer — Intern — Innovatto IT Consultancy</h3>
                                <p>July 2023 — November 2023</p>
                                <p>Built a chat support ticketing system using TypeScript, Next.js, Tailwind CSS, and Supabase; optimized responsive performance and integrated secure authentication.</p>
                            </div>
                        </div>
                        <div className="t-item">
                            <div className="t-dot" />
                            <div className="t-content">
                                <h3>B.S. in Information Technology — Westmead International School</h3>
                                <p>September 2020 — July 2024</p>
                                <p>Coursework and projects focused on full‑stack web development and modern JavaScript ecosystems.</p>
                            </div>
                        </div>

                    </div>
                    <a className="btn primary" href="#" aria-disabled>
                        Download Resume
                    </a>
                </div>
            </section>

            <section id="contact" className="section alt">
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <div className="card">
                        <p className="lead">Have a project in mind? Let’s talk.</p>
                        <div className="contact-grid">
                            <a className="contact-card" href="mailto:hernandezgio16@gmail.com">
                                <span className="contact-emoji">✉️</span>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <div className="contact-value">hernandezgio16@gmail.com</div>
                                </div>
                            </a>
                            <a className="contact-card" href="https://www.linkedin.com/in/giohernandez16" target="_blank" rel="noreferrer">
                                <span className="contact-emoji">💼</span>
                                <div>
                                    <div className="contact-label">LinkedIn</div>
                                    <div className="contact-value">/in/giohernandez16</div>
                                </div>
                            </a>
                            <a className="contact-card" href="https://github.com/glytch21" target="_blank" rel="noreferrer">
                                <span className="contact-emoji">💻</span>
                                <div>
                                    <div className="contact-label">GitHub</div>
                                    <div className="contact-value">@glytch21</div>
                                </div>
                            </a>
                            <a className="contact-card" href="tel:+639356294066">
                                <span className="contact-emoji">📱</span>
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <div className="contact-value">(+63) 935 629 4066</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container footer-inner">
                    <span>© {year} Gio Aaron Hernandez</span>
                    <a className="link" href="#top">Back to top</a>
                </div>
            </footer>

            <style jsx global>{`
        :root {
          --bg: #ffffff;
          --text: #0f172a;
          --muted: #475569;
          --card: rgba(15, 23, 42, 0.04);
          --card-stroke: rgba(15, 23, 42, 0.08);
          --brand: #6d28d9;
          --brand-2: #0ea5e9;
          --accent: #22c55e;
          --shadow: 0 10px 30px rgba(2, 6, 23, 0.1);
        }
        [data-theme='dark'] {
          --bg: #0b1220;
          --text: #e2e8f0;
          --muted: #94a3b8;
          --card: rgba(148, 163, 184, 0.06);
          --card-stroke: rgba(148, 163, 184, 0.12);
          --brand: #8b5cf6;
          --brand-2: #38bdf8;
          --accent: #4ade80;
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        html { scroll-behavior: smooth; }
        html, body, #__next { height: 100%; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
          background: var(--bg);
          color: var(--text);
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        /* Decorative, theme-aware background */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(1000px 600px at -10% -10%, color-mix(in oklab, var(--brand) 9%, transparent) 0%, transparent 60%),
            radial-gradient(1000px 600px at 110% -10%, color-mix(in oklab, var(--brand-2) 9%, transparent) 0%, transparent 60%),
            radial-gradient(900px 500px at 50% 110%, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 60%),
            repeating-linear-gradient(0deg, color-mix(in oklab, var(--text) 4%, transparent) 0 1px, transparent 1px 24px),
            repeating-linear-gradient(90deg, color-mix(in oklab, var(--text) 4%, transparent) 0 1px, transparent 1px 24px);
          opacity: 0.18;
          pointer-events: none;
          z-index: 0;
        }
        #__next { position: relative; z-index: 1; }

        * { scrollbar-width: thin; scrollbar-color: rgba(100,116,139,0.5) transparent; }
        *::-webkit-scrollbar { width: 10px; height: 10px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, var(--brand), var(--brand-2)); border-radius: 999px; }

        a { color: inherit; text-decoration: none; }
        .container { width: min(1120px, 92%); margin: 0 auto; }
        .section { padding: 96px 0; scroll-margin-top: 100px; }
        .section.alt { background: linear-gradient(180deg, transparent, var(--card)); }
        .section-title { font-size: 28px; font-weight: 700; margin: 0 0 24px; }
        .lead { color: var(--muted); line-height: 1.8; }
        .grid { display: grid; gap: 20px; }
        .grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        @media (max-width: 900px) { .grid.two, .grid.three { grid-template-columns: 1fr; } }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0)) padding-box,
                      linear-gradient(180deg, var(--card-stroke), transparent) border-box;
          border: 1px solid transparent;
          border-radius: 16px;
          padding: 24px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(10px);
        }

        .btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 18px; border-radius: 999px; font-weight: 600; border: 1px solid transparent; transition: transform .12s ease, box-shadow .2s ease, background .2s ease; }
        .btn.primary { background: linear-gradient(90deg, var(--brand), var(--brand-2)); color: white; box-shadow: 0 10px 20px rgba(99,102,241,0.25); }
        .btn.primary:hover { transform: translateY(-1px); box-shadow: 0 14px 28px rgba(99,102,241,0.35); }
        .btn.ghost { border-color: var(--card-stroke); background: transparent; color: var(--text); }
        .btn.ghost:hover { background: var(--card); }
        .btn.secondary { background: color-mix(in oklab, var(--brand-2) 12%, var(--bg)); color: var(--text); border-color: color-mix(in oklab, var(--brand-2) 40%, transparent); }
        .btn.secondary:hover { background: color-mix(in oklab, var(--brand-2) 18%, var(--bg)); }
        .btn.small { padding: 8px 12px; font-size: 13px; }
        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }

        .link { color: var(--brand-2); font-weight: 600; }
        .link:hover { text-decoration: underline; }

        .pill-list { display: flex; flex-wrap: wrap; gap: 10px; padding: 0; list-style: none; }
        .pill-list li { padding: 8px 12px; border-radius: 999px; border: 1px solid var(--card-stroke); background: var(--card); }

        .project-card { overflow: hidden; border-radius: 16px; border: 1px solid var(--card-stroke); background: var(--card); box-shadow: var(--shadow); display: grid; grid-template-rows: 160px auto; }
        .project-media { position: relative; background: linear-gradient(135deg, var(--brand), var(--brand-2)); }
        .project-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .project-media.zoom-out img { transform: scale(1); transform-origin: center; }
        .project-media::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.15)); pointer-events: none; }
        .project-body { padding: 20px; }
        .tag-row { display: flex; gap: 8px; margin: 10px 0 12px; flex-wrap: wrap; }
        .tag {
          display: inline-flex;
          align-items: center;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(99,102,241,.12);
          color: var(--brand-2);
          border: 1px solid rgba(99,102,241,.3);
          flex: 0 0 auto;
          max-width: 100%;
          overflow-wrap: anywhere;
        }
        .project-actions { display: flex; gap: 16px; justify-content: flex-end; }

        .timeline { position: relative; margin-top: 24px; }
        .timeline:before { content: ''; position: absolute; left: 16px; top: 0; bottom: 0; width: 2px; background: var(--card-stroke); }
        .t-item { position: relative; padding-left: 48px; margin: 22px 0; }
        .t-dot { position: absolute; left: 8px; top: 6px; width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(90deg, var(--brand), var(--brand-2)); box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand) 20%, transparent); }
        .t-content h3 { margin: 0 0 6px; }
        .t-content p { margin: 4px 0; color: var(--muted); }

        .contact-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; } }
        .contact-card { display: flex; align-items: center; gap: 14px; padding: 16px; border-radius: 14px; border: 1px solid var(--card-stroke); background: var(--card); transition: transform .12s ease, background .2s ease; }
        .contact-card:hover { transform: translateY(-2px); background: linear-gradient(180deg, var(--card), transparent); }
        .contact-emoji { font-size: 22px; }
        .contact-label { font-size: 12px; color: var(--muted); }
        .contact-value { font-weight: 600; }

        .floating-nav { position: fixed; inset: 18px 0 auto; z-index: 50; display: flex; justify-content: center; pointer-events: none; }
        .nav-inner { pointer-events: auto; width: min(980px, 94%); display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; border-radius: 999px; border: 1px solid var(--card-stroke); background: color-mix(in oklab, var(--bg) 70%, transparent); backdrop-filter: blur(10px); box-shadow: var(--shadow); }
        .brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; }
        .brand-text { letter-spacing: 0.3px; }
        .logo-dot { width: 10px; height: 10px; border-radius: 999px; background: linear-gradient(90deg, var(--brand), var(--brand-2)); box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand) 30%, transparent); }
        .nav-links { display: none; gap: 8px; align-items: center; }
        @media (min-width: 720px) { .nav-links { display: flex; } }
        .nav-link { padding: 8px 12px; border-radius: 999px; color: var(--muted); border: 1px solid transparent; }
        .nav-link:hover { border-color: var(--card-stroke); background: var(--card); color: var(--text); }
        .theme-toggle { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 999px; border: 1px solid var(--card-stroke); background: var(--card); color: var(--text); transition: transform .12s ease, background .2s ease; }
        .theme-toggle:hover {cursor:pointer; transform: translateY(-1px); background: linear-gradient(180deg, var(--card), transparent); }

        .hero { position: relative; padding: 160px 0 100px; display: grid; place-items: center; overflow: hidden; }
        .hero-content { text-align: center; z-index: 1; }
        .eyebrow { color: var(--muted); text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin: 0 0 8px; }
        .title { font-size: clamp(36px, 6vw, 64px); line-height: 1.05; margin: 0 0 10px; }
        .subtitle { color: var(--muted); font-size: clamp(16px, 2.2vw, 20px); margin: 0 0 20px; }
        .backdrop-gradients { position: absolute; inset: -20% -10% auto; filter: blur(40px); opacity: .6; }
        .blob { position: absolute; width: 52vmax; height: 52vmax; border-radius: 50%; mix-blend-mode: screen; }
        .b1 { background: radial-gradient(closest-side, var(--brand), transparent 70%); top: -20%; left: -20%; animation: float1 16s ease-in-out infinite; }
        .b2 { background: radial-gradient(closest-side, var(--brand-2), transparent 70%); top: -10%; right: -18%; animation: float2 18s ease-in-out infinite; }
        .b3 { background: radial-gradient(closest-side, var(--accent), transparent 70%); bottom: -20%; left: 20%; animation: float3 20s ease-in-out infinite; }
        @keyframes float1 { 0%,100%{ transform: translate(0,0);} 50%{ transform: translate(20px,-10px);} }
        @keyframes float2 { 0%,100%{ transform: translate(0,0);} 50%{ transform: translate(-16px,12px);} }
        @keyframes float3 { 0%,100%{ transform: translate(0,0);} 50%{ transform: translate(12px,-18px);} }

        .footer { padding: 40px 0; border-top: 1px solid var(--card-stroke); background: linear-gradient(180deg, transparent, var(--card)); }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; }
      `}</style>
        </>
    )
}


