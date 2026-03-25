/* ============================================================
   SHASHANK AGARWAL — ARCHITECTURE PORTFOLIO 2026
   BRUTALIST BLUEPRINT — INTERACTIONS
   ============================================================ */

'use strict';

// ============================================================
// PROJECTS DATA
// ============================================================
let PROJECTS = {};

// Embedded fallback data for local testing when fetch fails
// const PROJECTS_FALLBACK = {"project1":{"title":"9th Semester Academic Project","subtitle":"Residential Design","year":"2026","type":"Residential","location":"India","tools":"AutoCAD · SketchUp · Lumion","area":"Multi-storey","category":"residential","heroGradient":"linear-gradient(135deg, #B8A88C 0%, #7A6A58 100%)","description":["A comprehensive residential design project from 9th Semester.","Complete architectural documentation from site plan to structural drawings."],"details":[{"label":"Type","value":"Residential"},{"label":"Floors","value":"Multi-storey"},{"label":"Semester","value":"9th"}],"heroSrc":"projects/project1/img/9TH_SEM_C0_ST-7_BY_SA_PAGE-0001.jpg","images":[{"src":"projects/project1/img/9TH_SEM_C0_ST-7_BY_SA_PAGE-0001.jpg","caption":"9TH SEM C0 ST 7 BY SA PAGE 0001"},{"src":"projects/project1/img/9TH_SEM_CS_ST-2_BY_SA.jpg","caption":"9TH SEM CS ST 2 BY SA"},{"src":"projects/project1/img/9TH_SEM_CS_ST-3_BY_SA.jpg","caption":"9TH SEM CS ST 3 BY SA"},{"src":"projects/project1/img/9TH_SEM_INTRO_ST-1_BY_SA.jpg","caption":"9TH SEM INTRO ST 1 BY SA"},{"src":"projects/project1/img/9TH_SEM_LS_ST-5_BY_SA.jpg","caption":"9TH SEM LS ST 5 BY SA"},{"src":"projects/project1/img/9TH_SEM_SA_ST-6_BY_SA.jpg","caption":"9TH SEM SA ST 6 BY SA"},{"src":"projects/project1/img/ELEVATION.jpg","caption":"ELEVATION"},{"src":"projects/project1/img/FIRST_FLOOR_PLAN.jpg","caption":"FIRST FLOOR PLAN"},{"src":"projects/project1/img/FOUTH_FLOOR_PLAN.jpg","caption":"FOUTH FLOOR PLAN"},{"src":"projects/project1/img/SECOND_FLOOR_PLAN.jpg","caption":"SECOND FLOOR PLAN"},{"src":"projects/project1/img/SECTION.jpg","caption":"SECTION"},{"src":"projects/project1/img/SITE_PLAN.jpg","caption":"SITE PLAN"},{"src":"projects/project1/img/ST-2_(THRUST_AREA).jpg","caption":"ST 2 (THRUST AREA)"},{"src":"projects/project1/img/TERRACE_FLOOR_PLAN.jpg","caption":"TERRACE FLOOR PLAN"},{"src":"projects/project1/img/WHATSAPP_IMAGE_2026-03-16_AT_6.11.59_PM.jpeg","caption":"WHATSAPP IMAGE 2026 03 16 AT 6.11.59 PM"}],"downloads":[{"name":"9TH SEM C0 ST 7 BY SA","file":"projects/project1/download/9TH_SEM_C0_ST-7_BY_SA.pdf","size":"PDF"},{"name":"9TH SEM CS ST 2 BY SA","file":"projects/project1/download/9TH_SEM_CS_ST-2_BY_SA.pdf","size":"PDF"},{"name":"9TH SEM CS ST 3 BY SA","file":"projects/project1/download/9TH_SEM_CS_ST-3_BY_SA.pdf","size":"PDF"},{"name":"9TH SEM INTRO ST 1 BY SA","file":"projects/project1/download/9TH_SEM_INTRO_ST-1_BY_SA.pdf","size":"PDF"},{"name":"9TH SEM LS ST 5 BY SA","file":"projects/project1/download/9TH_SEM_LS_ST-5_BY_SA.pdf","size":"PDF"},{"name":"9TH SEM SA ST 6 BY SA","file":"projects/project1/download/9TH_SEM_SA_ST-6_BY_SA.pdf","size":"PDF"},{"name":"ELEVATION","file":"projects/project1/download/ELEVATION.pdf","size":"PDF"},{"name":"FIRST FLOOR PLAN","file":"projects/project1/download/FIRST_FLOOR_PLAN.pdf","size":"PDF"},{"name":"FOUTH FLOOR PLAN","file":"projects/project1/download/FOUTH_FLOOR_PLAN.pdf","size":"PDF"},{"name":"SECOND FLOOR PLAN","file":"projects/project1/download/SECOND_FLOOR_PLAN.pdf","size":"PDF"},{"name":"SECTION","file":"projects/project1/download/SECTION.pdf","size":"PDF"},{"name":"SITE PLAN","file":"projects/project1/download/SITE_PLAN.pdf","size":"PDF"},{"name":"ST 2 (THRUST AREA)","file":"projects/project1/download/ST-2_(THRUST_AREA).pdf","size":"PDF"},{"name":"STRUCTURE DRAWING","file":"projects/project1/download/STRUCTURE_DRAWING.pdf","size":"PDF"},{"name":"TERRACE FLOOR PLAN","file":"projects/project1/download/TERRACE_FLOOR_PLAN.pdf","size":"PDF"}]},"project2":{"title":"Sports Complex","subtitle":"Academic Project","year":"2024","type":"Sports Facility","location":"India","tools":"AutoCAD · SketchUp · Lumion","area":"Masterplan","category":"public","heroGradient":"linear-gradient(135deg, #1b2838 0%, #2a475e 100%)","description":["Sports Complex with pneumatic form structures.","Masterplan with specialized sporting facilities."],"details":[{"label":"Type","value":"Sports Complex"},{"label":"Feature","value":"Pneumatic Structures"},{"label":"Year","value":"2024"}],"heroSrc":"projects/project2/img/ADMIN_AND_SWIMMING_POOL_BLOCK.jpg","images":[{"src":"projects/project2/img/ADMIN_AND_SWIMMING_POOL_BLOCK.jpg","caption":"ADMIN AND SWIMMING POOL BLOCK"},{"src":"projects/project2/img/CASE_STUDY_1.jpg","caption":"CASE STUDY 1"},{"src":"projects/project2/img/CASE_STUDY_2.jpg","caption":"CASE STUDY 2"},{"src":"projects/project2/img/CASE_STUDY_3.jpg","caption":"CASE STUDY 3"},{"src":"projects/project2/img/CONCEPT.jpg","caption":"CONCEPT"},{"src":"projects/project2/img/MAIN_BUILDING_BLOCK_1.jpg","caption":"MAIN BUILDING BLOCK 1"},{"src":"projects/project2/img/MAIN_BUILDING_BLOCK_2.jpg","caption":"MAIN BUILDING BLOCK 2"},{"src":"projects/project2/img/PNEUMATIC_STRUCTURE_2.jpg","caption":"PNEUMATIC STRUCTURE 2"},{"src":"projects/project2/img/PNEUMATIC_STRUCTURE.jpg","caption":"PNEUMATIC STRUCTURE"},{"src":"projects/project2/img/SHEET_NO.7.jpg","caption":"SHEET NO.7"},{"src":"projects/project2/img/SITE_ANALYIS.jpg","caption":"SITE ANALYIS"},{"src":"projects/project2/img/SITE_PLAN.png","caption":"SITE PLAN"},{"src":"projects/project2/img/STANDARDS_SHEET.jpg","caption":"STANDARDS SHEET"}],"downloads":[{"name":"ADMIN AND SWIMMING POOL BLOCK","file":"projects/project2/download/ADMIN_AND_SWIMMING_POOL_BLOCK.png","size":"PNG"},{"name":"CASE STUDY 1","file":"projects/project2/download/CASE_STUDY_1.png","size":"PNG"},{"name":"CASE STUDY 2","file":"projects/project2/download/CASE_STUDY_2.png","size":"PNG"},{"name":"CASE STUDY 3","file":"projects/project2/download/CASE_STUDY_3.png","size":"PNG"},{"name":"CONCEPT","file":"projects/project2/download/CONCEPT.png","size":"PNG"},{"name":"MAIN BUILDING BLOCK 1","file":"projects/project2/download/MAIN_BUILDING_BLOCK_1.png","size":"PNG"},{"name":"MAIN BUILDING BLOCK 2","file":"projects/project2/download/MAIN_BUILDING_BLOCK_2.png","size":"PNG"},{"name":"PNEUMATIC STRUCTURE 2","file":"projects/project2/download/Pneumatic_Structure_2.png","size":"PNG"},{"name":"PNEUMATIC STRUCTURE","file":"projects/project2/download/Pneumatic_structure.png","size":"PNG"},{"name":"SHEET NO.7","file":"projects/project2/download/SHEET_NO.7.png","size":"PNG"},{"name":"SITE ANALYSIS","file":"projects/project2/download/SITE_ANALYIS.png","size":"PNG"},{"name":"SITE PLAN","file":"projects/project2/download/site_plan.png","size":"PNG"},{"name":"STANDARDS SHEET","file":"projects/project2/download/STANDARDS_SHEET.png","size":"PNG"}]},"project3":{"title":"Academic Portfolio","subtitle":"Design Studies Collection","year":"2024-2025","type":"Academic Work","location":"India","tools":"AutoCAD · SketchUp · V-Ray","area":"Various","category":"public","heroGradient":"linear-gradient(135deg, #2D3748 0%, #4A5568 100%)","description":["A comprehensive collection of academic work spanning multiple semesters.","Projects range from conceptual explorations to detailed architectural drawings."],"details":[{"label":"Type","value":"Academic Collection"},{"label":"Span","value":"Multiple Semesters"},{"label":"Focus","value":"Design Development"}],"heroSrc":"projects/project3/img/0.jpg","images":[{"src":"projects/project3/img/0.jpg","caption":"0"},{"src":"projects/project3/img/1.jpg","caption":"1"},{"src":"projects/project3/img/2.jpg","caption":"2"},{"src":"projects/project3/img/3.jpg","caption":"3"},{"src":"projects/project3/img/4.jpg","caption":"4"},{"src":"projects/project3/img/5.jpg","caption":"5"},{"src":"projects/project3/img/6.jpg","caption":"6"},{"src":"projects/project3/img/7.png","caption":"7"},{"src":"projects/project3/img/12.png","caption":"12"},{"src":"projects/project3/img/13.png","caption":"13"},{"src":"projects/project3/img/14.png","caption":"14"},{"src":"projects/project3/img/15.png","caption":"15"},{"src":"projects/project3/img/16.png","caption":"16"},{"src":"projects/project3/img/17.png","caption":"17"},{"src":"projects/project3/img/18.png","caption":"18"},{"src":"projects/project3/img/19.png","caption":"19"},{"src":"projects/project3/img/20.png","caption":"20"},{"src":"projects/project3/img/21.png","caption":"21"},{"src":"projects/project3/img/22.png","caption":"22"},{"src":"projects/project3/img/23.png","caption":"23"},{"src":"projects/project3/img/24.png","caption":"24"},{"src":"projects/project3/img/25.png","caption":"25"},{"src":"projects/project3/img/26.png","caption":"26"},{"src":"projects/project3/img/29.png","caption":"29"},{"src":"projects/project3/img/30.png","caption":"30"},{"src":"projects/project3/img/31.png","caption":"31"},{"src":"projects/project3/img/32.png","caption":"32"},{"src":"projects/project3/img/33.png","caption":"33"},{"src":"projects/project3/img/34.png","caption":"34"},{"src":"projects/project3/img/37.png","caption":"37"},{"src":"projects/project3/img/38.png","caption":"38"},{"src":"projects/project3/img/39.png","caption":"39"},{"src":"projects/project3/img/40.png","caption":"40"},{"src":"projects/project3/img/41.png","caption":"41"}],"downloads":[]},"project4":{"title":"Pool Design Project","subtitle":"Leisure Facility","year":"2024","type":"Leisure Architecture","location":"India","tools":"AutoCAD · SketchUp · Lumion","area":"Leisure Facility","category":"public","heroGradient":"linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)","description":["Leisure facility designed around a central swimming pool.","Addressing circulation patterns, safety protocols, and user experience."],"details":[{"label":"Type","value":"Leisure Facility"},{"label":"Feature","value":"Swimming Pool"},{"label":"Year","value":"2024"}],"heroSrc":"projects/project4/img/0.jpg","images":[{"src":"projects/project4/img/0.jpg","caption":"0"},{"src":"projects/project4/img/1.jpg","caption":"1"},{"src":"projects/project4/img/2.jpg","caption":"2"},{"src":"projects/project4/img/3.jpg","caption":"3"},{"src":"projects/project4/img/4.jpg","caption":"4"},{"src":"projects/project4/img/5.jpg","caption":"5"},{"src":"projects/project4/img/6.jpg","caption":"6"},{"src":"projects/project4/img/7.jpg","caption":"7"},{"src":"projects/project4/img/8.jpg","caption":"8"},{"src":"projects/project4/img/9.jpg","caption":"9"},{"src":"projects/project4/img/10.jpg","caption":"10"},{"src":"projects/project4/img/11.jpg","caption":"11"},{"src":"projects/project4/img/12.jpg","caption":"12"},{"src":"projects/project4/img/13.jpg","caption":"13"},{"src":"projects/project4/img/14.jpg","caption":"14"},{"src":"projects/project4/img/15.jpg","caption":"15"},{"src":"projects/project4/img/16.jpg","caption":"16"},{"src":"projects/project4/img/17.jpg","caption":"17"},{"src":"projects/project4/img/18.jpg","caption":"18"},{"src":"projects/project4/img/19.jpg","caption":"19"},{"src":"projects/project4/img/20.jpg","caption":"20"},{"src":"projects/project4/img/21.jpg","caption":"21"},{"src":"projects/project4/img/22.jpg","caption":"22"},{"src":"projects/project4/img/23.jpg","caption":"23"},{"src":"projects/project4/img/24.jpg","caption":"24"}],"downloads":[]},"project5":{"title":"6th Semester Portfolio","subtitle":"Academic Work","year":"2024","type":"Academic Portfolio","location":"India","tools":"AutoCAD · SketchUp · Photoshop","area":"Various","category":"public","heroGradient":"linear-gradient(135deg, #744210 0%, #B7791F 100%)","description":["Academic portfolio demonstrating spatial thinking and architectural representation.","Collection includes sketches, technical drawings, and digital renderings."],"details":[{"label":"Type","value":"Academic Portfolio"},{"label":"Semester","value":"6th"},{"label":"Focus","value":"Spatial Design"}],"heroSrc":"projects/project5/img/9.jpg","images":[{"src":"projects/project5/img/9.jpg","caption":"9"},{"src":"projects/project5/img/18.jpg","caption":"18"},{"src":"projects/project5/img/19.jpg","caption":"19"},{"src":"projects/project5/img/31.jpg","caption":"31"},{"src":"projects/project5/img/32.jpg","caption":"32"},{"src":"projects/project5/img/33.jpg","caption":"33"}],"downloads":[{"name":"9","file":"projects/project5/download/9.jpg","size":"JPG"},{"name":"18","file":"projects/project5/download/18.jpg","size":"JPG"},{"name":"19","file":"projects/project5/download/19.jpg","size":"JPG"},{"name":"31","file":"projects/project5/download/31.jpg","size":"JPG"},{"name":"32","file":"projects/project5/download/32.jpg","size":"JPG"},{"name":"33","file":"projects/project5/download/33.jpg","size":"JPG"}]}]};

// ============================================================
// LOAD PROJECTS
// ============================================================
async function loadProjects() {
    try {
        const response = await fetch('projects.json?v=' + Date.now());
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        PROJECTS = await response.json();
        initDynamicProjects();
    } catch (err) {
        console.warn('fetch() failed, using fallback data:', err.message);
        PROJECTS = PROJECTS_FALLBACK;
        initDynamicProjects();
    }
}

// ============================================================
// DYNAMIC PROJECTS RENDERING
// ============================================================
function initDynamicProjects() {
    const showcase = document.getElementById('projectsShowcase');
    if (!showcase) return;

    const projectKeys = Object.keys(PROJECTS);

    showcase.innerHTML = projectKeys.map((key, index) => {
        const proj = PROJECTS[key];
        const num = String(index + 1).padStart(2, '0');
        const stagger = index + 1;

        return `
            <article class="project-strip reveal stagger-${stagger}" data-project="${key}" onclick="openProject('${key}')">
                <span class="project-strip-num">${num}</span>
                <div class="project-strip-info">
                    <h3 class="project-strip-title">${proj.title || key}</h3>
                    <div class="project-strip-meta">
                        <span>${proj.type || 'Project'}</span>
                        <span>${proj.year || 'N/A'}</span>
                        <span>${proj.location || 'India'}</span>
                    </div>
                </div>
                <div class="project-strip-tags">
                    <span class="project-tag">${proj.type || 'Project'}</span>
                    <span class="project-tag">${proj.year || 'N/A'}</span>
                </div>
                <div class="project-strip-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
                <div class="project-strip-image">
                    ${proj.heroSrc ? `<img src="${proj.heroSrc}" alt="${proj.title}" loading="lazy">` : ''}
                </div>
            </article>
        `;
    }).join('');

    // Re-initialize reveal observers for new elements
    initRevealObserver();
}

// ============================================================
// PROJECT DETAIL OVERLAY
// ============================================================
let currentProjectKey = null;

function openProject(key) {
    const project = PROJECTS[key];
    if (!project) return;

    currentProjectKey = key;
    const overlay = document.getElementById('projectDetail');
    const content = document.getElementById('detailContent');
    const detailNum = document.getElementById('detailNum');
    const detailName = document.getElementById('detailName');

    // Update header
    const projectIndex = Object.keys(PROJECTS).indexOf(key);
    detailNum.textContent = String(projectIndex + 1).padStart(2, '0');
    detailName.textContent = project.title || key;

    // Build meta grid
    const metaItems = [
        { label: 'Year', value: project.year || 'N/A' },
        { label: 'Type', value: project.type || 'Project' },
        { label: 'Location', value: project.location || 'India' },
        { label: 'Area', value: project.area || 'Various' }
    ];

    const metaHtml = metaItems.map(item => `
        <div class="meta-item">
            <span class="meta-label">${item.label}</span>
            <span class="meta-value">${item.value}</span>
        </div>
    `).join('');

    // Build hero image
    const heroHtml = project.heroSrc
        ? `<div class="detail-hero">
            <img src="${project.heroSrc}" alt="${project.title}" loading="lazy">
           </div>`
        : '';

    // Build description
    const descHtml = `
        <div class="detail-description">
            <h2>${project.title || key} <span>${project.subtitle || ''}</span></h2>
            ${(project.description || []).map(p => `<p>${p}</p>`).join('')}
        </div>
    `;

    // Build gallery
    const galleryItems = (project.images || []).map((img, i) => {
        if (!img.src) return '';
        const caption = img.caption || `Image ${i + 1}`;
        return `
            <div class="gallery-item" onclick="openLightbox(${i}, '${key}')">
                <img src="${img.src}" alt="${caption}" loading="lazy">
                <div class="gallery-item-caption">${caption}</div>
            </div>
        `;
    }).join('');

    const galleryHtml = galleryItems
        ? `<div class="detail-gallery">
            <h3 class="gallery-heading">Image Gallery</h3>
            <div class="gallery-masonry">${galleryItems}</div>
           </div>`
        : '';

    // Build downloads
    const downloadsHtml = (project.downloads && project.downloads.length)
        ? `<div class="detail-downloads">
            <h3 class="downloads-heading">Downloads</h3>
            <div class="downloads-grid">
                ${project.downloads.map(d => `
                    <a href="${d.file}" class="download-item" download>
                        <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span class="download-name">${d.name}</span>
                        <span class="download-size">${d.size}</span>
                    </a>
                `).join('')}
            </div>
           </div>`
        : '';

    // Assemble content
    content.innerHTML = `
        <div class="detail-meta-grid">${metaHtml}</div>
        ${heroHtml}
        ${descHtml}
        ${galleryHtml}
        ${downloadsHtml}
    `;

    // Open overlay
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
}

function closeProject() {
    const overlay = document.getElementById('projectDetail');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentProjectKey = null;
}

// Close on click outside content
function handleDetailClick(e) {
    if (e.target === e.currentTarget) {
        closeProject();
    }
}

// ============================================================
// LIGHTBOX
// ============================================================
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentLightboxProject = null;

function openLightbox(index, projectKey) {
    const project = PROJECTS[projectKey || currentProjectKey];
    if (!project) return;

    currentLightboxProject = projectKey || currentProjectKey;
    currentLightboxImages = project.images || [];
    currentLightboxIndex = index;

    updateLightbox();
    document.getElementById('lightbox').classList.add('open');
    document.getElementById('lightbox').setAttribute('aria-hidden', 'false');
}

function updateLightbox() {
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    const current = currentLightboxImages[currentLightboxIndex];

    if (!current) return;

    img.src = current.src || '';
    img.alt = current.caption || '';
    caption.textContent = `${current.caption || ''} — ${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
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

// ============================================================
// NAVIGATION
// ============================================================
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll state
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        nav.classList.toggle('scrolled', currentScroll > 80);
        lastScroll = currentScroll;
    }, { passive: true });

    // Mobile toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            const isOpen = navLinks.classList.contains('mobile-open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// ============================================================
// THEME TOGGLE
// ============================================================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    // Check for saved theme or system preference
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
}

// ============================================================
// CUSTOM CURSOR
// ============================================================
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;

    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
        cursor.style.display = 'none';
        return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let isActive = false;
    const smoothFactor = 0.15;

    // Track mouse position
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

    // Animate cursor with RAF
    function animateCursor() {
        cursorX += (mouseX - cursorX) * smoothFactor;
        cursorY += (mouseY - cursorY) * smoothFactor;
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states
    const hoverElements = document.querySelectorAll(
        'a, button, [role="button"], .project-strip, .gallery-item, .contact-row, .download-item'
    );

    const addHoverListeners = (el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    };

    hoverElements.forEach(addHoverListeners);

    // Click states
    document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

    // Hide when leaving window
    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });

    // MutationObserver for dynamically added elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    const newElements = node.matches?.('a, button, [role="button"], .project-strip, .gallery-item, .contact-row, .download-item')
                        ? [node]
                        : node.querySelectorAll?.('a, button, [role="button"], .project-strip, .gallery-item, .contact-row, .download-item') || [];
                    newElements.forEach(addHoverListeners);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// ============================================================
// SCROLL REVEAL (INTERSECTION OBSERVER)
// ============================================================
function initRevealObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);

                // Animate skill bars if present
                const skillFills = entry.target.querySelectorAll('.skill-fill');
                skillFills.forEach(fill => {
                    const width = fill.dataset.width;
                    if (width) {
                        fill.style.setProperty('--skill-percent', width + '%');
                        fill.classList.add('animated');
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left').forEach(el => {
        observer.observe(el);
    });
}

// ============================================================
// SKILL BARS ANIMATION
// ============================================================
function initSkillBars() {
    const skillSection = document.querySelector('.about-skills');
    if (!skillSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach((fill, index) => {
                    const width = fill.dataset.width;
                    if (width) {
                        setTimeout(() => {
                            fill.style.setProperty('--skill-percent', width + '%');
                            fill.classList.add('animated');
                        }, index * 100);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillSection);
}

// ============================================================
// SMOOTH SCROLL
// ============================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Escape closes overlays
        if (e.key === 'Escape') {
            closeProject();
            closeLightbox();
        }

        // Arrow keys for lightbox
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('open')) {
            if (e.key === 'ArrowRight') lightboxNext();
            if (e.key === 'ArrowLeft') lightboxPrev();
        }
    });
}

// ============================================================
// INITIALIZATION
// ============================================================
function init() {
    // Page load sequence
    document.addEventListener('DOMContentLoaded', () => {
        loadProjects();
        initNavigation();
        initTheme();
        initCustomCursor();
        initRevealObserver();
        initSkillBars();
        initSmoothScroll();
        initKeyboardNav();
    });

    // Event listeners for overlays
    document.getElementById('detailClose')?.addEventListener('click', closeProject);
    document.getElementById('projectDetail')?.addEventListener('click', handleDetailClick);
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxNext')?.addEventListener('click', lightboxNext);
    document.getElementById('lightboxPrev')?.addEventListener('click', lightboxPrev);
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeLightbox();
    });
}

// Start
init();

console.log('Shashank Agarwal Portfolio — Brutalist Blueprint Aesthetic · 2026');
