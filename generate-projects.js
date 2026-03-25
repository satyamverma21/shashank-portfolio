#!/usr/bin/env node
/* ============================================================
 Generate projects manifest from folder structure
 Run: node generate-projects.js
============================================================ */

const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.join(__dirname, 'projects');
const OUTPUT_FILE = path.join(__dirname, 'projects.json');
const PROJECT_METADATA_FILE = path.join(__dirname, 'project-metadata.json');

// Default metadata for projects (can be customized)
const DEFAULT_METADATA = {
  project1: {
    title: '9th Semester Academic Project',
    subtitle: 'Residential Design',
    year: '2026',
    type: 'Residential',
    location: 'India',
    tools: 'AutoCAD · SketchUp · Lumion',
    area: 'Multi-storey',
    category: 'residential',
    heroGradient: 'linear-gradient(135deg, #B8A88C 0%, #7A6A58 100%)',
    description: [
      'A comprehensive residential design project from 9th Semester.',
      'Complete architectural documentation from site plan to structural drawings.'
    ],
    details: [
      { label: 'Type', value: 'Residential' },
      { label: 'Floors', value: 'Multi-storey' },
      { label: 'Semester', value: '9th' }
    ]
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
    heroGradient: 'linear-gradient(135deg, #1b2838 0%, #2a475e 100%)',
    description: [
      'Sports Complex with pneumatic form structures.',
      'Masterplan with specialized sporting facilities.'
    ],
    details: [
      { label: 'Type', value: 'Sports Complex' },
      { label: 'Feature', value: 'Pneumatic Structures' },
      { label: 'Year', value: '2024' }
    ]
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
    heroGradient: 'linear-gradient(135deg, #2D3748 0%, #4A5568 100%)',
    description: [
      'A comprehensive collection of academic work spanning multiple semesters.',
      'Projects range from conceptual explorations to detailed architectural drawings.'
    ],
    details: [
      { label: 'Type', value: 'Academic Collection' },
      { label: 'Span', value: 'Multiple Semesters' },
      { label: 'Focus', value: 'Design Development' }
    ]
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
    heroGradient: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
    description: [
      'Leisure facility designed around a central swimming pool.',
      'Addressing circulation patterns, safety protocols, and user experience.'
    ],
    details: [
      { label: 'Type', value: 'Leisure Facility' },
      { label: 'Feature', value: 'Swimming Pool' },
      { label: 'Year', value: '2024' }
    ]
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
    heroGradient: 'linear-gradient(135deg, #744210 0%, #B7791F 100%)',
    description: [
      'Academic portfolio demonstrating spatial thinking and architectural representation.',
      'Collection includes sketches, technical drawings, and digital renderings.'
    ],
    details: [
      { label: 'Type', value: 'Academic Portfolio' },
      { label: 'Semester', value: '6th' },
      { label: 'Focus', value: 'Spatial Design' }
    ]
  }
};

function getFiles(dir, extensions = null) {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files
    .filter(f => f.isFile())
    .filter(f => {
      if (!extensions) return true;
      const ext = path.extname(f.name).toLowerCase().slice(1);
      return extensions.includes(ext);
    })
    .map(f => f.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function generateProjectsManifest() {
  console.log('Scanning projects directory...\n');

  if (!fs.existsSync(PROJECTS_DIR)) {
    console.error(`Error: Projects directory not found: ${PROJECTS_DIR}`);
    process.exit(1);
  }

  const projectFolders = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(f => f.isDirectory())
    .map(f => f.name);

  if (projectFolders.length === 0) {
    console.log('No project folders found.');
    process.exit(0);
  }

  const projects = {};

  projectFolders.forEach((folder, index) => {
    const projectPath = path.join(PROJECTS_DIR, folder);
    const imgPath = path.join(projectPath, 'img');
    const downloadPath = path.join(projectPath, 'download');

    // Get images from img folder
    const images = getFiles(imgPath, ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']);

    // Get downloads from download folder
    const downloads = getFiles(downloadPath, ['pdf', 'jpg', 'jpeg', 'png', 'dwg', 'zip']);

    // Get metadata (custom or default)
    const customMetadata = fs.existsSync(PROJECT_METADATA_FILE) ?
      JSON.parse(fs.readFileSync(PROJECT_METADATA_FILE, 'utf-8')) : {};
    const metadata = customMetadata[folder] || DEFAULT_METADATA[folder] || {
      title: folder.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      subtitle: 'Project',
      year: new Date().getFullYear().toString(),
      type: 'Portfolio',
      location: 'India',
      tools: 'AutoCAD · SketchUp',
      area: 'Various',
      category: 'public',
      heroGradient: 'linear-gradient(135deg, #666 0%, #333 100%)',
      description: ['Project description.'],
      details: []
    };

    // Determine hero image (first image or first download)
    let heroSrc = '';
    if (images.length > 0) {
      heroSrc = `projects/${folder}/img/${encodeURIComponent(images[0])}`;
    } else if (downloads.length > 0) {
      heroSrc = `projects/${folder}/download/${encodeURIComponent(downloads[0])}`;
    }

    // Build image gallery
    const gallery = images.map((img, i) => {
      const num = String(i + 1).padStart(2, '0');
      return {
        src: `./projects/${folder}/img/${encodeURIComponent(img)}`,
        caption: img.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      };
    });

    // Build downloads list
    const downloadList = downloads.map(file => {
      const ext = path.extname(file).toLowerCase().slice(1);
      const sizeLabel = ext.toUpperCase();
      const name = file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      return {
        name,
        file: `./projects/${folder}/download/${encodeURIComponent(file)}`,
        size: sizeLabel
      };
    });

    projects[folder] = {
      ...metadata,
      heroSrc,
      images: gallery,
      downloads: downloadList
    };

    const num = String(index + 1).padStart(2, '0');
    console.log(`  ${num}. ${folder}`);
    console.log(`     Images: ${images.length}`);
    console.log(`     Downloads: ${downloads.length}`);
    console.log();
  });

  // Write the manifest
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));
  console.log(`Generated: ${OUTPUT_FILE}`);
  console.log('\nTo update the site, run this script after adding/removing files.');
}

// Run
generateProjectsManifest();
console.log("Updated projects json")