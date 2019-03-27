window.onload = init;

function init () {
    const searchButton = document.querySelector('#search');
    searchButton.addEventListener('click', search);

    const displayAllButton = document.querySelector('#display-all');
    displayAllButton.addEventListener('click', displayAll);
}

function search(event) {
    event.preventDefault();

}

function displayAll(event) {
    event.preventDefault();

    createFullList();
}

function clearHTML() {

}

function createFullList(showData) {
    for(let i = 0; i < data.length; i++) {
        const objectLi = document.createElement('li');
        appendElement = document.querySelector('#list');
        appendElement.appendChild(objectLi);

        const createObjectUl = document.createElement('ul');
        objectLi.appendChild(createObjectUl);

        const letter = document.createElement('p');
        letter.innerText = data[i].letter;
        createObjectUl.appendChild(letter);

        const position = document.createElement('p');
        position.innerText = data[i].position;
        createObjectUl.appendChild(position);

        const lyrics = document.createElement('p');
        lyrics.innerText = data[i].lyrics;
        createObjectUl.appendChild(lyrics);
    }
}