import { TECHNOLOGIES } from "../../utils/data.js";

export default function renderTechnologies() {
  const technologiesContainer = document.getElementById('technologies');
  
  // Creamos la estructura de la sección de tecnologías
  technologiesContainer.innerHTML = `
    <section class="technologies">
      <h2 class="section-title">Tecnologías</h2>
      <div class="tech-container">
        <div class="tech-category">
          <h3>Frontend</h3>
          <div class="tech-items">
            ${TECHNOLOGIES.frontend.map(tech => `
              <div class="tech-item">
                <img src="${tech.img}" alt="${tech.name}" class="tech-icon">
                <p>${tech.name}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="tech-category">
          <h3>Backend</h3>
          <div class="tech-items">
            ${TECHNOLOGIES.backend.map(tech => `
              <div class="tech-item">
                <img src="${tech.img}" alt="${tech.name}" class="tech-icon">
                <p>${tech.name}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="tech-category">
          <h3>Herramientas</h3>
          <div class="tech-items">
            ${TECHNOLOGIES.herramientas.map(tech => `
              <div class="tech-item">
                <img src="${tech.img}" alt="${tech.name}" class="tech-icon">
                <p>${tech.name}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
