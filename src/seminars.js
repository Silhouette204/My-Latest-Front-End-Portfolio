const dataSeminar = [
  {
    title: "Pre-OJT",
    date:  "June 1, 2026",
    purpose: [
      "Personality in the workplace",
      "Safety in the workplace",
      "Communication in the workplace",
      "Legal Rights in the workplace ",
    ],
    category: "Summer"
  },

  {
    title: "INVESTITURE",
    date:  "October, 2025",
    purpose: "Junior Pinning Ceremony",
    category: "Ceremonial"
  },

  {
    title: "BASIC FRONT END & RESPONSIVE DESIGN",
    date:  "Date: July 6, 2023",
    purpose: "FreeCodeCamp.Org",
    category: [
      "UI/UX",
      "Responsive"
    ]
  },

  {
    title: "STATISTICAL DATA ANALYSIS: DATA ANALYTICS ",
    date:  "Date: July 6, 2023",
    purpose: "Seminar - St.Vincent De Ferrer College",
    category: [
      "Data Analysis",
      "Networking"
    ]
  },

  {
    title: "EMERGING TRENDS AND OPPURTUNITIES FOR FUTURE TECHNOPRENEURS",
    date:  "Date: March 14, 2023",
    purpose: "Seminar - St.Vincent De Ferrer College",
    category: [
      "Technology",
      "Business"
    ]
  },
]

export function renderSeminar() {
  const seminarContainer = document.querySelector('#seminar-container');

  if (!seminarContainer) return;

  seminarContainer.innerHTML = dataSeminar.map(({ title, date, purpose, category }) => {
    
    // 1. KONTROL SA PURPOSE: Kung Array, i-render pababa bilang listahan, kung String, regular na h3 lang
    const renderPurpose = Array.isArray(purpose)
      ? `<ul class="list-disc list-inside space-y-1 text-sm text-dark">
          ${purpose.map(item => `<li>${item}</li>`).join('')}
         </ul>`
      : `<h3 class="text-sm text-dark">${purpose}</h3>`;

    // 2. KONTROL SA CATEGORY: Para hindi rin mag-error o magdikit kung higit sa isa ang category mo
    const renderCategory = Array.isArray(category)
      ? category.map(cat => `<span class="px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs">${cat}</span>`).join('')
      : `<span class="px-3 py-1 rounded-full bg-secondary text-primary font-semibold text-xs">${category}</span>`;

    return `
      <div class="mt-5 flex flex-col gap-4 lg:flex-row justify-between items-start border-b-2 pb-5 border-dark/20 w-full">
        
        <div class="flex flex-col gap-1 max-w-sm">
          <h1 class="font-bold text-lg text-secondary leading-tight">${title}</h1>
          <p class="text-xs text-dark/70">${date.replace('Date: ', '')}</p> </div>

        <div class="flex-1 w-full lg:max-w-md">
          ${renderPurpose}
        </div>

        <div class="flex flex-row flex-wrap items-center gap-2 mt-2 lg:mt-0">
          ${renderCategory}
        </div>

      </div>
    `;
  }).join('');
}

