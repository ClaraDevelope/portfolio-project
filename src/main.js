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