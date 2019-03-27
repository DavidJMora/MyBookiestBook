window.onload = init;

function init () {
    const searchButton = document.querySelector('#search');
    searchButton.addEventListener('click', search);

    const displayAllButton = document.querySelector('#display-all');
    displayAllButton.addEventListener('click', displayAll);
}

function search() {

}

function displayAll() {
createFullList();
}

function createHTML() {

}

function createFullList() {
    for(let i = 0; i < data.length; i++) {
        const objectLi = document.createElement('li');
        objectLi.innerText = data[i];
        appendElement = document.querySelector('#list');
        appendElement.appendChild(objectLi);

        
    }
}