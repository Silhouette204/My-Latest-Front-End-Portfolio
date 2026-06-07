export function initNav() {
document.addEventListener('DOMContentLoaded', () => {
  //side menu bar container kukunin para ma control//
  const sideNav = document.querySelector('#side-menu');

  //hamburger button//
  const menuBtn = document.querySelector('#menu-btn');

  //exit button sa loob ng sideNav pag napindot na yung hamburger//
  const closeBtn = document.querySelector('#close-menu-btn');

 //since mag lalagay tayo ng backdrop tulad sa youtube ganito ang gagawin//
  const backDrop = document.querySelector('#backdrop');


  //dito na pagaganahin yung mga button//
 //pag na click yung menuBtn(yung hamburger nav) using eventListener kailangan mag appear yung sideNav//
  menuBtn.addEventListener('click', () => {
   sideNav.classList.remove('-translate-x-full');

   // Lilitaw ang dilim pag pinindot ang hamburger
   backDrop.classList.remove('opacity-0', 'pointer-events-none'); //tatanggalan ng vision sa website
    backDrop.classList.add('opacity-100', 'pointer-events-auto'); //tatakpan papalitan ng backdrop 
  });


  //closeBtn para tanggalin yung sideNav sa gilid
// Function para isara ang lahat (Clean way para hindi paulit-ulit)
function closeAll() {
    sideNav.classList.add('-translate-x-full');
    backDrop.classList.add('opacity-0', 'pointer-events-none');
    backDrop.classList.remove('opacity-100', 'pointer-events-auto');
}

// Gamitin ang function sa Close Button
closeBtn.addEventListener('click', closeAll);

// Gamitin ang function sa Backdrop (Eto yung kulang mo kanina!)
backDrop.addEventListener('click', closeAll);


  //pag napindot na ang hamburger nav kailangan pag nagpindot sa labas ng sideNav ay dapat hindi makakapindot si user sa mga contents ng website tulad sa YT pag nakalabas ang sideNav try mo i check.. ngunit pag pumindot lang sya ay mag eexit lamang ang sideNav instead na makakapindot sya sa content ng website
backDrop.addEventListener('click', () => {
    sideNav.classList.add('-translate-x-full');
    backDrop.classList.add('opacity-0', 'pointer-events-none');
  });
});
};


