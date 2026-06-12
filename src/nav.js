export function renderNavigation() {
  const navigationContainer = document.querySelector('#nav-container');

  if (!navigationContainer) return;

  // Tinanggal ang .join('') dahil string ito, hindi array
  navigationContainer.innerHTML = `
    <div class="flex flex-row items-center gap-3 mt-5 justify-between mx-5 lg:mx-10">
      <div class="flex flex-row items-center gap-3">
        <button id="menu-btn" class="cursor-pointer text-2xl text-secondary hover:duration-300 hover:ease-in-out hover:bg-secondary px-3 py-2 rounded-full hover:text-light">
          <i class="fa-solid fa-bars"></i>
        </button>
        <a href="#" class="text-3xl font-bold text-secondary tracking-tight">
          <img src="./src/assets/icon-img.png" class="w-8 h-10 lg:w-13 lg:h-16" alt="Logo">
        </a>
      </div>

      <a href="#" class="text-base lg:text-lg font-semibold text-secondary hover:text-dark hover:underline">
        Book a Call<i class="fa-solid fa-arrow-right-from-bracket ml-2"></i>
      </a>
    </div>

    <!-- Idinagdag ang bg-black/40 para may totoong dilim tulad sa YouTube -->
    <div id="backdrop" class="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 z-40"></div>
  
    <aside id="side-menu" class="fixed top-0 left-0 h-screen w-64 bg-light text-primary transition-transform duration-300 z-50 transform -translate-x-full">
      <div class="flex flex-row items-center gap-3 m-5">
        <button id="close-menu-btn" class="cursor-pointer text-2xl text-secondary hover:duration-300 hover:ease-in-out hover:bg-secondary px-4 py-2 rounded-full m-1 hover:text-light">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <a href="#" class="text-3xl font-bold text-secondary tracking-tight">
          <img src="./src/assets/icon-img.png" class="w-8 h-10 lg:w-13 lg:h-16" alt="Logo">
        </a>
      </div>

      <ul class="flex flex-col gap-4 mx-5 mt-5">
        <li class="link-nav"><i class="fa-solid fa-house mr-4"></i><a href="#">Home</a></li>
        <li class="link-nav"><i class="fa-solid fa-address-card mr-4"></i><a href="#">About</a></li>
        <li class="link-nav"><i class="fa-solid fa-fire-flame-curved mr-4"></i><a href="#">Experience</a></li>
        <li class="link-nav"><i class="fa-solid fa-box-archive mr-4"></i><a href="#">Projects</a></li>
        <li class="link-nav"><i class="fa-solid fa-address-book mr-4"></i><a href="#">Contacts</a></li>
      </ul>
    </aside>
  `;
}

export function initNav() {
  // Tinanggal ang DOMContentLoaded wrapper dito dahil tatawagin na ito sa main.js kapag ready na ang lahat
  const sideNav = document.querySelector('#side-menu');
  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-menu-btn');
  const backDrop = document.querySelector('#backdrop');

  // Guard clause para sa kaligtasan ng script kung sakaling mawala ang elemento
  if (!sideNav || !menuBtn || !closeBtn || !backDrop) return;

  // Pagpapakita ng Nav at Backdrop
  menuBtn.addEventListener('click', () => {
    sideNav.classList.remove('-translate-x-full');
    backDrop.classList.remove('opacity-0', 'pointer-events-none');
    backDrop.classList.add('opacity-100', 'pointer-events-auto');
  });

  // Iisang malinis na function para sa pagsasara
  function closeAll() {
    sideNav.classList.add('-translate-x-full');
    backDrop.classList.add('opacity-0', 'pointer-events-none');
    backDrop.classList.remove('opacity-100', 'pointer-events-auto');
  }

  closeBtn.addEventListener('click', closeAll);
  backDrop.addEventListener('click', closeAll); // Isang event listener lang para sa backdrop, iwas redundancy
}