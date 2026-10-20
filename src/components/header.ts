const topLinks = [
  ["Circular and Notices", "https://aiktc.ac.in/notices/"],
  ["Incubation", "https://aiktc.ac.in/incubation/"],
  ["News", "news.html"],
  ["Events", "events.html"],
  ["Gallery", "https://aiktc.ac.in/gallery/"],
  ["Public Self-Disclosure", "https://aiktc.ac.in/public-self-disclosure/"],
  ["UGC Undertaking", "https://aiktc.ac.in/ugc-undertaking/"],
  ["Conference", "https://conference.aiktc.ac.in/"],
];
const mainLinks = [
  ["Home", "index.html", "home"],
  ["About Us", "about.html", "about"],
  ["Academics", "programs.html", "programs"],
  ["Attendance", "attendance.html", "attendance"],
  ["News", "news.html", "news"],
  ["Events", "events.html", "events"],
];

export function header(activePage = "home") {
  return `
    <header class="site-header">
      <div class="topbar"><div class="container topbar-inner"><span>An Autonomous Institute Affiliated to the University of Mumbai</span><nav class="top-links" aria-label="Utility navigation">${topLinks.map(([label, href]) => `<a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`).join("")}</nav></div></div>
      <div class="brandbar container"><a href="index.html" class="brand" aria-label="Kalsekar Technical Campus home"><img src="https://cdn.aiktc.ac.in/wp-content/uploads/2022/06/KTC-LOGO-1.png?strip=all" alt="Kalsekar Technical Campus" /></a><div class="brand-actions"><button class="search-button" data-search aria-label="Open search">⌕ <span>Search...</span></button><button class="menu-toggle" data-menu-toggle aria-label="Open menu" aria-expanded="false">☰</button></div></div>
      <nav class="main-nav" data-mobile-nav aria-label="Main navigation"><div class="container nav-inner">${mainLinks.map(([label, href, key]) => `<a class="${activePage === key ? "active" : ""}" href="${href}"${activePage === key ? ' aria-current="page"' : ""}>${label}</a>`).join("")}<a class="nav-apply" href="index.html#admissions" data-admissions>Apply Now <span>↗</span></a></div></nav>
    </header>
  `;
}
