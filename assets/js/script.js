document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navAnchors = navLinks.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && typeof projectsData !== 'undefined') {
        const featured = projectsData.filter(p => p.featured);
        projectsGrid.innerHTML = featured.map(project => `
            <a href="${project.link}" class="project-card" target="_blank">
                <div class="project-img-box">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <div class="project-title">${project.title}</div>
                </div>
            </a>
        `).join('');
    }

    // Scroll Animation Observer Setup
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal animation occurs once
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});