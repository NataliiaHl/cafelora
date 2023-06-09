import './style.css';
import { HomePage } from './pages/HomePage/HomePage.js';
import { OrderPage } from './pages/HomePage/OrderPage/OrderPage.js';

const appElement = document.querySelector('#app'); 

const { pathname } = window.location;

if (pathname === BASE_PATH + '/') {
  document.querySelector('#app').append(HomePage());
} else if (pathname === BASE_PATH + '/objednavka') {
    document.querySelector('#app').append(OrderPage())
}
