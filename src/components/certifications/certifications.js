export const renderCertifications = (certifications) => {
  const certificationsContainer = document.getElementById('certifications');
  certificationsContainer.innerHTML = `
    <section class="titles">
      <h2 class="section-title">Formación</h2>
      <div class="titles-container">
        ${certifications.reverse().map(title => `
          <div class="title-item">
            <h3>${title.name}</h3>
            <div class="title-img-container">
              <a href="${title.url}" target="_blank" rel="noopener noreferrer">
                <img src="${title.img}" alt="${title.name}" class="title-image">
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>`;
}

