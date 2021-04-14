function header(){
  const content = document.getElementById('content');
  const header = document.createElement('header')
  header.setAttribute('class', 'header');
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-md navbar-dark justify-content-around');
  
  let grillLink = document.createElement('a');
  grillLink.textContent = 'Grill Joint';
  grillLink.setAttribute('class', ' h4 ');
  nav.appendChild(grillLink);
  
  let homeLink = document.createElement('a');
  homeLink.textContent = 'HOME';
  homeLink.setAttribute('class', 'd-none d-md-inline home-link h4');
  nav.appendChild(homeLink)

  
  let menuLink = document.createElement('a');
  menuLink.textContent = 'MENU';
  menuLink.setAttribute('class', 'h4 d-none d-md-inline menu-link');
  nav.appendChild(menuLink);

  let contactLink = document.createElement('a');
  contactLink.textContent = 'CONTACT US';
  contactLink.setAttribute('class', 'h4 contact-link d-none d-md-inline');
  nav.appendChild(contactLink);

  header.appendChild(nav);

  content.appendChild(header);

}

export default header;