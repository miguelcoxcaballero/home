// project-root/js/scripts.js

// Animación de la barra coral
const bigHorizontal = window.matchMedia('(min-width: 1024px) and (min-aspect-ratio: 1/1)').matches;
const scrollBar = document.getElementById('scrollBar');
const barTitle  = document.getElementById('barTitle');


if (!bigHorizontal) {
  const THRESHOLD = 400;
  const BAR_SPEED_MULT = 2;
  const BAR_MAX_HEIGHT = 48;
  const TEXT_START = 0.2;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let progress = scrollY / THRESHOLD;
    progress = Math.min(Math.max(progress, 0), 1);
    let barProgress = progress * BAR_SPEED_MULT;
    barProgress = Math.min(barProgress, 1);
    scrollBar.style.height = (BAR_MAX_HEIGHT * barProgress) + 'px';
    let textProgress = (progress - TEXT_START) / (1 - TEXT_START);
    textProgress = Math.min(Math.max(textProgress, 0), 1);
    barTitle.style.opacity = textProgress;
  });
} else {
  const mainEl = document.getElementById('mainContent');
  const DESKTOP_THRESHOLD = 800;
  const DESKTOP_BAR_SPEED_MULT = 1.5;
  const DESKTOP_BAR_MAX_HEIGHT = 80;
  const DESKTOP_TEXT_START = 0.3;
  mainEl.addEventListener('scroll', () => {
    const scrollY = mainEl.scrollTop;
    let progress = scrollY / DESKTOP_THRESHOLD;
    progress = Math.min(Math.max(progress, 0), 1);
    let barProgress = progress * DESKTOP_BAR_SPEED_MULT;
    barProgress = Math.min(barProgress, 1);
    scrollBar.style.height = (DESKTOP_BAR_MAX_HEIGHT * barProgress) + 'px';
    let textProgress = (progress - DESKTOP_TEXT_START) / (1 - DESKTOP_TEXT_START);
    textProgress = Math.min(Math.max(textProgress, 0), 1);
    barTitle.style.opacity = textProgress;
  });
}

// Script de traducción
let currentLang = 'es';
const translations = {
  'section#about h2': {
    es: 'Acerca de mí',
    en: 'About Me'
  },

  'section#about p': {
    es: 'Estudiante de Ingeniería Informática en la Universidad de Murcia \n        con 10 años de educación bilingüe y experiencia en proyectos \n        tecnológicos innovadores.',
    en: 'Software Engineering student at the University of Murcia with 10 years of bilingual education and experience in innovative tech projects.'
  },

  'section#achievements h2': {
    es: 'Logros Personales',
    en: 'Personal Achievements'
  },

  'section#achievements ul li:nth-child(1)': {
    es: 'Oro en la Olimpiada de Ingeniería IT de la UCAM.',
    en: 'Gold medal in the UCAM IT Engineering Olympiad.'
  },
  'section#achievements ul li:nth-child(2)': {
    es: 'Oro en la Olimpiada de Arquitectura Sostenible.',
    en: 'Gold medal in the Sustainable Architecture Olympiad.'
  },
  'section#achievements ul li:nth-child(3)': {
    es: '3er puesto en la Olimpiada Nacional de Arquitectura Sostenible.',
    en: '3rd place in the National Sustainable Architecture Olympiad.'
  },
  'section#achievements ul li:nth-child(4)': {
    es: 'Fabricación de una antena casera premiada en IDIES.',
    en: 'Built a homemade antenna awarded at IDIES.'
  },
  'section#achievements ul li:nth-child(5)': {
    es: 'Diseño y construcción de una impresora 3D y un dron autónomo.',
    en: 'Designed and built a 3D printer and an autonomous drone.'
  },

  'section#languages ul li:nth-child(1) span': {
    es: '<strong>Español</strong>: Nativo',
    en: '<strong>Spanish</strong>: Native'
  },
  'section#languages ul li:nth-child(2) span': {
    es: '<strong>Inglés</strong>: C2 (Cambridge CPE)',
    en: '<strong>English</strong>: C2 (Cambridge CPE)'
  },
  'section#languages ul li:nth-child(3) span': {
    es: '<strong>Francés</strong>: B1 (EOI)',
    en: '<strong>French</strong>: B1 (EOI)'
  },
  'section#languages ul li:nth-child(4) span': {
    es: '<strong>Alemán</strong>: A1 (EOI)',
    en: '<strong>German</strong>: A1 (EOI)'
  },

  'section#proyectos h2': {
    es: 'Proyectos',
    en: 'Projects'
  },

  'section#proyectos ul li:nth-child(1) a': {
    es: 'IDIES Antena Hecha a Mano',
    en: 'IDIES Handmade Antenna'
  },
  'section#proyectos ul li:nth-child(2) a': {
    es: 'Guiado de drone por visión computacional',
    en: 'Drone guidance with computer vision'
  },
  'section#proyectos ul li:nth-child(3) a': {
    es: 'Olimpiada de edificación (Los Kelvin)',
    en: 'Building Olympiad (Los Kelvin)'
  },
  'section#proyectos ul li:nth-child(4) a': {
    es: 'TypeTest',
    en: 'TypeTest'
  },
  'section#proyectos ul li:nth-child(5) a': {
    es: 'Web Pomodoro Timer',
    en: 'Pomodoro Timer Web'
  },
  'section#proyectos ul li:nth-child(6) a': {
    es: 'Web Tablas de Multiplicar',
    en: 'Multiplication Tables Web'
  },
  'section#proyectos ul li:nth-child(7) a': {
    es: 'MIGRANTE / HABITANTE (Becas Europa UFV)',
    en: 'MIGRANTE / HABITANTE (EU Scholarships UFV)'
  },

  'section#erasmus h2': {
    es: 'Movilidad ERASMUS+',
    en: 'ERASMUS+ Mobility'
  },

  'section#erasmus ul li:nth-child(1)': {
    es: '<strong>CHEQUIA</strong>: (Youth Exchange) Herencia cultural europea.',
    en: '<strong>CZECH REPUBLIC</strong>: (Youth Exchange) European cultural heritage.'
  },
  'section#erasmus ul li:nth-child(2)': {
    es: '<strong>LIECHTENSTEIN</strong>: (Youth Exchange) "Save Mother Earth", enfocado en la vida sostenible y el contacto directo con la naturaleza.',
    en: '<strong>LIECHTENSTEIN</strong>: (Youth Exchange) "Save Mother Earth", focused on sustainable living and direct contact with nature.'
  },
  'section#erasmus ul li:nth-child(3)': {
    es: '<strong>POLONIA</strong>: (Training Course) IA, ciberseguridad y networking con otros profesionales.',
    en: '<strong>POLAND</strong>: (Training Course) AI, cybersecurity and networking with like-minded professionals.'
  },
  'section#erasmus ul li:nth-child(4)': {
    es: '<strong>POLONIA</strong>: (Training Course) Mindful Trails about mental health and wellbeing.',
    en: '<strong>POLAND</strong>: (Training Course) Mindful Trails about mental health and wellbeing.'
  },

  'footer p:nth-child(1)': {
    es: '© 2025 Miguel Cox Caballero. Todos los derechos reservados.',
    en: '© 2025 Miguel Cox Caballero. All rights reserved.'
  },
  'footer p:nth-child(2)': {
    es: 'Sígueme en Instagram:',
    en: 'Follow me on Instagram:'
  }
};

function switchLang() {
  currentLang = (currentLang === 'es') ? 'en' : 'es';
  document.getElementById('langSwitcher').innerText = '🌐 ' + currentLang.toUpperCase();

  for (let selector in translations) {
    let elem = document.querySelector(selector);
    if (!elem) continue;

    // Footer con enlace tiene tratamiento especial
    if (selector === 'footer p:nth-child(2)') {
      elem.innerHTML = translations[selector][currentLang] +
        ' <a href="https://www.instagram.com/miguelcoxcaballero" target="_blank" rel="noopener noreferrer">@miguelcoxcaballero</a>';

    // Para los <li> de Erasmus, que incluyen <strong>, mantenemos el HTML
    } else if (selector.startsWith('section#erasmus ul li')) {
      elem.innerHTML = translations[selector][currentLang];
    } else if (selector.startsWith('section#languages ul li')) {
      elem.innerHTML = translations[selector][currentLang];
    } else {
      elem.innerText = translations[selector][currentLang];
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('langSwitcher');
  langBtn.innerText = '🌐 ES';
  langBtn.addEventListener('click', switchLang);
});
