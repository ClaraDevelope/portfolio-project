export default function renderContact() {
  const contact = document.getElementById('contact');
  contact.innerHTML = `
    <section class="contact">
      <div class="container">
        <h2>Contacto</h2>
        <form action="#" method="POST">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" class="btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section>
  `;
}
