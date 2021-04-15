function home() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.setAttribute('id', 'home');

  const homeText = document.createElement('div');
  homeText.setAttribute('class', 'home-text');

  const homeH4 = document.createElement('h3');
  homeH4.textContent = 'Grill Unlike Any';
  const homeH5 = document.createElement('h3');
  homeH5.textContent = 'Very Yummy';


  homeText.appendChild(homeH4);
  homeText.appendChild(homeH5);

  section.appendChild(homeText);
  content.appendChild(section);

  // footer();
}

export default home;