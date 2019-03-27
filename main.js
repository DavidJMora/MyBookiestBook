window.onload = init;

function init () {
    const searchButton = document.querySelector('#search');
    searchButton.addEventListener('click', search);

    const displayAllButton = document.querySelector('#display-all');
    displayAllButton.addEventListener('click', displayAll);
}

function search(event) {
    event.preventDefault();
    userInput = document.querySelector('#search-input').value; 
    for(let i = 0; i < alphabetAerobic.length; i++) {

        if(alphabetAerobic[i].letter.includes(userInput)) {
            createHTML(alphabetAerobic[i]);
        }

    }

}

function displayAll(event) {
    event.preventDefault();

    for(let i = 0; i < alphabetAerobic.length; i++) {
        const data = alphabetAerobic[i]
        createHTML(data);
    }
}

function clearHTML() {
    
}

function createHTML(data) {
    const objectLi = document.createElement('li');
    appendElement = document.querySelector('#list');
    appendElement.appendChild(objectLi);

    const createObjectUl = document.createElement('ul');
    objectLi.appendChild(createObjectUl);

    const letter = document.createElement('p');
    letter.innerText = data.letter;
    createObjectUl.appendChild(letter);

    const position = document.createElement('p');
    position.innerText = data.position;
    createObjectUl.appendChild(position);

    const lyrics = document.createElement('p');
    lyrics.innerText = data.lyrics;
    createObjectUl.appendChild(lyrics);
    
}