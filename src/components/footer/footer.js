export default function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <footer>
      <div class="container">
         <p>© 2024 Clara Manzano Corona | Código abierto para aprendizaje y colaboración | <a href="https://github.com/ClaraDevelope" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/clara-manzano-corona/" target="_blank">LinkedIn</a></p>
      </div>
    </footer>
  `;
}
