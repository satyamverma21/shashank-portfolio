/* ============================================================
   Shashank Agarwal — Architecture Portfolio 2026
   script.js — Refined Interactions
   ============================================================ */

'use strict';

/* ===================================================
AUTO-GENERATE PROJECT DATA FROM FOLDER STRUCTURE
====================================================== */
/*
   Note: Since browsers cannot scan server directories,
   we use a manifest approach below that lists all files.
   Update the manifest when adding/removing files.
*/

/* Image and PDF manifest for each project */
const PROJECT_FILES = {
  project1: {
    imgFolder: 'files/project1/img',
    pdfFolder: 'files/project1/pdf',
    images: [
      'WhatsApp Image 2026-03-16 at 6.11.59 PM.jpeg',
      'SITE PLAN.jpg',
      'FIRST FLOOR PLAN.jpg',
      'SECOND FLOOR PLAN.jpg',
      'FOUTH FLOOR PLAN.jpg',
      'TERRACE FLOOR PLAN.jpg',
      'ELEVATION.jpg',
      'SECTION.jpg',
      '9TH SEM INTRO ST-1 BY SA_page-0001.jpg',
      '9TH SEM CS ST-2 BY SA.jpg',
      '9TH SEM CS ST-3 BY SA.jpg',
      '9TH SEM C0 ST-7 BY SA.jpg',
      '9TH SEM LS ST-5 BY SA.jpg',
      '9TH SEM SA ST-6 BY SA.jpg',
      'st-2 (thrust area).jpg'
    ],
    pdfs: [
      '9TH SEM INTRO ST-1 BY SA.pdf',
      '9TH SEM CS ST-2 BY SA.pdf',
      '9TH SEM CS ST-3 BY SA.pdf',
      '9TH SEM C0 ST-7 BY SA.pdf',
      '9TH SEM LS ST-5 BY SA.pdf',
      '9TH SEM SA ST-6 BY SA.pdf',
      'SITE PLAN.pdf',
      'FIRST FLOOR PLAN.pdf',
      'SECOND FLOOR PLAN.pdf',
      'FOUTH FLOOR PLAN.pdf',
      'TERRACE FLOOR PLAN.pdf',
      'ELEVATION.pdf',
      'SECTION.pdf',
      'STRUCTURE DRAWING.pdf',
      'st-2 (thrust area).pdf'
    ]
  },
  'project2 - pool': {
    imgFolder: 'files/project2 - pool/img',
    pdfFolder: 'files/project2 - pool/pdf',
    images: [
      'SITE ANALYIS.jpg',
      'CONCEPT.jpg',
      'MAIN BUILDING BLOCK 1.jpg',
      'MAIN BUILDING BLOCK 2.jpg',
      'Pneumatic structure.jpg',
      'Pneumatic Structure 2.jpg',
      'ADMIN AND SWIMMING POOL BLOCK.jpg',
      'CASE STUDY 1.jpg',
      'CASE STUDY 2.jpg',
      'CASE STUDY 3.jpg',
      'SHEET NO.7.jpg',
      'STANDARDS SHEET.jpg',
      'site plan.png'
    ],
    pdfs: [
      'ADMIN AND SWIMMING POOL BLOCK.jpg',
      'CASE STUDY 1.jpg',
      'CASE STUDY 2.jpg',
      'CASE STUDY 3.jpg',
      'CONCEPT.jpg',
      'MAIN BUILDING BLOCK 1.jpg',
      'MAIN BUILDING BLOCK 2.jpg',
      'Pneumatic Structure 2.jpg',
      'Pneumatic structure.jpg',
      'SHEET NO.7.jpg',
      'SITE ANALYIS.jpg',
      'STANDARDS SHEET.jpg',
      'site plan.png'
    ]
  },
  project2: {
    imgFolder: 'files/project2 - pool/img',
    pdfFolder: 'files/project2 - pool/pdf',
    images: [
      'SITE ANALYIS.jpg',
      'CONCEPT.jpg',
      'MAIN BUILDING BLOCK 1.jpg',
      'MAIN BUILDING BLOCK 2.jpg',
      'Pneumatic structure.jpg',
      'Pneumatic Structure 2.jpg',
      'ADMIN AND SWIMMING POOL BLOCK.jpg',
      'CASE STUDY 1.jpg',
      'CASE STUDY 2.jpg',
      'CASE STUDY 3.jpg',
      'SHEET NO.7.jpg',
      'STANDARDS SHEET.jpg',
      'site plan.png'
    ],
    pdfs: [
      'ADMIN AND SWIMMING POOL BLOCK.jpg',
      'CASE STUDY 1.jpg',
      'CASE STUDY 2.jpg',
      'CASE STUDY 3.jpg',
      'CONCEPT.jpg',
      'MAIN BUILDING BLOCK 1.jpg',
      'MAIN BUILDING BLOCK 2.jpg',
      'Pneumatic Structure 2.jpg',
      'Pneumatic structure.jpg',
      'SHEET NO.7.jpg',
      'SITE ANALYIS.jpg',
      'STANDARDS SHEET.jpg',
      'site plan.png'
    ]
  },
  project3: {
    imgFolder: 'files/project3',
    pdfFolder: null,
    images: [
      '7.png', '12.png', '13.png', '14.png', '15.png', '16.png',
      '17.png', '18.png', '19.png', '20.png', '21.png', '22.png',
      '23.png', '24.png', '25.png', '26.png', '29.png', '30.png',
      '31.png', '32.png', '33.png', '34.png', '37.png', '38.png',
      '39.png', '40.png', '41.png'
    ],
    pdfs: []
  },
  project4: {
    imgFolder: 'files/portfolio/8 sem images',
    pdfFolder: null,
    images: [
      '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg',
      '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg',
      '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg',
      '24.jpg'
    ],
    pdfs: []
  },
  project5: {
    imgFolder: 'files/portfolio/6 sem images',
    pdfFolder: null,
    images: [
      '0.jpg', '1.jpg', '6.jpg', '7.png', '12.png', '13.png'
    ],
    pdfs: []
  }
};


/* ===================================================
   PROJECT DATA — Base templates, will be merged with PROJECT_FILES
   =================================================== */
const PROJECTS = {
  project1: {
    title: '9th Semester Academic Project',
    subtitle: 'Residential Design',
    year: '2026',
    type: 'Residential',
    location: 'India',
    tools: 'AutoCAD · SketchUp · Lumion',
    area: 'Multi-storey',
    category: 'residential',
    heroSrc: 'files/project1/img/WhatsApp Image 2026-03-16 at 6.11.59 PM.jpeg',
    heroGradient: 'linear-gradient(135deg, #B8A88C 0%, #7A6A58 100%)',
    description: [
      'A comprehensive residential design project from 9th Semester.',
      'Complete architectural documentation from site plan to structural drawings.'
    ],
    details: [
      { label: 'Type', value: 'Residential' },
      { label: 'Floors', value: 'Multi-storey' },
      { label: 'Semester', value: '9th' }
    ],
    images: [],
    downloads: []
  },
  project2: {
    title: 'Sports Complex',
    subtitle: 'Academic Project',
    year: '2024',
    type: 'Sports Facility',
    location: 'India',
    tools: 'AutoCAD · SketchUp · Lumion',
    area: 'Masterplan',
    category: 'public',
    heroSrc: 'files/project2%20-%20pool/img/site%20plan.png',
    heroGradient: 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
    description: [
      'Sports Complex with pneumatic form structures.',
      'Masterplan with specialized sporting facilities.'
    ],
    details: [
      { label: 'Type', value: 'Sports Complex' },
      { label: 'Feature', value: 'Pneumatic Structures' },
      { label: 'Year', value: '2024' }
    ],
    images: [],
    downloads: []
  },
  project3: {
    title: 'Academic Portfolio',
    subtitle: 'Design Studies Collection',
    year: '2024-2025',
    type: 'Academic Work',
    location: 'India',
    tools: 'AutoCAD · SketchUp · V-Ray',
    area: 'Various',
    category: 'public',
    heroSrc: 'files/project3/7.png',
    heroGradient: 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
    description: [
      'A comprehensive collection of academic work spanning multiple semesters, showcasing progressive development of design thinking and technical skills.',
      'Projects range from conceptual explorations to detailed architectural drawings, demonstrating growth in spatial understanding and representation techniques.'
    ],
    details: [
      { label: 'Type', value: 'Academic Collection' },
      { label: 'Span', value: 'Multiple Semesters' },
      { label: 'Focus', value: 'Design Development' }
    ],
    images: [],
    downloads: []
  },
  project4: {
    title: 'Pool Design Project',
    subtitle: 'Leisure Facility',
    year: '2024',
    type: 'Leisure Architecture',
    location: 'India',
    tools: 'AutoCAD · SketchUp · Lumion',
    area: 'Leisure Facility',
    category: 'public',
    heroSrc: 'files/portfolio/8%20sem%20images/0.jpg',
    heroGradient: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
    description: [
      'Leisure facility designed around a central swimming pool, addressing circulation patterns, safety protocols, and user experience in aquatic architecture.',
      'The design integrates pool amenities with relaxation zones, creating a cohesive environment that prioritizes both functionality and comfort.'
    ],
    details: [
      { label: 'Type', value: 'Leisure Facility' },
      { label: 'Feature', value: 'Swimming Pool' },
      { label: 'Year', value: '2024' }
    ],
    images: [],
    downloads: []
  },
  project5: {
    title: '6th Semester Portfolio',
    subtitle: 'Academic Work',
    year: '2024',
    type: 'Academic Portfolio',
    location: 'India',
    tools: 'AutoCAD · SketchUp · Photoshop',
    area: 'Various',
    category: 'public',
    heroSrc: 'files/portfolio/6%20sem%20images/9.jpg',
    heroGradient: 'linear-gradient(135deg, #744210 0%, #B7791F 100%)',
    description: [
      '6th semester academic portfolio demonstrating spatial thinking, architectural representation, and problem-solving skills through various design exercises.',
      'Collection includes hand-drawn sketches, technical drawings, and digital renderings that showcase the progression of architectural understanding.'
    ],
    details: [
      { label: 'Type', value: 'Academic Portfolio' },
      { label: 'Semester', value: '6th' },
      { label: 'Focus', value: 'Spatial Design' }
    ],
    images: [],
    downloads: []
  }
};

/* ===================================================
   MERGE PROJECT_FILES INTO PROJECTS
   =================================================== */
(function mergeProjectFiles() {
  const fileKeyMapping = {
    'project1': 'project1',
    'project2 - pool': 'project2',
    'project2': 'project2',
    'project3': 'project3',
    'project4': 'project4',
    'project5': 'project5'
  };

  Object.keys(fileKeyMapping).forEach(fileKey => {
    const projectKey = fileKeyMapping[fileKey];
    const fileData = PROJECT_FILES[fileKey];
    const proj = PROJECTS[projectKey];
    
    if (fileData && proj) {
      // Map Images for Gallery
      if (fileData.images && fileData.images.length > 0) {
        proj.images = fileData.images.map(imgName => {
          let src = '';
          const encodedName = encodeURIComponent(imgName);
          if (fileData.imgFolder) {
            src = `${fileData.imgFolder}/${encodedName}`;
          } else {
            src = `files/${encodeURIComponent(fileKey)}/${encodedName}`;
          }
          let caption = imgName.replace(/\.[^/.]+$/, ""); // Remove file extension for caption
          return { src, caption };
        });
      }

      // Map PDFs/Files for Downloads
      if (fileData.pdfs && fileData.pdfs.length > 0) {
        proj.downloads = fileData.pdfs.map(pdfName => {
          // Fallback to imgFolder or project folder if pdfFolder isn't explicitly set
          let folder = fileData.pdfFolder || (fileData.imgFolder && !fileData.imgFolder.endsWith('/img') ? fileData.imgFolder : `files/${encodeURIComponent(fileKey)}`);
          return {
            name: pdfName.replace(/\.[^/.]+$/, ""),
            file: `${folder}/${encodeURIComponent(pdfName)}`,
            size: pdfName.split('.').pop().toUpperCase()
          };
        });
      }
    }
  });
})();

/* ===================================================
   NAVIGATION
   =================================================== */
(function initNav() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    nav.classList.toggle('scrolled', currentScroll > 50);
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
})();

/* ===================================================
   THEME TOGGLE
   =================================================== */
(function initTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ===================================================
   SCROLL REVEAL — Intersection Observer
   =================================================== */
(function initReveal() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .reveal-line').forEach(el => {
    observer.observe(el);
  });
})();

/* ===================================================
   PROJECT FILTER
   =================================================== */
(function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.style.display = 'none';
          card.classList.remove('visible');
        }
      });
    });
  });
})();

/* ===================================================
   PROJECT DETAIL OVERLAY
   =================================================== */
function openProject(key) {
  const project = PROJECTS[key];
  if (!project) return;

  const overlay = document.getElementById('projectDetail');
  const content = document.getElementById('detailContent');

  // Build gallery with architectural sheet design
  const galleryItems = project.images.map((img, i) => {
    const sheetNum = String(i + 1).padStart(2, '0');
    if (img.src) {
      return `
        <div class="gallery-item" onclick="openLightbox(${i}, '${key}')">
          <div class="gallery-item-corner gallery-item-corner--top"></div>
          <div class="gallery-item-corner gallery-item-corner--bottom"></div>
          <div class="gallery-item-image">
            <img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\'padding:20px;color:var(--mid-gray);font-size:0.75rem;text-align:center;\'>Image not found</div>'">
          </div>
          <div class="gallery-item-border"></div>
          <div class="gallery-info-bar">
            <div class="gallery-sheet-number">Sheet ${sheetNum}</div>
            <div class="gallery-caption">${img.caption}</div>
          </div>
          <div class="gallery-scale">1:1</div>
        </div>
      `;
    }
    return `
      <div class="gallery-item" onclick="openLightbox(${i}, '${key}')">
        <div class="gallery-item-corner gallery-item-corner--top"></div>
        <div class="gallery-item-corner gallery-item-corner--bottom"></div>
        <div class="gallery-item-image">
          <div class="gallery-placeholder" style="background: ${img.gradient}; width: 100%; height: 100%;"></div>
        </div>
        <div class="gallery-item-border"></div>
        <div class="gallery-info-bar">
          <div class="gallery-sheet-number">Sheet ${sheetNum}</div>
          <div class="gallery-caption">${img.caption}</div>
        </div>
      </div>
    `;
  }).join('');

  // Build downloads with proper grid styling
  const downloadsHtml = project.downloads?.length ? `
    <div class="proj-downloads">
      <div class="gallery-title">Downloads</div>
      <div class="downloads-grid">
        ${project.downloads.map(d => `
          <a href="${d.file}" class="download-item" download>
            <span class="download-icon">↓</span>
            <span class="download-name">${d.name}</span>
            <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--light-gray); margin-left: auto;">${d.size}</span>
          </a>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Build specs
  const specsHtml = project.details.map(d => `
    <li>
      <span>${d.label}</span>
      <span>${d.value}</span>
    </li>
  `).join('');

  // Hero content
  const heroHtml = project.heroSrc
    ? `<div class="project-detail-hero">
        <img src="${project.heroSrc}" alt="${project.title}" onerror="this.style.display='none'; this.parentElement.style.background='${project.heroGradient}'">
       </div>`
    : `<div class="project-detail-hero" style="background: ${project.heroGradient}"></div>`;

  content.innerHTML = `
    ${heroHtml}
    <div class="project-detail-meta">
      <dl class="meta-item">
        <dt>Year</dt>
        <dd>${project.year}</dd>
      </dl>
      <dl class="meta-item">
        <dt>Type</dt>
        <dd>${project.type}</dd>
      </dl>
      <dl class="meta-item">
        <dt>Location</dt>
        <dd>${project.location}</dd>
      </dl>
      <dl class="meta-item">
        <dt>Area</dt>
        <dd>${project.area}</dd>
      </dl>
    </div>
    <div class="project-detail-body">
      <div class="project-description">
        <h2>${project.title}<br><span style="font-style: italic; color: var(--accent);">${project.subtitle}</span></h2>
        ${project.description.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="project-specs">
        <h4>Project Details</h4>
        <ul class="specs-list">${specsHtml}</ul>
      </div>
    </div>
    <div class="project-gallery">
      <div class="gallery-title">Image Gallery — click to enlarge</div>
      <div class="gallery-grid">${galleryItems}</div>
    </div>
    ${downloadsHtml}
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
}

function closeProject() {
  const overlay = document.getElementById('projectDetail');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('detailClose')?.addEventListener('click', closeProject);

document.getElementById('projectDetail')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeProject();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProject();
    closeLightbox();
  }
});

/* ===================================================
   LIGHTBOX
   =================================================== */
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentProjectKey = '';

function openLightbox(index, key) {
  const project = PROJECTS[key];
  if (!project) return;

  currentLightboxImages = project.images;
  currentLightboxIndex = index;
  currentProjectKey = key;

  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
}

function updateLightbox() {
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const current = currentLightboxImages[currentLightboxIndex];

  if (current.src) {
    img.src = current.src;
  } else {
    // Create gradient canvas for placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 1200, 800);
    const colors = current.gradient.match(/#[0-9A-Fa-f]{6}/g) || ['#888888', '#444444'];
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);
    img.src = canvas.toDataURL();
  }

  img.alt = current.caption;
  caption.textContent = `${current.caption} — ${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

function lightboxNext() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightbox();
}

function lightboxPrev() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightbox();
}

document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
document.getElementById('lightboxNext')?.addEventListener('click', lightboxNext);
document.getElementById('lightboxPrev')?.addEventListener('click', lightboxPrev);

document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNext();
  if (e.key === 'ArrowLeft') lightboxPrev();
});

/* ===================================================
   SMOOTH SCROLL
   =================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ===================================================
   PARALLAX HERO
   =================================================== */
(function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  const heroGrid = document.querySelector('.hero-grid-bg');
  if (!heroContent) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    if (scrollY < vh) {
      const progress = scrollY / vh;
      heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
      heroContent.style.opacity = 1 - (progress * 0.8);
      if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    }
  }, { passive: true });
})();

/* ===================================================
   SCROLL VELOCITY DETECTION
   =================================================== */
(function initScrollVelocity() {
  let lastScrollTop = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const velocity = scrollTop - lastScrollTop;
        document.body.style.setProperty('--scroll-velocity', Math.min(Math.abs(velocity) / 10, 1));
        lastScrollTop = scrollTop;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ===================================================
 CUSTOM CURSOR — Technical Drafting Compass Style
 =================================================== */
(function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor) return;

  // Check for touch device - skip custom cursor
  if (window.matchMedia('(pointer: coarse)').matches) {
    cursor.style.display = 'none';
    document.documentElement.style.cursor = 'auto';
    return;
  }

  // Set initial position off-screen
  cursor.style.transform = 'translate3d(-100px, -100px, 0)';

  let mouseX = -100;
  let mouseY = -100;
  let cursorX = -100;
  let cursorY = -100;
  let isActive = false;

  // Smooth follow with slight delay for mechanical feel
  const smoothFactor = 0.15;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isActive) {
      cursorX = mouseX;
      cursorY = mouseY;
      isActive = true;
      cursor.style.opacity = '1';
    }
  }, { passive: true });

  function animateCursor() {
    // Linear interpolation for smooth following
    cursorX += (mouseX - cursorX) * smoothFactor;
    cursorY += (mouseY - cursorY) * smoothFactor;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover states for interactive elements
  const hoverElements = document.querySelectorAll(
    'a, button, [role="button"], input, textarea, select, .project-card, .filter-btn, .gallery-item, .contact-link'
  );

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });

  // Click states
  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

  // Handle mouse leaving/entering window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
})();

console.log('🏛️ Architecture Portfolio — Technical Drafting Aesthetic · Shashank Agarwal 2026');
