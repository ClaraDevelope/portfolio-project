import './alert.css'
export const alert = () => {
  // Crear el contenedor del alert
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert', 'success');

  // Crear el contenido del alert
  const alertIcon = document.createElement('span');
  alertIcon.classList.add('alert-icon');
  alertIcon.innerHTML = '&#10004;'; // El ícono de check (✔️)

  const alertText = document.createElement('span');
  alertText.classList.add('alert-text');
  alertText.textContent = 'Mensaje enviado con éxito';

  // Añadir icono y texto al contenedor
  alertContainer.appendChild(alertIcon);
  alertContainer.appendChild(alertText);

  // Añadir el alert al body
  document.body.appendChild(alertContainer);

  // Remover el alert después de unos segundos
  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
};

export const errorAlert = () => {

  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert', 'error');

  const alertIcon = document.createElement('span');
  alertIcon.classList.add('alert-icon');
  // alertIcon.innerHTML = '&#10060;'; 

  const alertText = document.createElement('span');
  alertText.classList.add('alert-text');
  alertText.textContent = 'Hubo un error al enviar el mensaje';

  alertContainer.appendChild(alertIcon);
  alertContainer.appendChild(alertText);

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 4000);
};
