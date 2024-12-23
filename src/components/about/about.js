import { aboutMe } from "../../utils/data";

export default function renderAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <section class="about">
      <div class="container">
        <h2>Sobre mí</h2>
        <p>${aboutMe}</p>
      </div>
    </section>
  `;
}
