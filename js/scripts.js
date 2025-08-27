// js/scripts.js — robust scroll bar + i18n (ES/EN)

// ===== Scroll bar animation =====
const scrollBar  = document.getElementById('scrollBar');
const barTitle   = document.getElementById('barTitle');
const bigDesktop = window.matchMedia('(min-width: 1024px) and (min-aspect-ratio: 1/1)').matches;

const THRESHOLD  = 400;
const SPEED      = bigDesktop ? 3 : 2;
const MAX_H      = 48;
const TXT_START  = bigDesktop ? 0.3 : 0.2;

function clamp(n, lo, hi){ return Math.min(Math.max(n, lo), hi); }

function updateBar(scrollY) {
  const prog    = clamp(scrollY / THRESHOLD, 0, 1);
  const barProg = clamp(prog * SPEED, 0, 1);
  const txtProg = clamp((prog - TXT_START) / (1 - TXT_START), 0, 1);

  if (scrollBar) scrollBar.style.height = Math.round(MAX_H * barProg) + 'px';
  if (barTitle) {
    barTitle.style.opacity = String(txtProg);
    const s = 0.9 + 0.1 * txtProg; // subtle scale-in
    barTitle.style.transform = `scale(${s})`;
    barTitle.style.transformOrigin = 'left center';
  }
}
window.addEventListener('scroll', () => updateBar(window.scrollY));
updateBar(window.scrollY);

// ===== Simple i18n (data-i18n) =====
const I18N = {
  es: {
    doc_title: 'Miguel Cox Caballero - Transición al hacer scroll',
    about_h2 : 'Acerca de mí',
    about_p  : 'Estudiante de Ingeniería Informática en la Universidad de Murcia con 10 años de educación bilingüe y experiencia en proyectos tecnológicos innovadores.',
    achi_h2  : 'Logros Personales',
    achi_1   : 'Oro en la Olimpiada de Ingeniería IT de la UCAM.',
    achi_2   : 'Oro en la Olimpiada de Arquitectura Sostenible.',
    achi_3   : '3er puesto en la Olimpiada Nacional de Arquitectura Sostenible.',
    lang_h2  : 'Idiomas',
    lang_1   : '<strong>Español</strong>: Nativo',
    lang_2   : '<strong>Inglés</strong>: C2 (Cambridge CPE)',
    lang_3   : '<strong>Francés</strong>: B1 (EOI)',
    lang_4   : '<strong>Alemán</strong>: A1 (EOI)',
    proj_h2  : 'Proyectos',
    proj_1   : 'IDIES Antena Hecha a Mano',
    proj_2   : 'Guiado de drone por visión computacional',
    proj_3   : 'Olimpiada de edificación (Los Kelvin)',
    proj_4   : 'TypeTest',
    proj_5   : 'Web Pomodoro Timer',
    proj_6   : 'Web Tablas de Multiplicar',
    proj_7   : 'MIGRANTE / HABITANTE (Becas Europa UFV)',
    erasmus_h2: 'Movilidad ERASMUS+',
    erasmus_1 : '<strong>CHEQUIA</strong>: (Youth Exchange) Herencia cultural europea.',
    erasmus_2 : '<strong>LIECHTENSTEIN</strong>: (Youth Exchange) Vida sostenible y contacto directo con la naturaleza.',
    erasmus_3 : '<strong>POLONIA</strong>: (Training Course) IA, ciberseguridad y networking con otros profesionales.',
    erasmus_4 : '<strong>POLONIA</strong>: (Training Course) Mindful Trails about mental health and wellbeing.',
    footer_copy  : '© 2025 Miguel Cox Caballero. Todos los derechos reservados.',
    footer_follow: 'Sígueme en Instagram: <a href="https://www.instagram.com/miguelcoxcaballero" target="_blank" rel="noopener noreferrer">@miguelcoxcaballero</a>',
  },
  en: {
    doc_title: 'Miguel Cox Caballero - Scroll Transition',
    about_h2 : 'About Me',
    about_p  : 'Software Engineering student at the University of Murcia with 10 years of bilingual education and experience in innovative tech projects.',
    achi_h2  : 'Personal Achievements',
    achi_1   : 'Gold medal in the UCAM IT Engineering Olympiad.',
    achi_2   : 'Gold medal in the Sustainable Architecture Olympiad.',
    achi_3   : '3rd place in the National Sustainable Architecture Olympiad.',
    lang_h2  : 'Languages',
    lang_1   : '<strong>Spanish</strong>: Native',
    lang_2   : '<strong>English</strong>: C2 (Cambridge CPE)',
    lang_3   : '<strong>French</strong>: B1 (EOI)',
    lang_4   : '<strong>German</strong>: A1 (EOI)',
    proj_h2  : 'Projects',
    proj_1   : 'IDIES Handmade Antenna',
    proj_2   : 'Drone guidance with computer vision',
    proj_3   : 'Building Olympiad (Los Kelvin)',
    proj_4   : 'TypeTest',
    proj_5   : 'Web Pomodoro Timer',
    proj_6   : 'Web Multiplication Tables',
    proj_7   : 'MIGRANTE / HABITANTE (UFV Europe Scholarships)',
    erasmus_h2: 'ERASMUS+ Mobility',
    erasmus_1 : '<strong>CZECH REPUBLIC</strong>: (Youth Exchange) European cultural heritage.',
    erasmus_2 : '<strong>LIECHTENSTEIN</strong>: (Youth Exchange) Sustainable living and direct contact with nature.',
    erasmus_3 : '<strong>POLAND</strong>: (Training Course) AI, cybersecurity and networking with like-minded professionals.',
    erasmus_4 : '<strong>POLAND</strong>: (Training Course) Mindful Trails about mental health and wellbeing.',
    footer_copy  : '© 2025 Miguel Cox Caballero. All rights reserved.',
    footer_follow: 'Follow me on Instagram: <a href="https://www.instagram.com/miguelcoxcaballero" target="_blank" rel="noopener noreferrer">@miguelcoxcaballero</a>',
  }
};

function applyLanguage(lang){
  const dict = I18N[lang] || I18N.es;
  // Update <html lang>
  document.documentElement.setAttribute('lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (val == null) {
      console.warn('[i18n] Missing key:', key, 'for lang:', lang);
      return;
    }
    const htmlMode = el.getAttribute('data-i18n-html') === 'true';
    if (htmlMode) el.innerHTML = val;
    else el.textContent = val;
  });

  // Update the document title explicitly too
  if (dict.doc_title) document.title = dict.doc_title;

  // Update language button
  const btn = document.getElementById('langSwitcher');
  if (btn) btn.textContent = '🌐 ' + lang.toUpperCase();

  // Persist
  try { localStorage.setItem('lang', lang); } catch(_) {}
}

function toggleLang(){
  const cur = (localStorage.getItem('lang') || document.documentElement.lang || 'es').toLowerCase();
  const next = (cur === 'es') ? 'en' : 'es';
  applyLanguage(next);
}

document.addEventListener('DOMContentLoaded', () => {
  const initial = (localStorage.getItem('lang') || document.documentElement.lang || 'es').toLowerCase();
  applyLanguage(initial);
  const btn = document.getElementById('langSwitcher');
  if (btn) btn.addEventListener('click', toggleLang);
});
