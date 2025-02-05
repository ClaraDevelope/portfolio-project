import { aboutMe } from "../../utils/data";

export default function renderAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <section class="about">
      <div class="container">
        <h2>Perfil</h2>
        <p>${aboutMe.p1}</p>
        <p>${aboutMe.p2}</p>
        <p>${aboutMe.p3}</p>
        <img src="yo-gato.webp" alt="yo-Bolivia" class='avatar'/>
      </div>
    </section>
  `;
}
