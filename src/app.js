import './scss/override-bootstrap.scss';
import './scss/main.scss';
import './scss/bootstrap override.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

const projects = document.querySelector(".numbers__amount--projects");
const employees = document.querySelector(".numbers__amount--employees");
const copper = document.querySelector(".numbers__amount--copper");
const clients = document.querySelector(".numbers__amount--clients");

projects.innerHTML = "497";
employees.innerHTML = "35+";
copper.innerHTML = "9750+";
clients.innerHTML = "65";