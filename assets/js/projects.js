document.addEventListener('DOMContentLoaded', () => {
    const webGrid = document.getElementById('web-projects-grid');
    const gameGrid = document.getElementById('game-projects-grid');

    if (typeof projectsData === 'undefined') return;

    const webProjects = projectsData.filter(p => p.category === 'web');
    const gameProjects = projectsData.filter(p => p.category === 'game');

    // Web projects
    if (webGrid) {
        webGrid.innerHTML = webProjects.map(project => `
            <a href="${project.link}" class="project-card" target="_blank">
                <div class="project-img-box">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <div class="project-title">${project.title}</div>
                    <p class="project-desc">${project.description}</p>
                </div>
            </a>
        `).join('');
    }

    if (gameGrid) {
        if (gameProjects.length > 0) {
            gameGrid.innerHTML = gameProjects.map(project => `
                <a href="${project.link}" class="project-card" target="_blank">
                    <div class="project-img-box">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info">
                        <div class="project-title">${project.title}</div>
                        <p class="project-desc">${project.description}</p>
                    </div>
                </a>
            `).join('');
        } else {
            gameGrid.innerHTML = `
                <div class="coming-soon-box">
                    <div class="title">Coming Soon</div>
                    <p>No games published yet — currently building something in Godot Engine. Check back soon.</p>
                </div>
            `;
        }
    }
});