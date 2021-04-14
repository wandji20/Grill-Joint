function footer() {
  const content = document.getElementById('content');
  const footer = document.createElement('footer');
  const list = footer.appendChild(document.createElement('ul'));
  list.setAttribute('class', 'd-flex justify-content-around my-auto');
  const l1 = list.appendChild(document.createElement('li'));
  l1.setAttribute('class', 'd-none d-md-inline');
  l1.textContent = 'grill_joint@email.com';
  const l2 = list.appendChild(document.createElement('li'));
  l2.textContent = 'xxx.xxx.xxx';
  const l3 = list.appendChild(document.createElement('li'));
  l3.setAttribute('class', 'd-none d-md-inline');
  l3.textContent = '@grill_joint';

  content.appendChild(footer);
}

export default footer;