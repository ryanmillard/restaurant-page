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
    logo.textContent = 'About';
    bubble.appendChild(logo);

    let catchphrase = document.createElement('span');
    catchphrase.classList.add('catch');
    catchphrase.textContent = 'Open times';
    bubble.appendChild(catchphrase);

    let list = document.createElement('ul');
    bubble.appendChild(list);

    function createTime(text) {
        let li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    }
    
    createTime('Sunday: 8am - 8pm');
    createTime('Monday: 6am - 6pm');
    createTime('Tuesday: 6am - 6pm');
    createTime('Wednesday: 6am - 6pm');
    createTime('Thursday: 6am - 10pm');
    createTime('Friday: 6am - 10pm');
    createTime('Saturday: 8am - 10pm');

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    bubble.appendChild(description);
}

export default createPage;