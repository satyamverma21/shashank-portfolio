/* ============================================================
 Shashank Agarwal — Architecture Portfolio 2026
 script.js — Refined Interactions
 ============================================================ */

'use strict';

/* ===================================================
 DYNAMIC PROJECT LOADING (replaces hardcoded projects)
 Run: node generate-projects.js after modifying files
 =================================================== */
let PROJECTS = {};

(async function initDynamicProjects() {
  try {
    const response = await fetch('projects.json');
    if (!response.ok) throw new Error('Failed to load projects.json');
    PROJECTS = await response.json();

    const showcase = document.getElementById('projectsShowcase');
    if (!showcase) return;

    // Generate project cards dynamically
    const projectKeys = Object.keys(PROJECTS);
    const projectCount = projectKeys.length;

    // Update the intro text to show actual project count
    const introText = document.querySelector('.projects-intro');
    if (introText) {
      const countText = projectCount === 1 ? 'one project' :
        projectCount === 2 ? 'two projects' :
        projectCount === 3 ? 'three projects' :
        projectCount === 4 ? 'four projects' :
        `${projectCount} projects`;
      introText.textContent = `${countText} spanning residential design, public architecture, and academic exploration — each a conversation between site, structure, and intention.`;
    }

    showcase.innerHTML = projectKeys.map((key, index) => {
      const proj = PROJECTS[key];
      const num = String(index + 1).padStart(2, '0');
      const stagger = index + 1;
      const typeTag = proj.type || 'Project';
      const yearTag = proj.year || '';

      return `
      <article class="project-module reveal stagger-${stagger}" onclick="openProject('${key}')">
        <div class="project-module-content">
          <div class="project-number">${num}</div>
          <div class="project-details">
            <h3 class="project-name">${proj.title || key}</h3>
            <p class="project-desc">${proj.description ? proj.description[0] : 'Project description.'}</p>
            <div class="project-tags">
              <span>${typeTag}</span>
              ${yearTag ? `<span>${yearTag}</span>` : ''}
            </div>
          </div>
          <div class="project-arrow">↗</div>
        </div>
        <div class="project-module-image">
          ${proj.heroSrc ? `<img src="${proj.heroSrc}" alt="${proj.title}" onerror="this.parentElement.querySelector('.module-image-overlay').style.background='${proj.heroGradient || '#666'}'">` : ''}
          <div class="module-image-overlay"></div>
        </div>
      </article>
      `;
    }).join('');

    // Re-initialize reveal observer for new elements
    initRevealDynamic();

    console.log(`Loaded ${projectCount} projects dynamically from projects.json`);
  } catch (err) {
    console.error('Failed to load projects:', err);
  }
})();

function initRevealDynamic() {
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

  document.querySelectorAll('#projectsShowcase .reveal').forEach(el => {
    observer.observe(el);
  });
}

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
 PROJECT DETAIL OVERLAY (Uses PROJECTS from JSON)
 =================================================== */
function openProject(key) {
  const project = PROJECTS[key];
  if (!project) return;

  const overlay = document.getElementById('projectDetail');
  const content = document.getElementById('detailContent');

  // Build gallery with architectural sheet design
  const galleryItems = (project.images || []).map((img, i) => {
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
    return '';
  }).join('');

  // Build downloads with proper grid styling
  const downloadsHtml = (project.downloads && project.downloads.length) ? `
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
  const specsHtml = (project.details || []).map(d => `
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
    : `<div class="project-detail-hero" style="background: ${project.heroGradient || '#666'}"></div>`;

  content.innerHTML = `
    ${heroHtml}
    <div class="project-detail-meta">
      <dl class="meta-item">
        <dt>Year</dt>
        <dd>${project.year || 'N/A'}</dd>
      </dl>
      <dl class="meta-item">
        <dt>Type</dt>
        <dd>${project.type || 'Project'}</dd>
      </dl>
      <dl class="meta-item">
        <dt>Location</dt>
        <dd>${project.location || 'India'}</dd>
      </dl>
      <dl class="meta-item">
        <dt>Area</dt>
        <dd>${project.area || 'Various'}</dd>
      </dl>
    </div>
    <div class="project-detail-body">
      <div class="project-description">
        <h2>${project.title || key}<br><span style="font-style: italic; color: var(--accent);">${project.subtitle || ''}</span></h2>
        ${(project.description || []).map(p => `<p>${p}</p>`).join('')}
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

  currentLightboxImages = project.images || [];
  currentLightboxIndex = index;
  currentProjectKey = key;

  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
}

function updateLightbox() {
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const current = currentLightboxImages[currentLightboxIndex];

  if (!current) return;

  if (current.src) {
    img.src = current.src;
  } else {
    // Create gradient canvas for placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 1200, 800);
    const colors = current.gradient ? current.gradient.match(/#[0-9A-Fa-f]{6}/g) || ['#888888', '#444444'] : ['#888888', '#444444'];
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);
    img.src = canvas.toDataURL();
  }

  img.alt = current.caption || '';
  caption.textContent = `${current.caption || ''} — ${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

function lightboxNext() {
  if (currentLightboxImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightbox();
}

function lightboxPrev() {
  if (currentLightboxImages.length === 0) return;
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

console.log('🏛️ Architecture Portfolio — Dynamic Loading · Shashank Agarwal 2026');