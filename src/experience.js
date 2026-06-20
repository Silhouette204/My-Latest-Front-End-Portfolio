const dataExp = [
  {
    title: "Computer Grid (Computer Ecommerce)",
    date: "Date: June 7, 2026",
    purpose: "A web design computer hardware Online Store. Take absolute control of your workspace and game. Features zero-latency response tracking, durable ergonomic housing, and fully programmable macros to streamline both your competitive matches and daily coding workflows.",
    category: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Node JS"],
    // Nagdagdag tayo ng images array para dito lang sa specific project na ito lalabas ang mga preview images
    images: [
      "/latest-1.png",
      "/latest-2.png",
      "/latest-3.png"
    ],
    project: "https://product-grid-e-commerce.vercel.app/"
  },
  {
    title: "Parking Management Reservation System",
    date: "Date: April, 2026",
    purpose: "A full-scale Software Engineering capstone project designed to automate and optimize parking lot workflows. The system bridges the gap between drivers and secure facility spaces by providing real-time data tracking, interactive structural grid layouts, and seamless booking logistics to eliminate manual ticketing inefficiencies.",
    category: ["React", "Express", "MongoDB"],
    
  },
  {
    title: "Sales Utility Clerk - SM Fairview (SM Department Store)",
    date: "Date: March 2025 - June 2025",
    purpose: "Data Validation & Auditing: Assisted core inventory clerks in conducting physical audits of incoming school supply deliveries to cross-reference delivery documents and flag stock discrepancies, shortages, or surpluses. Merchandising & Price Management: Assisting customers needs, managed shelf storage allocations and organized structural layout updates for seasonal inventory during high-traffic school-opening periods. Transactional Support: Facilitated storefront retail activities, coordinated directly with logistics teams for secure stock handovers, and resolved customer inquiries efficiently.",
    category: ["Corporate", "Sales", "Retail"],
   },
   {
    title: "Selling Clerk - SM Novaliches (SM Super Market)",
    date: "Date: July 2024 - January 2025",
    purpose: "- Inventory & Data Tracking: Managed physical inventory parameters and implemented FIFO (First-In, First-Out) workflows to minimize asset wastage and maintain consistent product availability grids.Documentation & Logistics: Formulated and processed essential operational documentation, including product pull-out logs, internal stock orders, and replenishment requests. Financial Logic Processing: Handled cash and digital transactions, accurately computing totals, promotional discounts, and pricing variables under high-volume store hours. System Accuracy: Executed routine price configurations and real-time shelf tag updates to guarantee absolute data consistency across the department storefront.",
    category: ["Corporate", "Sales", "Retail"]
   }
];

export function renderExperience() {
  const seminarContainer = document.querySelector('#experience-container');

  if (!seminarContainer) return;

  seminarContainer.innerHTML = dataExp.map(({ title, date, purpose, category, images, project }) => {
    
    // 1. KONTROL SA PURPOSE
    const renderPurpose = Array.isArray(purpose)
      ? `<ul class="list-disc list-inside space-y-1 text-sm text-dark/80 leading-relaxed">
          ${purpose.map(item => `<li>${item}</li>`).join('')}
         </ul>`
      : `<p class="text-sm text-dark/80 leading-relaxed">${purpose}</p>`;

    // 2. KONTROL SA CATEGORY BADGES (Ginawang black/dark badges para hawig sa sample image mo)
    const renderCategory = Array.isArray(category)
      ? category.map(cat => `<span class="px-3 py-1 rounded-full bg-dark text-light font-medium text-xs tracking-wide">${cat}</span>`).join('')
      : `<span class="px-3 py-1 rounded-full bg-dark text-light font-medium text-xs tracking-wide">${category}</span>`;

    // 3. CONDITIONAL IMAGES GENERATOR: Kung may images na declared sa object, gagawin nitong 3-column grid ang layout sa kaliwa
    const imageGridHTML = images && images.length > 0
      ? `<div class="grid grid-cols-3 gap-2 w-full lg:w-[45%]">
          ${images.map(img => `
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl">
              <img src="${img}" class="w-full h-full object-cover brightness-95 grayscale hover:grayscale-0 duration-500 transition-all" alt="Project Preview">
            </div>
          `).join('')}
         </div>`
      : '';

    return `
      <div class="mt-8 flex flex-col gap-4 border-b pb-8 border-dark/10 w-full font-poppins">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
          <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <h1 class="font-bold text-xl text-secondary tracking-tight">${title}</h1>
            <span class="text-xs text-dark/40 font-medium">${date.replace('Date: ', '')}</span>
          </div>
          
          <div class="flex flex-row flex-wrap gap-2">
            ${renderCategory}
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 w-full mt-2">
          
          ${imageGridHTML}

          <div class="${images && images.length > 0 ? 'flex-1 lg:max-w-[50%]' : 'w-full'} flex items-center justify-between group">
            <div class="pr-6">
              ${renderPurpose}
            </div>
            
            <a href ="${project}">
           <button class="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center text-dark text-lg hover:bg-dark hover:text-light duration-300 transition-all flex-shrink-0">
  <i class="fa-solid fa-arrow-trend-up text-base transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
</button>
</a>
          </div>

        </div>

      </div>
    `;
  }).join('');
}