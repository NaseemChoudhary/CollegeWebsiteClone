type AttendanceRecord = {
  percentage: number;
  present: number;
  total: number;
  subjects: { name: string; percentage: number }[];
};

const demoAttendance: Record<string, AttendanceRecord> = {
  "24co23": {
    percentage: 86,
    present: 43,
    total: 50,
    subjects: [
      { name: "Engineering Mathematics", percentage: 88 },
      { name: "Data Structures", percentage: 82 },
      { name: "Digital Logic Design", percentage: 90 },
    ],
  },
  "23co41": {
    percentage: 78,
    present: 39,
    total: 50,
    subjects: [
      { name: "Database Systems", percentage: 76 },
      { name: "Operating Systems", percentage: 82 },
      { name: "Computer Networks", percentage: 76 },
    ],
  },
  "24co17": {
    percentage: 92,
    present: 46,
    total: 50,
    subjects: [
      { name: "Engineering Mathematics", percentage: 94 },
      { name: "Data Structures", percentage: 88 },
      { name: "Digital Logic Design", percentage: 94 },
    ],
  },
  "23co08": {
    percentage: 72,
    present: 36,
    total: 50,
    subjects: [
      { name: "Database Systems", percentage: 70 },
      { name: "Operating Systems", percentage: 74 },
      { name: "Computer Networks", percentage: 72 },
    ],
  },
  "24co36": {
    percentage: 84,
    present: 42,
    total: 50,
    subjects: [
      { name: "Engineering Mathematics", percentage: 80 },
      { name: "Data Structures", percentage: 86 },
      { name: "Digital Logic Design", percentage: 86 },
    ],
  },
  "23co52": {
    percentage: 96,
    present: 48,
    total: 50,
    subjects: [
      { name: "Database Systems", percentage: 96 },
      { name: "Operating Systems", percentage: 94 },
      { name: "Computer Networks", percentage: 98 },
    ],
  },
};

export function attendanceSection() {
  return `<section class="attendance-section" id="attendance"><div class="container attendance-layout"><div class="attendance-intro"><p class="eyebrow">STUDENT SERVICES</p><h2>Check your attendance.</h2><p>Enter a roll number to view its attendance summary.</p><p class="attendance-demo-note">Demo only: these sample records are not connected to college systems.</p></div><div class="attendance-tool"><form class="attendance-form" id="attendance-form"><label for="attendance-roll">Student roll number</label><div class="attendance-input-row"><input id="attendance-roll" name="roll" type="text" placeholder="e.g. 24CO23" autocomplete="off" required /><button class="button button-primary" type="submit">Check <span>→</span></button></div><p class="attendance-examples">Try: 24CO23 · 23CO41 · 24CO17 · 23CO08 · 24CO36 · 23CO52</p></form><div class="attendance-result" id="attendance-result" aria-live="polite" aria-atomic="true"></div></div></div></section>`;
}

export function setupAttendanceLookup() {
  const form = document.querySelector<HTMLFormElement>("#attendance-form");
  const input = document.querySelector<HTMLInputElement>("#attendance-roll");
  const result = document.querySelector<HTMLDivElement>("#attendance-result");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const roll = input?.value.trim().toLowerCase() ?? "";
    const record = demoAttendance[roll];

    if (!record) {
      const message = document.createElement("p");
      const rollLabel = document.createElement("strong");
      message.className = "attendance-error";
      rollLabel.textContent = roll.toUpperCase();
      message.append(
        "No demo record found for ",
        rollLabel,
        ". Check the roll number and try again.",
      );
      result?.replaceChildren(message);
      return;
    }

    const status =
      record.percentage >= 75
        ? "Meets 75% requirement"
        : "Below 75% requirement";
    const statusClass =
      record.percentage >= 75
        ? "attendance-status-good"
        : "attendance-status-low";
    const subjects = record.subjects
      .map(
        (subject) =>
          `<div class="attendance-subject"><span>${subject.name}</span><strong>${subject.percentage}%</strong></div>`,
      )
      .join("");

    result!.innerHTML = `<div class="attendance-summary"><div class="attendance-summary-top"><div><span class="attendance-roll-label">ROLL NUMBER</span><strong class="attendance-roll-value">${roll.toUpperCase()}</strong></div><span class="attendance-status ${statusClass}">${status}</span></div><div class="attendance-overall"><strong>${record.percentage}%</strong><span>overall attendance</span></div><div class="attendance-meter" role="img" aria-label="${record.percentage}% attendance"><span style="width:${record.percentage}%"></span></div><p class="attendance-count">${record.present} of ${record.total} classes attended</p><div class="attendance-subjects"><h3>Subject breakdown</h3>${subjects}</div></div>`;
  });
}
