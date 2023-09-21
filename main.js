import menu from './db.js';
import { buttonsData } from './db.js';

const menuContainer = document.getElementById('menu-container');
const buttonsArea = document.getElementById('buttons-area');

document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    showButtons('all');
  });

  function displayMenuItems(menuItems) {
    console.log(menuItems);
  

let displayMenu = menuItems.map((item) => `
        <div id="card" class="d-flex gap-3 flex-column flex-md-row">
            <img class="rounded shadow" src="${item.img}" />
            <div>
                <div class="d-flex justify-content-between">
                    <h5>${item.title}</h5>
                    <p class="text-success"> $${item.price}</p>
                </div>
                <p class="lead">
                   ${item.desc}
                      </p>
            </div>
        </div>
`
);
displayMenu = displayMenu.join(' ');


menuContainer.innerHTML = displayMenu;
}
buttonsArea.addEventListener('click', searchCategeory);


function searchCategeory(e) {
    const categeory = e.target.dataset.category;

    const filtredMenu = menu.filter(
        (menuItem) => menuItem.category === categeory
);
if (categeory === 'all') {
    displayMenuItems(menu);
  } else {
    
    displayMenuItems(filtredMenu);
  }

  showButtons(categeory);
}

function showButtons(active) {
  
    buttonsArea.innerHTML = '';
 
    buttonsData.forEach((btn) => {
      
      const buttonElement = document.createElement('button');
      
      buttonElement.className = 'btn btn-outline-dark filter-btn';
      
      buttonElement.innerText = btn.text;
  
      buttonElement.dataset.category = btn.data;
      
      if (buttonElement.dataset.category === active) {
        buttonElement.classList.add('bg-dark', 'text-light');
      }
  
      buttonsArea.appendChild(buttonElement);
    });
  }