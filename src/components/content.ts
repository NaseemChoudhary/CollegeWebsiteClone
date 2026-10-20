type Card = { image: string; title: string; date?: string; href?: string };
const image = (name: string) =>
  `https://cdn.aiktc.ac.in/wp-content/uploads/${name}${name.includes("?") ? "" : "?strip=all"}`;
const newsCards: Card[] = [
  {
    image: image("2026/09/Mahakumbh-2026-Career-Fair.jpeg"),
    title: "AIKTC Central Library organizes One-Day Hands-on Training Workshop",
    href: "https://aiktc.ac.in/news/aiktc-central-library-organizes-one-day-hands-on-training-workshop/",
  },
  {
    image: image("2026/09/Mahakumbh-2026-Career.jpeg"),
    title: "Option Form 1 Filling for FIRST YEAR B.Tech Admissions Has Started",
    href: "https://aiktc.ac.in/news/option-form-1-filling-for-first-year-b-tech-admissions-has-started/",
  },
  {
    image: image("2026/09/Rozgaar-Mela.jpeg"),
    title:
      "AIKTC Organizes 5-Day Online FDP on Strategic Industry–Institute Interaction",
    href: "https://aiktc.ac.in/news/aiktc-organizes-5-day-online-fdp-on-strategic-industry-institute-interaction/",
  },
];
const eventCards: Card[] = [
  {
    image: image("2025/05/AIKTC-Infrastructure-2025-01.jpg"),
    title:
      "Dermatology Camp at AIKTC School of Pharmacy Promotes Skin Health Awareness",
    href: "https://aiktc.ac.in/events/dermatology-camp-at-aiktc-school-of-pharmacy-promotes-skin-health-awareness/",
  },
  {
    image: image("2026/09/Mahakumbh-2026-Career-Fair.jpeg"),
    title: "Har ghar tiranga Rally",
    href: "https://aiktc.ac.in/events/har-ghar-tiranga-rally/",
  },
  {
    image: image("2026/09/Rozgaar-Mela.jpeg"),
    date: "August 1, 2026",
    title:
      "Diploma in Pharmacy passing certificate distribution ceremony and alumni meet",
    href: "https://aiktc.ac.in/events/diploma-in-pharmacy-passing-certificate-distribution-ceremony-and-alumni-meet/",
  },
];
const videoCards: Card[] = [
  {
    image: image("2026/02/Anjuman-I-Islam-Alumni-Celebrate-150-Years.jpg"),
    title: "Anjuman-I-Islam Alumni Meet 2026 – Dubai",
  },
  {
    image: image("2025/07/Industry-and-Acadmia-2025.jpg"),
    title: "Industry and Academia Interaction 2025",
  },
  {
    image: image("2025/05/AIKTC-Infrastructure-2025-01.jpg"),
    title: "AIKTC campus and student life",
  },
];
function cards(items: Card[], kind: string) {
  return items
    .map(
      (card) =>
        `<article class="content-card ${kind}"><div class="card-image" style="background-image:url('${card.image}')">${kind === "video" ? '<span class="play">▶</span>' : ""}</div><div class="card-body">${card.date ? `<small class="date">◷ ${card.date}</small>` : ""}<h3>${card.title}</h3>${kind !== "video" ? `<a class="text-link" href="${card.href ?? "#"}"${card.href ? ' target="_blank" rel="noreferrer"' : ""}>Continue <span>→</span></a>` : ""}</div></article>`,
    )
    .join("");
}
function section(
  id: string,
  eyebrow: string,
  title: string,
  content: string,
  action: string,
) {
  const actionUrl =
    id === "news"
      ? "https://aiktc.ac.in/news/"
      : id === "events"
        ? "https://aiktc.ac.in/events/"
        : "https://www.youtube.com/c/aiktctv";
  return `<section class="content-section ${id}" id="${id}"><div class="container section-heading"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div><a class="outline-button" href="${actionUrl}" target="_blank" rel="noreferrer">${action} <span>↗</span></a></div><div class="container cards-grid">${content}</div></section>`;
}
export function news() {
  return section(
    "news",
    "LATEST UPDATES",
    "What’s happening @ Kalsekar Technical Campus.",
    cards(newsCards, "news"),
    "View all news",
  );
}
export function events() {
  return section(
    "events",
    "MARK YOUR CALENDAR",
    "Latest events at Kalsekar Technical Campus",
    cards(eventCards, "event"),
    "View all events",
  );
}
export function videos() {
  return section(
    "videos",
    "EXPLORE AIKTC",
    "Campus stories & videos",
    cards(videoCards, "video"),
    "Visit our YouTube",
  );
}
