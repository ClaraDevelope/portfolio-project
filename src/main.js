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


let isRequestInProgress = false;

async function incrementarContador() {
  if (isRequestInProgress) return;

  try {
    isRequestInProgress = true;
    console.log("📡 Enviando solicitud para incrementar contador...");

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/contador`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`❌ Error al incrementar el contador: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Visitas incrementadas: ${data.count}`);
    return data.count;
  } catch (error) {
    console.error("❌ Error al incrementar el contador:", error);
  } finally {
    isRequestInProgress = false;
  }
}

async function obtenerContador() {
  try {
    console.log("📡 Solicitando el número total de visitas...");

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/contador`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`❌ Error al obtener el contador: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`📊 Visitas registradas: ${data.count}`);
    return data.count;
  } catch (error) {
    console.error("❌ Error al obtener el contador:", error);
  }
}

async function actualizarContador() {
  try {
    const incrementado = await incrementarContador();
    if (incrementado !== undefined) {
      const count = await obtenerContador();
      console.log(`🔢 El contador final es: ${count}`);
    }
  } catch (error) {
    console.error("❌ Error en la actualización del contador:", error);
  }
}

actualizarContador();
