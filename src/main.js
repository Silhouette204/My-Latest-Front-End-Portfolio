import './style.css'

import { initNav } from './nav.js';
import { renderNavigation } from './nav.js';

// Initialize the navigation menu


document.addEventListener('DOMContentLoaded', () => {

   renderNavigation();

  if (document.getElementById('side-menu') !== null) {  
    initNav();
    }
    
});

