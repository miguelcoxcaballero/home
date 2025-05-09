// project-root/js/scripts.js

// Referencias
const scrollBar  = document.getElementById('scrollBar');
const barTitle   = document.getElementById('barTitle');
const bigDesktop = window.matchMedia('(min-width: 1024px) and (min-aspect-ratio: 1/1)').matches;

// Parámetros según dispositivo
const THRESHOLD  = bigDesktop ? 400 : 400;
const SPEED      = bigDesktop ? 3 : 2;
const MAX_H      = bigDesktop ? 48 : 48;
const TXT_START  = bigDesktop ? 0.3 : 0.2;

// Función única
function updateBar(scrollY) {
  let prog      = Math.min(Math.max(scrollY / THRESHOLD, 0), 1);
  let barProg   = Math.min(prog * SPEED, 1);
  scrollBar.style.height = (MAX_H * barProg) + 'px';

  let txtProg = Math.min(Math.max((prog - TXT_START) / (1 - TXT_START), 0), 1);
  barTitle.style.opacity = txtProg;
}

// Siempre escucha el scroll de la ventana
window.addEventListener('scroll', () => updateBar(window.scrollY));
// Inicializa al cargar
updateBar(window.scrollY);


// Traducciones
let currentLang = 'es';
const translations = {
  'section#about h2': {
    es: 'Acerca de mí', en: 'About Me'
  },
  'section#about p': {
    es: 'Estudiante de Ingeniería Informática en la Universidad de Murcia con 10 años de educación bilingüe y experiencia en proyectos tecnológicos innovadores.',
    en: 'Software Engineering student at the University of Murcia with 10 years of bilingual education and experience in innovative tech projects.'
  },
  'section#achievements h2': {
    es: 'Logros Personales', en: 'Personal Achievements'
  },
  'section#achievements ul li:nth-child(1)': {
    es: 'Oro en la Olimpiada de Ingeniería IT de la UCAM.', en: 'Gold medal in the UCAM IT Engineering Olympiad.'
  },
  'section#achievements ul li:nth-child(2)': {
    es: 'Oro en la Olimpiada de Arquitectura Sostenible.', en: 'Gold medal in the Sustainable Architecture Olympiad.'
  },
  'section#achievements ul li:nth-child(3)': {
    es: '3er puesto en la Olimpiada Nacional de Arquitectura Sostenible.', en: '3rd place in the National Sustainable Architecture Olympiad.'
  },
  'section#languages ul li:nth-child(1) span': {
    es: '<strong>Español</strong>: Nativo', en: '<strong>Spanish</strong>: Native'
  },
  'section#languages ul li:nth-child(2) span': {
    es: '<strong>Inglés</strong>: C2 (Cambridge CPE)', en: '<strong>English</strong>: C2 (Cambridge CPE)'
  },
  'section#languages ul li:nth-child(3) span': {
    es: '<strong>Francés</strong>: B1 (EOI)', en: '<strong>French</strong>: B1 (EOI)'
  },
  'section#languages ul li:nth-child(4) span': {
    es: '<strong>Alemán</strong>: A1 (EOI)', en: '<strong>German</strong>: A1 (EOI)'
  },
  'section#proyectos h2': {
    es: 'Proyectos', en: 'Projects'
  },
  'section#proyectos ul li:nth-child(1) a': {
    es: 'IDIES Antena Hecha a Mano', en: 'IDIES Handmade Antenna'
  },
  'section#proyectos ul li:nth-child(2) a': {
    es: 'Guiado de drone por visión computacional', en: 'Drone guidance with computer vision'
  },
  'section#proyectos ul li:nth-child(3) a': {
    es: 'Olimpiada de edificación (Los Kelvin)', en: 'Building Olympiad (Los Kelvin)'
  },
  'section#proyectos ul li:nth-child(4) a': {
    es: 'TypeTest', en: 'TypeTest'
  },
  'section#proyectos ul li:nth-child(5) a': {
    es: 'Web Pomodoro Timer', en: 'Pomodoro Timer Web'
  },
  'section#proyectos ul li:nth-child(6) a': {
    es: 'Web Tablas de Multiplicar', en: 'Multiplication Tables Web'
  },
  'section#proyectos ul li:nth-child(7) a': {
    es: 'MIGRANTE / HABITANTE (Becas Europa UFV)', en: 'MIGRANTE / HABITANTE (EU Scholarships UFV)'
  },
  'section#erasmus h2': {
    es: 'Movilidad ERASMUS+', en: 'ERASMUS+ Mobility'
  },
  'section#erasmus ul li:nth-child(1)': {
    es: '<strong>CHEQUIA</strong>: (Youth Exchange) Herencia cultural europea.',
    en: '<strong>CZECH REPUBLIC</strong>: (Youth Exchange) European cultural heritage.'
  },
  'section#erasmus ul li:nth-child(2)': {
    es: '<strong>LIECHTENSTEIN</strong>: (Youth Exchange) Vida sostenible y contacto directo con la naturaleza.',
    en: '<strong>LIECHTENSTEIN</strong>: (Youth Exchange) Sustainable living and direct contact with nature.'
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
    es: 'Sígueme en Instagram:', en: 'Follow me on Instagram:'
  }
};

function switchLang() {
  currentLang = (currentLang === 'es') ? 'en' : 'es';
  document.getElementById('langSwitcher').innerText = '🌐 ' + currentLang.toUpperCase();

  for (let selector in translations) {
    let elem = document.querySelector(selector);
    if (!elem) continue;

    if (selector === 'footer p:nth-child(2)') {
      elem.innerHTML = translations[selector][currentLang] +
        ' <a href="https://www.instagram.com/miguelcoxcaballero" target="_blank" rel="noopener noreferrer">@miguelcoxcaballero</a>';
    } else if (
      selector.startsWith('section#erasmus ul li') ||
      selector.startsWith('section#languages ul li')
    ) {
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
