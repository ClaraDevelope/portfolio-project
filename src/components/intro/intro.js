export default function renderIntro() {
  const intro = document.getElementById('home');
  intro.innerHTML = `
    <section class="intro">
      <div class="container">
        <div class="intro-content">
          <div class="avatar-container">
            <img src="/yo-blur.png" alt="Clara Manzano" class="avatar">
          </div>
          <div class="text-content">
            <h1>Hola, soy Clara Manzano Corona</h1>
            <h3>Desarrolladora web full-stack</h3>
            <p>Cada línea es un latido, y cada proyecto, una historia. ¿Construimos la siguiente?</p>
            <div class="btn-container">
              <a href="https://github.com/tu-github" target="_blank" class="btn-rrss"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" class="btn-rrss"><i class="fab fa-linkedin"></i></a>
              <a href="/CV Clara Manzano. Desarrollo web.pdf" target="_blank" class="btn-rrss"><i class="fas fa-file-download"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


