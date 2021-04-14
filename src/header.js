import menu from './menu';
import contact from './contact';
import home from './home';

function header() {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  header.setAttribute('class', 'header');
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-md navbar-dark justify-content-around');

  const grillLink = document.createElement('a');
  grillLink.textContent = 'Grill Joint';
  grillLink.setAttribute('class', ' h4 ');
  nav.appendChild(grillLink);

  const homeLink = document.createElement('a');
  homeLink.textContent = 'HOME';
  homeLink.setAttribute('class', 'd-none d-md-inline home-link h4');
  nav.appendChild(homeLink);


  const menuLink = document.createElement('a');
  menuLink.textContent = 'MENU';
  menuLink.setAttribute('class', 'h4 d-none d-md-inline menu-link');
  nav.appendChild(menuLink);


  const contactLink = document.createElement('a');
  contactLink.textContent = 'CONTACT US';
  contactLink.setAttribute('class', 'h4 contact-link d-none d-md-inline');
  nav.appendChild(contactLink);

  header.appendChild(nav);

  content.appendChild(header);

  const menuBtn = document.querySelector('.menu-link');
  menuBtn.addEventListener('click', menu);
  // menuBtn.addEventListener('click', (e)=>{
  //   console.log(e.target)
  // });

  const homeBtn = document.querySelector('.home-link');
  homeBtn.addEventListener('click', home);

  const contactBtn = document.querySelector('.contact-link');
  contactBtn.addEventListener('click', contact);
}

export default header;