import { PROJECTS } from "../../utils/data";

export default function renderProjects() {
  const projects = document.getElementById('projects');

  const projectItems = PROJECTS.reverse().map(project => {
    return `
      <div class="project-item">
        <img src="${project.imgUrl}" alt="${project.name}" class="project-img" />
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${project.technologies.map(tech => {
            return `<img src="${tech.img}" alt="${tech.name}" class="tech-img" />`;
          }).join('')}
        </div>
        <div class="project-actions">
          <a href="${project.url}" target="_blank" class="btn-primary">Ver Proyecto</a>
          <a href="${project.gitHub}" target="_blank" class="btn-secondary">Ver en GitHub</a>
        </div>
      </div>
    `;
  }).join('');

  projects.innerHTML = `
    <section class="projects">
      <div class="container">
        <h2 class='section-title'>Proyectos</h2>
        <div class="project-list">
          ${projectItems}
        </div>
      </div>
    </section>
  `;
}

