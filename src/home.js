import chefPNG from './chef.png';

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
    logo.textContent = 'Doughlicious';
    bubble.appendChild(logo);

    let catchphrase = document.createElement('span');
    catchphrase.classList.add('catch');
    catchphrase.textContent = 'The best local Pizza';
    bubble.appendChild(catchphrase);

    let chef = document.createElement('img');
    chef.id = 'chef';
    chef.src = chefPNG;
    bubble.appendChild(chef);

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    bubble.appendChild(description);
}

export default createPage;