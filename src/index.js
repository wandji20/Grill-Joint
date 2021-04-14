import './main.scss';
import "../assets/chicken.jpg";
import header from './header'
import home from './home'
import footer from './footer'






function menu(){
  const content = document.getElementById('content');
  const section = document.createElement('section');
  section.setAttribute('id', 'menu');
  section.setAttribute('class', 'container-fluid remove-padding');


  const item1 = section.appendChild(document.createElement('div'));
  item1.setAttribute('class', 'menu-item')
  const item1Img = item1.appendChild(document.createElement('div'));
  const img1 = item1Img.appendChild(document.createElement('img'))
  img1.setAttribute('class', 'img-fluid');
  img1.setAttribute('src', '../assets/porc.jpg' )
  const item1Content = item1.appendChild(document.createElement('div'));
  item1Content.setAttribute('class', 'item-content d-flex justify-content-between bg-dark text-light')
  const item1P1 = item1Content.appendChild(document.createElement('p'));
  item1P1.textContent = 'Porc';
  const item1P2 = item1Content.appendChild(document.createElement('p'))
  item1P2.setAttribute('class', 'btn text-light');
  item1P2.textContent = '4000 Frs';


  const item2 = section.appendChild(document.createElement('div'));
  item2.setAttribute('class', 'menu-item')
  const item2Img = item2.appendChild(document.createElement('div'));
  const img2 = item2Img.appendChild(document.createElement('img'))
  img2.setAttribute('class', 'img-fluid');
  img2.setAttribute('src', '../assets/porc.jpg' )
  const item2Content = item2.appendChild(document.createElement('div'));
  item2Content.setAttribute('class', 'item-content d-flex justify-content-between bg-dark text-light')
  const item2P1 = item2Content.appendChild(document.createElement('p'));
  item2P1.textContent = 'Chicken';
  const item2P2 = item2Content.appendChild(document.createElement('p'))
  item2P2.setAttribute('class', 'btn text-light');
  item2P2.textContent = '3500 Frs';
  


  const item3= section.appendChild(document.createElement('div'));
  item3.setAttribute('class', 'menu-item')
  const item3Img = item3.appendChild(document.createElement('div'));
  const img3= item3Img.appendChild(document.createElement('img'))
  img3.setAttribute('class', 'img-fluid');
  img3.setAttribute('src', '../assets/porc.jpg' )
  const item3Content = item3.appendChild(document.createElement('div'));
  item3Content.setAttribute('class', 'item-content d-flex justify-content-between bg-dark text-light')
  const item3P1 = item3Content.appendChild(document.createElement('p'));
  item3P1.textContent = 'Goat';
  const item3P2 = item3Content.appendChild(document.createElement('p'))
  item3P2.setAttribute('class', 'btn text-light');
  item3P2.textContent = '5000 Frs';

    const item4= section.appendChild(document.createElement('div'));
  item4.setAttribute('class', 'menu-item')
  const item4Img = item4.appendChild(document.createElement('div'));
  const img4= item4Img.appendChild(document.createElement('img'))
  img4.setAttribute('class', 'img-fluid');
  img4.setAttribute('src', '../assets/porc.jpg' )
  const item4Content = item4.appendChild(document.createElement('div'));
  item4Content.setAttribute('class', 'item-content d-flex justify-content-between bg-dark text-light')
  const item4P1 = item4Content.appendChild(document.createElement('p'));
  item4P1.textContent = 'Sheep';
  const item4P2 = item4Content.appendChild(document.createElement('p'))
  item4P2.setAttribute('class', 'btn text-light');
  item4P2.textContent = '5500 Frs';

  const item5= section.appendChild(document.createElement('div'));
  item5.setAttribute('class', 'menu-item')
  const item5Img = item5.appendChild(document.createElement('div'));
  const img5= item5Img.appendChild(document.createElement('img'))
  img5.setAttribute('class', 'img-fluid');
  img5.setAttribute('src', '../assets/porc.jpg' )
  const item5Content = item5.appendChild(document.createElement('div'));
  item5Content.setAttribute('class', 'item-content d-flex justify-content-between bg-dark text-light')
  const item5P1 = item5Content.appendChild(document.createElement('p'));
  item5P1.textContent = 'Goat';
  const item5P2 = item5Content.appendChild(document.createElement('p'))
  item5P2.setAttribute('class', 'btn text-light');
  item5P2.textContent = '5000 Frs';
  
  
  
  content.appendChild(section);
  
}



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
home();
// menu();
// contact();
footer();