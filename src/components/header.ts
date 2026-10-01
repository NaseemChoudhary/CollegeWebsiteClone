const topLinks = ['Circular and Notices', 'Incubation', 'News', 'Events', 'Gallery', 'Public Self-Disclosure', 'UGC Undertaking', 'Conference']
const mainLinks = ['Home', 'About Us', 'Academics', 'Admissions', 'Campus Life', 'Research', 'Contact']

export function header() {
  return `
    <header class="site-header">
      <div class="topbar"><div class="container topbar-inner"><span>An Autonomous Institute Affiliated to the University of Mumbai</span><nav class="top-links" aria-label="Utility navigation">${topLinks.map((link) => `<a href="#">${link}</a>`).join('')}</nav></div></div>
      <div class="brandbar container"><a href="#" class="brand" aria-label="Kalsekar Technical Campus home"><img src="https://cdn.aiktc.ac.in/wp-content/uploads/2022/06/KTC-LOGO-1.png?strip=all" alt="Kalsekar Technical Campus" /></a><div class="brand-actions"><button class="search-button" data-search aria-label="Open search">⌕ <span>Search...</span></button><button class="menu-toggle" data-menu-toggle aria-label="Open menu" aria-expanded="false">☰</button></div></div>
      <nav class="main-nav" data-mobile-nav aria-label="Main navigation"><div class="container nav-inner">${mainLinks.map((link, index) => `<a class="${index === 0 ? 'active' : ''}" href="#${link.toLowerCase().replaceAll(' ', '-')}">${link}${['About Us', 'Academics', 'Admissions', 'Campus Life'].includes(link) ? '<span>⌄</span>' : ''}</a>`).join('')}<a class="nav-apply" href="#admissions" data-admissions>Apply Now <span>↗</span></a></div></nav>
    </header>
  `
}
