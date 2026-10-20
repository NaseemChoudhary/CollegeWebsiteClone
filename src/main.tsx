import { useEffect, useRef, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./style.css";
import "./refinements.css";
import { about } from "./components/about";
import { events, news, videos } from "./components/content";
import { attendanceSection, setupAttendanceLookup } from "./components/attendance";
import { hero } from "./components/hero";
import { identity } from "./components/identity";
import { programsSection } from "./components/programs";

const topLinks = [
  ["Circular and Notices", "https://aiktc.ac.in/notices/"],
  ["Incubation", "https://aiktc.ac.in/incubation/"],
  ["Gallery", "https://aiktc.ac.in/gallery/"],
  ["Public Self-Disclosure", "https://aiktc.ac.in/public-self-disclosure/"],
  ["UGC Undertaking", "https://aiktc.ac.in/ugc-undertaking/"],
  ["Conference", "https://conference.aiktc.ac.in/"],
];

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Programs", "/programs"],
  ["Attendance", "/attendance"],
  ["News", "/news"],
  ["Events", "/events"],
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchDialog = useRef<HTMLDialogElement>(null);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>An Autonomous Institute Affiliated to the University of Mumbai</span>
          <nav className="top-links" aria-label="Utility navigation">
            {topLinks.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            ))}
            <NavLink to="/news">News</NavLink>
            <NavLink to="/events">Events</NavLink>
          </nav>
        </div>
      </div>
      <div className="brandbar container">
        <Link to="/" className="brand" aria-label="Kalsekar Technical Campus home">
          <img
            src="https://cdn.aiktc.ac.in/wp-content/uploads/2022/06/KTC-LOGO-1.png?strip=all"
            alt="Kalsekar Technical Campus"
          />
        </Link>
        <div className="brand-actions">
          <button
            className="search-button"
            aria-label="Open search"
            onClick={() => searchDialog.current?.showModal()}
          >
            ⌕ <span>Search...</span>
          </button>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
        </div>
      </div>
      <nav
        className={`main-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="container nav-inner">
          {navigation.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
          <Link className="nav-apply" to="/admissions" onClick={() => setMenuOpen(false)}>
            Apply Now <span>↗</span>
          </Link>
        </div>
      </nav>
      <dialog className="search-dialog" ref={searchDialog}>
        <form method="dialog" className="search-form">
          <button className="dialog-close" aria-label="Close search">
            &times;
          </button>
          <label htmlFor="site-search">Search AIKTC</label>
          <div className="search-input-wrap">
            <input id="site-search" type="search" placeholder="What are you looking for?" />
            <button className="button button-primary">Search</button>
          </div>
        </form>
      </dialog>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="college-logo light">
            <span>AI</span>
            <div>
              <strong>ANJUMAN-I-ISLAM'S</strong>
              <b>KALSEKAR TECHNICAL CAMPUS</b>
              <small>Knowledge • Technology • Character</small>
            </div>
          </div>
          <p>Empowering students through knowledge, innovation and character.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/about">About AIKTC</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/attendance">Attendance</Link>
          <Link to="/admissions">Admissions</Link>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/news">News &amp; Notices</Link>
          <Link to="/events">Events</Link>
          <a href="https://aiktc.ac.in/gallery/" target="_blank" rel="noreferrer">Gallery</a>
          <a href="https://aiktc.ac.in/" target="_blank" rel="noreferrer">Official AIKTC Website</a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Near Thakur Mall, Kalsekar Campus<br />Panvel, Navi Mumbai – 410206</p>
          <a href="tel:+919137123439">+91 91371 23439</a>
          <a href="mailto:info@aiktc.ac.in">info@aiktc.ac.in</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 Kalsekar Technical Campus. All rights reserved.</span>
          <span>Follow us&nbsp; · &nbsp;Facebook&nbsp; · &nbsp;Instagram&nbsp; · &nbsp;YouTube</span>
        </div>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

function Markup({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function HomePage() {
  return (
    <>
      <Markup html={identity()} />
      <Markup html={hero()} />
      <Markup html={programsSection()} />
      <Markup html={news()} />
      <Markup html={events()} />
      <Markup html={videos()} />
      <section className="admissions-cta">
        <div className="container admissions-inner">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>Build your future<br /><em>at AIKTC.</em></h2>
          </div>
          <div>
            <p>Applications are open for our Engineering, Pharmacy and Architecture programmes.</p>
            <Link className="hero-primary" to="/admissions">Explore admissions <span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProgramsPage() {
  return <><PageIntro eyebrow="ACADEMICS" title="Find your programme."><p>Explore the schools and programmes offered at Kalsekar Technical Campus.</p></PageIntro><Markup html={programsSection()} /></>;
}

function AttendancePage() {
  return <><PageIntro eyebrow="STUDENT SERVICES" title="Attendance portal."><p>Check the sample attendance record associated with a student roll number.</p></PageIntro><Markup html={attendanceSection()} /></>;
}

function NewsPage() {
  return <><PageIntro eyebrow="CAMPUS UPDATES" title="News & notices."><p>Recent updates from Kalsekar Technical Campus.</p></PageIntro><Markup html={news()} /></>;
}

function EventsPage() {
  return <><PageIntro eyebrow="CAMPUS LIFE" title="Events at AIKTC."><p>Discover recent events, workshops, and campus activities.</p></PageIntro><Markup html={events()} /></>;
}

function AboutPage() {
  return <><PageIntro eyebrow="ABOUT AIKTC" title="Knowledge. Technology. Character."><p>Learn about Kalsekar Technical Campus, its vision, mission, and community.</p></PageIntro><Markup html={about()} /></>;
}

function AdmissionsPage({ openEnquiry }: { openEnquiry: () => void }) {
  return <><PageIntro eyebrow="YOUR NEXT CHAPTER STARTS HERE" title="Admissions enquiry."><p>Explore programmes and send an enquiry to the admissions team.</p><button className="hero-primary" onClick={openEnquiry}>Begin your application <span>↗</span></button></PageIntro><Markup html={programsSection()} /></>;
}

function AttendanceEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/attendance") setupAttendanceLookup();

    const counters = document.querySelectorAll<HTMLElement>("[data-counter]");
    const observers = Array.from(counters, (counter) => {
      const target = Number(counter.dataset.counter ?? 0);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 36));
      const tick = () => {
        current = Math.min(target, current + step);
        counter.textContent = current.toLocaleString();
        if (current < target) requestAnimationFrame(tick);
      };
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          tick();
          observer.disconnect();
        }
      }, { threshold: 0.4 });
      observer.observe(counter);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [pathname]);

  return null;
}

function App() {
  const admissionDialog = useRef<HTMLDialogElement>(null);
  const location = useLocation();
  const titles: Record<string, string> = {
    "/": "AIKTC | Kalsekar Technical Campus",
    "/about": "About AIKTC",
    "/programs": "Programs | AIKTC",
    "/attendance": "Attendance | AIKTC",
    "/news": "News | AIKTC",
    "/events": "Events | AIKTC",
    "/admissions": "Admissions | AIKTC",
  };
  document.title = titles[location.pathname] ?? titles["/"];

  const openEnquiry = () => admissionDialog.current?.showModal();

  return (
    <>
      <SiteHeader />
      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/admissions" element={<AdmissionsPage openEnquiry={openEnquiry} />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <SiteFooter />
      <dialog className="admission-dialog" ref={admissionDialog}>
        <form method="dialog" className="admission-form">
          <button className="dialog-close" aria-label="Close admissions form">&times;</button>
          <p className="eyebrow">START YOUR JOURNEY</p>
          <h2>Admissions enquiry</h2>
          <p className="form-intro">Leave your details and our admissions team will get in touch with you.</p>
          <div className="form-grid">
            <label>Full name<input required type="text" placeholder="Your name" /></label>
            <label>Phone number<input required type="tel" placeholder="+91" /></label>
            <label>Email address<input required type="email" placeholder="you@example.com" /></label>
            <label>Programme<select required defaultValue=""><option value="">Select programme</option><option>B.Tech Engineering</option><option>B.Arch Architecture</option><option>B.Pharm Pharmacy</option><option>Diploma programmes</option></select></label>
          </div>
          <button className="button button-primary submit-button" value="submitted">Submit enquiry <span>↗</span></button>
        </form>
      </dialog>
      <AttendanceEffects />
    </>
  );
}

createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);