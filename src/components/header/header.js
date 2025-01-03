export default function renderHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
    <header>
      <nav>
        <div id="menu-icon" class="menu-icon">&#9776;</div>
        <ul id="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#technologies">Tecnologías</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `;

  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    console.log('scrolling');  
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      console.log('Header scrolled');  
      header.classList.add('scrolled');
    } else {
      console.log('Header not scrolled');
      header.classList.remove('scrolled');
    }
});
}
