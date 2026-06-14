import './style.css'

import { initNav } from './nav.js';
import { renderNavigation } from './nav.js';
import { renderExperience } from './experience.js';
import { renderSeminar } from './seminars.js';
// Initialize the navigation menu


document.addEventListener('DOMContentLoaded', () => {

   renderNavigation();

    if (document.getElementById('side-menu') !== null) {  
    initNav();
    }

    if(document.getElementById('experience-container')){
      renderExperience();
    }

    if(document.getElementById('seminar-container')){
      renderSeminar();
    }

   
    
});

