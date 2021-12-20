import searchBar from './searchBar.js';
import mainContent from './mainContent.js';
import * as Icons from './icons.js';
import './style.css';

//
//
// DOM manipulation
const icon = document.createElement('DIV');
icon.innerHTML = Icons.chevronDown;
document.body.appendChild(icon);
searchBar();

//
//
// Event listeners
const zip_input = document.getElementById('zipcode');
const search = document.forms["searchform"];
search.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const zipcode = zip_input.value;
    zip_input.value = "";
    mainContent(zipcode);
});
