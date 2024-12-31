import emailjs from 'emailjs-com';
import { alert, errorAlert } from '../alert/alert';

export default function renderContact() {
  const contact = document.getElementById('contact');
  contact.innerHTML = `
    <section class="contact">
      <div class="container">
        <h2>Contacto</h2>
        <form id="contactForm">
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

  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
  
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_03lub14', 'template_p5c876e', templateParams, 'ua9jkKvxXJx73MyJa') 
      .then(function (response) {
        console.log('Éxito!', response.status, response.text);
        alert()
        form.reset();  
      }, function (error) {
        console.error('Error:', error);
        errorAlert()
      });
  });
}
