export default function renderAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <section class="about">
      <div class="container">
        <h2>Sobre mí</h2>
        <p>Soy desarrolladora web con un enfoque en crear soluciones modernas y sostenibles. Mi experiencia incluye trabajar con tecnologías como React, Node.js, MongoDB, y más. Estoy en constante aprendizaje y me apasiona crear productos que marquen una diferencia.</p>
      </div>
    </section>
  `;
}
