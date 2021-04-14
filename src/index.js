import './main.scss';
import "../assets/chicken.jpg";
import header from './header'
import home from './home'
import footer from './footer'
import menu from './menu'









function contact(){
  const content = document.getElementById('content');
  const section = document.createElement('section');
  section.setAttribute('id', 'contact')
  section.setAttribute('class', 'container-fluid remove-padding');

  const contactText = section.appendChild(document.createElement('div'));
  contactText.setAttribute('class', 'contact-text text-success my-auto ml-5 fs-1 fw-bold');

  const email = contactText.appendChild(document.createElement('h4'))
  email.textContent = 'Email: grill@email.com';
  const phone = contactText.appendChild(document.createElement('h4'))
  phone.textContent = 'Tel: xxx.xxx.xxx';
  const twitter = contactText.appendChild(document.createElement('h4'))
  twitter.textContent = 'Twitter: @grill_joint';
  const instagram = contactText.appendChild(document.createElement('h4'))
  instagram.textContent = 'Instagram: Mr_Grill';

  content.appendChild(section);

}




header();
// home();
menu();
// contact();
footer();