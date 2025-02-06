export default function renderHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
    <header>
      <nav>
        <div id="menu-icon" class="menu-icon">&#9776;</div>
        <ul id="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#certifications">Formación</a></li>
          <li><a href="#technologies">Tecnologías</a></li>
          <li><a href="#about">Perfil</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `;

  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const menuContainer = document.querySelector('nav');  

  menuIcon.addEventListener('click', (event) => {
    navLinks.classList.toggle('active');
    event.stopPropagation(); 
  });


  window.addEventListener('click', (event) => {
    if (!menuContainer.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  });

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {  
      header.classList.add('scrolled');
    } else {;
      header.classList.remove('scrolled');
    }
  });
}

