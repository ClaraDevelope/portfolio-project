import renderAbout from './components/about/about';
import { renderCertifications } from './components/certifications/certifications';
import renderContact from './components/contact/contact';
import renderFooter from './components/footer/footer';
import renderHeader from './components/header/header';
import renderIntro from './components/intro/intro';
import renderProjects from './components/projects/project';
import renderTechnologies from './components/technologies/tech';
import './style.css'
import { CERTIFICATIONS } from './utils/data';

renderHeader();
renderIntro();
renderProjects();
renderCertifications(CERTIFICATIONS)
renderTechnologies()
renderAbout();
renderContact();
renderFooter();

// Llamada para incrementar el contador
fetch("https://backend-portfolio-six-delta.vercel.app/api/v1/contador", {
  method: "POST", // Método POST para incrementar el contador
  headers: {
    "Content-Type": "application/json"
  },
})
.then(response => {
  console.log("Respuesta del POST recibido:", response);
  return response.json();  // Convertimos la respuesta a JSON
})
.then(data => {
  console.log(`Visitas incrementadas: ${data.count}`);  // Muestra las visitas incrementadas
  // Después de incrementar, obtenemos el contador actualizado
  return fetch("https://backend-portfolio-six-delta.vercel.app/api/v1/contador/get", {
    method: "GET",  // Método GET para obtener el contador
    headers: {
      "Content-Type": "application/json"
    },
  });
})
.then(response => {
  console.log("Respuesta del GET recibido:", response);
  return response.json();  // Convertimos la respuesta a JSON
})
.then(data => {
  console.log(`Visitas registradas: ${data.count}`);  // Muestra el contador actualizado
})
.catch(error => {
  console.error("Error al actualizar el contador:", error);  // Capturamos cualquier error
});
