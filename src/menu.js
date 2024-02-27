import pepperoniIMG from './pepperoni.webp';
import cheeseIMG from './cheese.webp';
import hawaiianIMG from './hawaiian.webp';
import cheeseburgerIMG from './cheeseburger.webp';
import meateorIMG from './meateor.webp';

function createPage() {
    let content = document.getElementById('content');
    content.textContent = '';

    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    content.appendChild(bubble);

    let logo = document.createElement('span');
    logo.classList.add('logo');
    logo.style.display = 'block';
    logo.style.color = 'var(--red)';
    logo.style.fontSize = '50px';
    logo.textContent = 'Menu';
    bubble.appendChild(logo);

    let pizzaList = document.createElement('div');
    pizzaList.classList.add('pizza-list');
    bubble.appendChild(pizzaList);

    function createPizza(icon, pizzaName, pizzaPrice) {
        let pizzaItem = document.createElement('div');
        pizzaItem.classList.add('pizza-item');
        pizzaItem.style.backgroundImage = `url(${icon})`;
        pizzaList.appendChild(pizzaItem);

        let panel = document.createElement('div');
        panel.classList.add('pizza-panel');
        pizzaItem.appendChild(panel);
        
        let name = document.createElement('span');
        name.classList.add('pizza-name');
        name.textContent = pizzaName;
        panel.appendChild(name);

        let price = document.createElement('span');
        price.classList.add('pizza-price');
        price.textContent = `£${pizzaPrice.toFixed(2)}`;
        panel.append(price);
    }

    createPizza(pepperoniIMG, 'Pepperoni', 10);
    createPizza(cheeseIMG, 'Cheese', 8.50);
    createPizza(hawaiianIMG, 'Hawaiian', 11.50);
    createPizza(cheeseburgerIMG, 'Cheeseburger', 15);
    createPizza(meateorIMG, 'Meateor', 15);
}

export default createPage;