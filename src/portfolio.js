// 1. I-import ang iyong mga imahe para sa Carousel (Para mabasang maigi ng Vite bundler)
import imgComp1 from './latest-1.png';
import imgComp2 from './latest-2.png';
import imgComp3 from './latest-3.png';

// Mangyaring palitan ang mga sumusunod ng tamang file path ng screenshots mo kung may iba ka pang images
import imgPark1 from './portfolio-1.png'; 
import imgWatch1 from './portfolio-3.png';

// 2. I-define ang Data Dictionary para sa mga detalye ng system mo
const projectsData = {
  'computer-grid': {
    title: 'Computer Grid - Computer E-Commerce',
    description: 'A professional web design computer hardware Online Store layout. Take absolute control of your workspace and game. Features zero-latency response tracking, durable ergonomic housing, and fully programmable macros to streamline both your competitive matches and daily coding workflows.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Vite', 'Node JS'],
    images: [imgComp1, imgComp2, imgComp3],
    liveUrl: 'https://product-grid-e-commerce.vercel.app/'
  },
  'parking-system': {
    title: 'Parking Management & Reservation System',
    description: 'A full-scale Software Engineering capstone project designed to automate and optimize parking lot workflows. The system bridges the gap between drivers and secure facility spaces by providing real-time data tracking, interactive structural grid layouts, and seamless booking logistics to eliminate manual ticketing inefficiencies.',
    tags: ['React', 'Express', 'MongoDB', 'PostgreSQL', 'Node.js'],
    images: [imgPark1], // Pwede mong dagdagan ng imported files dito kapag may screenshots ka na
    liveUrl: 'https://www.parkingreservation.online/'
  },
  'kabayan-watch': {
    title: 'Kabayan Watch - Ecommerce Web Design',
    description: 'A modern, fully responsive storefront web application engineered specifically for luxury watches. Built with performance and fluid layouts in mind to provide users with pristine browsing transitions across multiple viewport breakpoints.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    images: [imgWatch1], 
    liveUrl: 'https://responsive-e-commerce-lemon.vercel.app/'
  }
};

export function initPortfolioModal() {
  const modal = document.querySelector('#project-modal');
  const modalContent = document.querySelector('#modal-content');
  const closeBtn = document.querySelector('#close-modal-btn');
  const cards = document.querySelectorAll('.project-card');

  // Carousel Elements
  const track = document.querySelector('#carousel-track');
  const prevBtn = document.querySelector('#prev-slide');
  const nextBtn = document.querySelector('#next-slide');
  const dotsContainer = document.querySelector('#carousel-dots');

  let currentSlideIndex = 0;
  let activeImages = [];

  if (!modal || !closeBtn) return;

  // --- LOGIC PARA SA CAROUSEL MOVEMENT ---
  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // I-update ang active dot indicator
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === currentSlideIndex) {
        dot.className = 'w-5 h-2 bg-white rounded-full transition-all duration-300';
      } else {
        dot.className = 'w-2 h-2 bg-white/50 hover:bg-white/80 rounded-full transition-all duration-300';
      }
    });

    // Itago ang mga palaso kung iisa lang ang litrato
    if (activeImages.length <= 1) {
      prevBtn.classList.add('hidden');
      nextBtn.classList.add('hidden');
    } else {
      prevBtn.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
    }
  }

  // --- BUKSAN ANG MODAL AT I-GENERATE ANG NILALAMAN ---
  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Isaksak ang Teksto at Links
    document.querySelector('#modal-title').textContent = data.title;
    document.querySelector('#modal-description').textContent = data.description;
    document.querySelector('#modal-live-link').href = data.liveUrl;

    // Isaksak ang Badges/Tags
    const tagsContainer = document.querySelector('#modal-tags');
    tagsContainer.innerHTML = data.tags.map(tag => 
      `<span class="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-800 rounded-md border border-gray-200">${tag}</span>`
    ).join('');

    // I-setup ang Images sa Carousel Track
    activeImages = data.images;
    currentSlideIndex = 0;
    
    track.innerHTML = activeImages.map(imgSrc => `
      <div class="w-full h-full flex-shrink-0">
        <img src="${imgSrc}" class="w-full h-full object-cover select-none" alt="Preview Image" />
      </div>
    `).join('');

    // I-setup ang Dots sa ilalim ng Carousel
    dotsContainer.innerHTML = activeImages.map((_, idx) => `
      <button data-slide="${idx}" class="w-2 h-2 bg-white/50 rounded-full transition-all duration-300"></button>
    `).join('');

    // Magdagdag ng Click event sa bawat Dot indicator
    dotsContainer.querySelectorAll('button').forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentSlideIndex = parseInt(e.target.getAttribute('data-slide'));
        updateCarousel();
      });
    });

    updateCarousel();

    // Ipakita ang Modal (Tailwind animation classes)
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    document.body.style.overflow = 'hidden'; // I-lock ang likod para hindi mag-scroll
  }

  // --- ISARA ANG MODAL ---
  function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    document.body.style.overflow = ''; // I-unlock ang body scroll
  }

  // --- EVENT LISTENERS ---
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openModal(projectId);
    });
  });

  // Carousel Arrow Controls
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Iwasan ang pagsasara ng modal
    currentSlideIndex = (currentSlideIndex + 1) % activeImages.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlideIndex = (currentSlideIndex - 1 + activeImages.length) % activeImages.length;
    updateCarousel();
  });

  closeBtn.addEventListener('click', closeModal);
  
  // Isara kapag pinindot ang madilim na backdrop sa labas ng card window
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}