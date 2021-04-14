import './main.scss';
import porc from "../assets/porc.jpg"

const porcImg = new Image();
porcImg.src = porc;
porcImg.setAttribute('class', 'img-fluid')

const menuText = document.querySelector('.menu-text');
const container = document.querySelector('.container-fluid');
const menu = document.querySelector('#menu');

menu.insertBefore(porcImg, menuText );