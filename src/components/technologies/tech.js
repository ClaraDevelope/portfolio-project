import { CATEGORY_NAMES, TECHNOLOGIES } from "../../utils/data.js";

export default function renderTechnologies() {
  const technologiesContainer = document.getElementById('technologies');
  technologiesContainer.innerHTML = `
  <section class="technologies">
    <h2 class="section-title">Tecnologías</h2>
    <div class="tech-container">
      ${Object.keys(TECHNOLOGIES).map(categoryKey => `
        <div class="tech-category">
          <h3>${CATEGORY_NAMES[categoryKey] || categoryKey}</h3>
          <div class="tech-items">
            ${TECHNOLOGIES[categoryKey].map(tech => `
              <div class="tech-item">
                <img src="${tech.img}" alt="${tech.name}" class="tech-icon">
                <p>${tech.name}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </section>
`;
}
