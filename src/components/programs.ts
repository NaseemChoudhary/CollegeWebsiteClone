const programs = [
  {
    school: "School of Engineering & Technology",
    programs: "Diploma, undergraduate and postgraduate programmes",
    href: "https://soet.aiktc.ac.in/",
    label: "Explore engineering",
  },
  {
    school: "School of Architecture",
    programs: "Bachelor of Architecture",
    href: "https://aiktc.ac.in/bachelor-of-architecture/",
    label: "Explore architecture",
  },
  {
    school: "School of Pharmacy",
    programs: "Diploma, degree and postgraduate programmes",
    href: "https://aiktc.ac.in/school-of-pharmacy/",
    label: "Explore pharmacy",
  },
];

export function programsSection() {
  return `<section class="programs-section" id="programs"><div class="container"><div class="section-heading"><div><p class="eyebrow">FIND YOUR PROGRAMME</p><h2>Where will you make your mark?</h2></div><a class="outline-button" href="https://aiktc.ac.in/programme-finder/" target="_blank" rel="noreferrer">Open programme finder <span>↗</span></a></div><div class="programs-grid">${programs
    .map(
      (program, index) =>
        `<article class="program-item"><span class="program-number">0${index + 1}</span><div><h3>${program.school}</h3><p>${program.programs}</p><a class="text-link" href="${program.href}" target="_blank" rel="noreferrer">${program.label} <span>↗</span></a></div></article>`,
    )
    .join("")}</div></div></section>`;
}
