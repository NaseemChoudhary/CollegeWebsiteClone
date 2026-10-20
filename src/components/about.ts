export function about() {
  return `<section class="about-section" id="about-us"><div class="container about-grid"><div class="about-copy"><p class="eyebrow">WELCOME TO AIKTC</p><h2>Shaping <em>future-ready</em> professionals since 2011.</h2><p>AIKTC is an outstanding technological campus where students are trained and taught by qualified teachers and trainers to attain their full potential.</p><p>We provide the best facilities for quality education, research and practice in Engineering &amp; Technology, Pharmacy and Architecture — from diploma to postgraduate courses.</p><a class="text-link" href="#">Discover our story <span>→</span></a></div><div class="vision-card"><div class="quote">“</div><p class="eyebrow">OUR VISION</p><h3>To be the most sought-after Technical Campus that others would wish to emulate.</h3><div class="mission"><strong>MISSION</strong><span>Creating exuberant engineering professionals.</span></div></div></div><div class="container stat-grid">${[
    ["14", "Years Of Experience", "Started in Year 2011"],
    ["275", "Human Resource", "Faculty and Staff"],
    ["5,350", "Alumni", "Our polished diamonds"],
    ["113", "Placements", "Students placed last year"],
  ]
    .map(
      ([number, title, sub]) =>
        `<div class="stat"><strong data-counter="${number.replace(",", "")}">0</strong><span>${title}</span><small>${sub}</small></div>`,
    )
    .join("")}</div></section>`;
}
