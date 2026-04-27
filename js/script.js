// Current Year
document.querySelector("#year").textContent = new Date().getFullYear();

// Data
const skills = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git', 'REST APIs', 'Figma', 'UX/UI'];
const projects = [
    { title: 'Portfolio Website', desc: 'Personal portfolio built with modern web technologies and clean design principles.', tags: ['React', 'Tailwind CSS', 'Responsive'], icon: 'globe' },
    { title: 'React App', desc: 'Interactive React application with state management and dynamic UI components.', tags: ['React', 'JavaScript', 'API'], icon: 'code-2' },
    { title: 'Business Landing Page', desc: 'High-converting landing page for a startup with optimized performance.', tags: ['Next.js', 'SEO', 'Animation'], icon: 'rocket' },
    { title: 'Dashboard UI Concept', desc: 'Data visualization dashboard with clean information architecture.', tags: ['TypeScript', 'Figma', 'UX/UI'], icon: 'layout-dashboard' }
];
const experiences = [
    { role: 'Web Coordination / UX Improvements', org: 'Code for Romania', desc: 'Contributed to civic tech projects improving user experience and web coordination for community-driven platforms.', icon: 'heart' },
    { role: 'Technical Service Engineer', org: 'Industrial Sector', desc: 'Problem solving, diagnostics, and customer communication — building a foundation of reliability and systematic thinking.', icon: 'wrench' }
];

// Render skills
const sg = document.getElementById('skills-grid');
skills.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = `sr sr-d${Math.min(i + 1, 10)} skill-chip px-5 py-2.5 rounded-full text-sm font-medium cursor-default`;
    d.style.cssText = `background:var(--surface2);border:1px solid rgba(255,255,255,.06);color:var(--text)`;
    d.textContent = s;
    sg.appendChild(d);
});

// Render projects
const pg = document.getElementById('projects-grid');
projects.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = `sr sr-d${Math.min(i + 1, 4)} project-card p-6 rounded-xl border cursor-default`;
    d.style.cssText = `background:var(--surface);border-color:rgba(255,255,255,.06)`;
    d.innerHTML = `
<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background:var(--accent-dim)">
<i data-lucide="${p.icon}" style="width:20px;height:20px;color:var(--accent)"></i>
</div>
<h3 class="text-lg font-bold mb-2">${p.title}</h3>
<p class="text-sm mb-4 leading-relaxed" style="color:var(--muted)">${p.desc}</p>
<div class="flex flex-wrap gap-2">${p.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded-full font-medium" style="background:var(--accent-dim);color:var(--accent)">${t}</span>`).join('')}</div>
`;
    pg.appendChild(d);
});

// Render experience
const el = document.getElementById('experience-list');
experiences.forEach((e, i) => {
    const d = document.createElement('div');
    d.className = `sr sr-d${i + 1} p-6 rounded-xl border flex gap-5 items-start`;
    d.style.cssText = `background:var(--surface2);border-color:rgba(255,255,255,.06)`;
    d.innerHTML = `
<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:var(--accent-dim)">
<i data-lucide="${e.icon}" style="width:20px;height:20px;color:var(--accent)"></i>
</div>
<div>
<h3 class="text-base font-bold mb-1">${e.role}</h3>
<p class="text-sm font-medium mb-2" style="color:var(--accent)">${e.org}</p>
<p class="text-sm leading-relaxed" style="color:var(--muted)">${e.desc}</p>
</div>
`;
    el.appendChild(d);
});

lucide.createIcons();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.sr').forEach(el => observer.observe(el));

// Mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
}));

// Element SDK
const defaultConfig = {
    hero_headline: 'Frontend Developer building clean, modern web experiences.',
    hero_subheadline: 'React, Next.js, JavaScript, UX/UI and real-world problem solving.',
    about_text: 'Technical professional with a strong hands-on background, transitioning experience into modern frontend development. Reliable, fast learner, and a natural problem solver who thrives in collaborative environments.',
    contact_email: 'hello@julianstan.com',
    contact_location: 'Altenburg / Leipzig Area',
    background_color: '#111114',
    surface_color: '#18181c',
    text_color: '#f0f0f2',
    accent_color: '#3898ec',
    muted_color: '#8a8a9a',
    font_family: 'Manrope',
    font_size: 16
};

function applyConfig(config) {
    const c = { ...defaultConfig, ...config };
    // Colors
    document.documentElement.style.setProperty('--bg', c.background_color);
    document.documentElement.style.setProperty('--surface', c.surface_color);
    document.documentElement.style.setProperty('--text', c.text_color);
    document.documentElement.style.setProperty('--accent', c.accent_color);
    document.documentElement.style.setProperty('--muted', c.muted_color);
    document.body.style.backgroundColor = c.background_color;
    document.body.style.color = c.text_color;

    // Font
    const ff = c.font_family + ', sans-serif';
    document.body.style.fontFamily = ff;

    // Font size
    const bs = c.font_size;
    document.querySelectorAll('h1').forEach(el => el.style.fontSize = '');
    document.querySelectorAll('h2').forEach(el => el.style.fontSize = (bs * 2) + 'px');
    document.querySelectorAll('p,span,.text-sm,.text-base').forEach(el => {
        if (!el.closest('nav') && !el.closest('footer')) el.style.fontFamily = ff;
    });

    // Text
    document.getElementById('hero-headline').innerHTML = c.hero_headline.replace(/,\s*/g, ',<br class="hidden sm:block"> ');
    document.getElementById('hero-subheadline').textContent = c.hero_subheadline;
    document.getElementById('about-text').textContent = c.about_text;
    document.getElementById('contact-email-text').textContent = c.contact_email;
    document.getElementById('contact-email-card').href = 'mailto:' + c.contact_email;
    document.getElementById('contact-location-text').textContent = c.contact_location;
}

window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => applyConfig(config),
    mapToCapabilities: (config) => ({
        recolorables: [
            { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }) } },
            { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }) } },
            { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }) } },
            { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }) } },
            { get: () => config.muted_color || defaultConfig.muted_color, set: (v) => { config.muted_color = v; window.elementSdk.setConfig({ muted_color: v }) } }
        ],
        borderables: [],
        fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }) } },
        fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }) } }
    }),
    mapToEditPanelValues: (config) => new Map([
        ['hero_headline', config.hero_headline || defaultConfig.hero_headline],
        ['hero_subheadline', config.hero_subheadline || defaultConfig.hero_subheadline],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['contact_email', config.contact_email || defaultConfig.contact_email],
        ['contact_location', config.contact_location || defaultConfig.contact_location]
    ])
});